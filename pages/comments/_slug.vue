<template>
  <div>
    <h4>{{page_title}}</h4>
    <h5>{{$route.params.slug}}</h5>

    <ActionPanel
      :article="article"
    ></ActionPanel>

    <v-row>
      <v-col cols="12" md="12">
        Article: <b>{{article.title}}</b>
      </v-col>
    </v-row>

    <hr>

    <div v-if="comments.length>0">

      <div v-for="(item, index) in comments" :key="index">
        <Comment
          :comment="item"
        >
        </Comment>
      </div>
    </div>

    <hr>

    <v-row>
      <v-col cols="12" md="12">
        <span class="text_italic">Your comment:</span>
        <v-textarea
          v-model="new_comment"
        >
        </v-textarea>
      </v-col>
    </v-row>

    <v-btn
      color="primary"
      @click="addComment"
    >
      Add comment
    </v-btn>

  </div>
</template>
<script>

    import ActionPanel from "@/components/search/ActionPanel";
    import axios from '@/plugins/axios';
    import Comment from "@/components/Comment";

    let api, url;
    let api_get_user_ip = 'http://ip-api.com/json';

    export default {
        layout: 'content-layout-edit',
        components: {
            Comment
        },
        data() {
            return {
                page_title: 'comments',
                article: {},
                comments: [],
                searchtag: '',
                new_comment: '',
                current_date: '',
                user_ip: '',
            }
        },

        methods: {
            async getUserIp() {
                let user_info = await axios.get(api_get_user_ip);
                this.user_ip = user_info.data.query;
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
            addComment() {
                this.saveComment();
                this.getComments();
                this.new_comment = '';

                url = '/comments/' + this.searchtag;
                this.$router.push(url);
            },
            saveComment() {
                this.getCurrentFormattedDate();

                api = 'comments';
                axios.post(api, {
                    article_id: this.article.article_id,
                    comment_id: 0,
                    user_id: this.user_ip,
                    tag: this.article.tag,
                    content: this.new_comment,
                    indb: 0,
                    created: this.current_date,
                    updated: this.current_date
                });
            },
            async getData() {
                let searchtag = this.$route.params.slug;
                this.searchtag = searchtag;

                //api = 'arti_tag/' + this.searchtag;
                api = 'arti_tag/' + searchtag;
                let res = await axios.get(api);
                this.article = res.data.article[0];
            },
            async getComments() {
                api = 'comments_by_tag/' + this.searchtag;
                let res = await axios.get(api);
                console.log('COMMENTS');
                console.log(res.data);
                this.comments = res.data;
            },
        },
        async created() {
            this.getData();
            this.getComments();
            this.getUserIp();
        },

    }
</script>
<style scoped>
  .text_italic {
    font-style: italic;
    font-size: 0.8em;
  }
</style>
