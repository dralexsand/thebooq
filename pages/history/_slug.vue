<template>
  <div>
    <h4>{{page_title}}</h4>
    <h5>{{$route.params.slug}}</h5>

    <ActionPanel
      :article="article"
    ></ActionPanel>

    <HistoryItem
      v-for="(item, index) in articles" :key="index"
      :article="item"
    >
    </HistoryItem>

  </div>
</template>
<script>

    import ActionPanel from "@/components/search/ActionPanel";
    import HistoryItem from "@/components/HistoryItem";
    import axios from '@/plugins/axios';

    let api;

    export default {
        layout: 'content-layout-edit',
        components: {
            HistoryItem, ActionPanel
        },
        data() {
            return {
                page_title: 'history',
                articles: [],
                article: {},
                searchtag: '',
            }
        },
        methods: {
            async getData() {

                let searchtag = this.$route.params.slug;
                this.searchtag = searchtag;

                api = 'arti_tag/' + searchtag;
                let res = await axios.get(api);
                this.article = res.data.article[0];

                api = 'historybytag/' + searchtag;
                res = await axios.get(api);
                this.articles = res.data;
            },
        },
        async created() {
            this.getData();
        },

    }
</script>
<style scoped>

</style>
