<template>
  <div>

    <v-card
      class="mx-auto"
      width="100%"
    >

      <v-card-title>
        User Id: {{article.user_id}}
      </v-card-title>

      <v-card-subtitle>
        Updated: <b>{{article.created}}</b>
      </v-card-subtitle>

      <v-card-text>
        <span v-if="article.indb===0">
          Changes not published
        </span>
        <span v-else>
          Changes published
        </span>
      </v-card-text>

    </v-card>

  </div>
</template>
<script>
    export default {
        name: 'HistoryItem',
        props: {
            article: {
                article_id: '',
                user_id: '',
                title: '',
                tag: '',
                content: '',
                indb: '',
                created: '',
            }
        },
        data() {
            return {}
        }
    }
</script>
<style scoped>
  .text_italic {
    font-style: italic;
    font-size: 0.8em;
  }
</style>
