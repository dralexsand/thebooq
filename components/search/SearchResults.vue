<template>
  <div>
    <h4 class="title_search_page">
      {{title_search_page}}
    </h4>

    <v-row
      class="mb-6 bg_cyan"
      no-gutters
      v-for="(article, i) in articles" :key="i"
    >
      <v-col
        class="col-12"
      >

        <SearchResultItem
          :article="article"
        ></SearchResultItem>

      </v-col>
    </v-row>

  </div>
</template>
<script>

    import SearchResultItem from '@/components/search/SearchResultItem';

    import axios from '@/plugins/axios';

    export default {
        name: 'SearchResults',
        props: {
            mode_request: '',
            searchtag: ''
        },
        components: {
            SearchResultItem
        },
        data: () => ({
            title_search_page: 'Search results',
            articles: [],
        }),
        async created() {
            this.getData();
        },
        methods: {
            async getData() {

                let api;

                switch (this.mode_request) {
                    case 'all':
                        this.title_search_page = "All results";
                        api = 'arti';
                        break;
                    case 'like':
                        this.title_search_page = "Like results";
                        api = 'arti_tag_like/' + this.searchtag;
                        break;
                    case 'history':
                        this.title_search_page = "History results";
                        api = 'history/' + this.searchtag;
                        break;
                    default:
                        this.title_search_page = "Default.All results";
                        api = 'arti';
                        break;
                }

                try {
                    let res = await axios.get(api);
                    this.articles = res.data;
                } catch (e) {
                    console.log('Error: ' + e);
                }
            },
        }
    }
</script>

<style scoped>
  .title_search_page {

  }

  .bg_cyan {
    background: rgba(0, 146, 168, 0.08);
  }
</style>
