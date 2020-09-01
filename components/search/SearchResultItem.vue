<template>
  <v-card
    class="mx-auto"
  >
    <v-card-title>
      {{article.title}}
    </v-card-title>

    <v-card-subtitle>
      {{article.tag}}
    </v-card-subtitle>

    <v-card-subtitle>
      Article Id: {{article.article_id}}
    </v-card-subtitle>

    <v-card-subtitle v-if="article.tags.length>0">
      <v-chip
        v-for="(tag, i) in article.tags"
        :key="i"
      >
        {{tag.tag_original}}
      </v-chip>
    </v-card-subtitle>

    <v-card-subtitle v-else>
      No tags
    </v-card-subtitle>

    <v-card-actions>

      <ActionPanel
        :article="article"
      ></ActionPanel>

      <v-spacer></v-spacer>

      <v-btn
        color="cyan"
        text
      >
        Content:
      </v-btn>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>

    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{article.content}}
        </v-card-text>
      </div>
    </v-expand-transition>

  </v-card>
</template>

<script>

    import ActionPanel from "@/components/search/ActionPanel";

    export default {
        props: {
            title: '',
            article_id: '',
            content: '',
            tag: '',
            tags: '',
            article: {},
        },
        data: () => ({
            show: false,
        }),
    }
</script>
