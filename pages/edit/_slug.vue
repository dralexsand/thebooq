<template>
  <div>

    <ActionPanel
      :article="article"
    ></ActionPanel>

    <v-btn
      color="primary"
      @click="saveContent"
    >
      Save
    </v-btn>

    <v-container v-if="article">

      <v-row>
        <v-col cols="12" sm="12" md="12">
          <h5>Article ID: {{article.article_id}}</h5>
          <span class="text_italic" v-if="current_date!==''">
            Last updated: {{current_date}}
          </span>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="12" md="12">
          <v-text-field
            label="Title"
            :value="article.title"
          >
          </v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <client-only>
          <v-col cols="12" md="12">
            <quill-editor
              solo
              label="Content"
              ref="editor"
              v-model="content"
              :options="editorOption"
            >
            </quill-editor>
          </v-col>
        </client-only>
      </v-row>

      <v-row>
        <v-col cols="12" md="12">
          Exist tags:
          <v-card-subtitle v-if="article.tags.length>0">
            <v-chip
              v-for="(tag, i) in article.tags"
              :key="i"
            >
              {{tag.tag_original}}
            </v-chip>
          </v-card-subtitle>

        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="12">
          New tags: <span class="text_italic">(You can add new tags by separating them with commas)</span>
          <v-textarea
            v-model="tags_str"
          >
          </v-textarea>
        </v-col>
      </v-row>

    </v-container>

  </div>
</template>
<script>

    import ActionPanel from "@/components/search/ActionPanel";
    import axios from '@/plugins/axios';

    let api;
    let api_get_user_ip = 'http://ip-api.com/json';

    export default {
        layout: 'content-layout-edit',
        data() {
            return {
                current_date: '',
                user_ip: '',
                searchtag: '',
                tags_str: '',
                article: {
                    title: '',
                    article_id: '',
                    content: '',
                    tag: '',
                    tags: '',
                },
                content: '',
                editorOption: {
                    theme: 'snow',
                    modules: {
                        toolbar: [
                            ['bold', 'italic', 'underline', 'strike'],
                            ['blockquote', 'code-block'],
                            [{'header': 1}, {'header': 2}],
                            [{'list': 'ordered'}, {'list': 'bullet'}],
                            [{'script': 'sub'}, {'script': 'super'}],
                            [{'indent': '-1'}, {'indent': '+1'}],
                            [{'direction': 'rtl'}],
                            [{'size': ['small', false, 'large', 'huge']}],
                            [{'header': [1, 2, 3, 4, 5, 6, false]}],
                            [{'font': []}],
                            [{'color': []}, {'background': []}],
                            [{'align': []}],
                            ['clean'],
                            ['link', 'image', 'video']
                        ]
                    }
                },
            }
        },
        methods: {
            async getUserIp() {
                let user_info = await axios.get(api_get_user_ip);
                this.user_ip = user_info.data.query;
            },
            async getData() {
                let searchtag = this.$route.params.slug;

                this.searchtag = searchtag;

                api = 'arti_by_tag/' + searchtag;
                let res = await axios.get(api);
                this.article = res.data[0];
                this.content = res.data[0].content;
            },
            getCurrentFormattedDate() {
                let current_datetime = new Date();
                let Y = current_datetime.getFullYear().toString();
                let M = (current_datetime.getMonth() + 1).toString();
                M = M.padStart(2, '0');
                let D = current_datetime.getDate().toString();
                D = D.padStart(2, '0');
                let H = current_datetime.getHours().toString();
                H = H.padStart(2, '0');
                let Min = current_datetime.getMinutes().toString();
                Min = Min.padStart(2, '0');
                let S = current_datetime.getSeconds().toString();
                S = S.padStart(2, '0');
                let formatted_date = Y + "-" + M + "-" + D + " " + H + ":" + Min + ":" + S;
                this.current_date = formatted_date;
            },
            saveContent() {
                this.saveArticle();
            },
            saveArticle() {
                this.getCurrentFormattedDate();

                api = 'arti_mod';
                axios.post(api, {
                    article_id: this.article.article_id,
                    user_id: this.user_ip,
                    title: this.article.title,
                    type: 'article',
                    tag: this.article.tag,
                    content: this.content,
                    indb: 0,
                    isnew: 0,
                    created: this.current_date
                });
            },

        },
        async created() {
            this.getData();
            this.getUserIp();
        },

    }
</script>
<style scoped>
  p {
    font-size: 0.7em;
    font-style: italic;
  }

  .text_italic {
    font-style: italic;
    font-size: 0.8em;
  }
</style>
