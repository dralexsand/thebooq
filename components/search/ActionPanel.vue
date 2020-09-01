<template>
  <div>

    <v-btn
      v-if="this.$store.state.mode.status!='search'"
      color="cyan"
      text
      @click="toogleStatus('search', article)"
    >
      Search
    </v-btn>

    <v-btn
      v-if="this.$store.state.mode.status!='edit'"
      color="cyan"
      text
      @click="toogleStatus('edit', article)"
    >
      Edit
    </v-btn>

    <v-btn
      v-if="this.$store.state.mode.status!='history'"
      color="cyan"
      text
      @click="toogleStatus('history', article)"
    >
      History
    </v-btn>

    <v-btn
      v-if="this.$store.state.mode.status!='comments'"
      color="cyan"
      text
      @click="toogleStatus('comments', article)"
    >
      Comments
    </v-btn>

  </div>
</template>
<script>

    let url;

    export default {
        name: 'ActionPanel',
        props: {
            article: {},
        },
        /*data() {
            return {
                article: {},
            }
        },*/
        methods: {
            toogleStatus(status, paramsdata) {

                let params = {
                    status: status,
                    article: this.article,
                    paramsdata: paramsdata,
                };

                console.log('STATUS');
                console.log(status);

                this.$store.commit("mode/SET_MODE", params);
                url = '/' + status + '/' + paramsdata.tag;
                this.$router.push(url);
            }
        },
        created() {
            /*console.log('this.article');
            console.log(this.article.article_id);*/
        }
    }
</script>
