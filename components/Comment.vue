<template>
  <v-card
    class="mx-auto"
  >
    <v-card-title>
      User Id: {{comment.user_id}}
    </v-card-title>

    <v-card-subtitle>
      Updated: <b>{{comment.updated}}</b>
    </v-card-subtitle>

    <v-card-actions>

      <v-btn
        color="primary"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

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
          {{comment.content}}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
    export default {
        props: {
            comment: {
                user_id:'',
                content:'',
                tag:'',
                updated:'',
            },
        },
        data: () => ({
            show: false,
        }),
    }
</script>
