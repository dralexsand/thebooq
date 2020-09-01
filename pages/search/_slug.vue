<template>
  <div>
    <h4>search: {{this.$route.params.slug}}</h4>

    <div v-if="this.$store.state.mode.status==='search'">

      <h4 style="color: red;">Mode: Search</h4>

      <SearchResults
        mode_request="like"
        :searchtag="searchtag"
      >
      </SearchResults>

      <hr>

      <SearchResults
        mode_request="all"
        :searchtag="searchtag"
      >
      </SearchResults>

    </div>

    <div v-if="this.$store.state.mode.status==='edit'">

      <h4 style="color: red;">Mode: Edit</h4>

      <h5>searchtag: {{searchtag}}</h5>
      {{this.$store.state.mode.article.article_id}}

      <hr>

      <!-- ToDo Handle Article -->
      <!--<ModeEdit
        :article="article"
      ></ModeEdit>-->

      <SearchResults
        mode_request="like"
        :searchtag="searchtag"
      >
      </SearchResults>
      <hr>
      <SearchResults
        mode_request="all"
        :searchtag="searchtag"
      >
      </SearchResults>

    </div>

    <div v-if="this.$store.state.mode.status==='history'">

      <h4 style="color: red;">Mode: History</h4>

      <SearchResults
        mode_request="history"
        :searchtag="searchtag"
      >
      </SearchResults>
      <hr>
      <SearchResults
        mode_request="all"
        :searchtag="searchtag"
      >
      </SearchResults>

    </div>

    <div v-if="this.$store.state.mode.status==='comments'">

      <h4 style="color: red;">Mode: Comments</h4>

      <SearchResults
        mode_request="like"
        :searchtag="searchtag"
      >
      </SearchResults>
      <hr>
      <SearchResults
        mode_request="all"
        :searchtag="searchtag"
      >
      </SearchResults>

    </div>


  </div>
</template>
<script>

    import SearchResults from "@/components/search/SearchResults";
    import ModeEdit from '@/components/modes/ModeEdit';

    export default {
        layout: 'content-layout',
        components: {
            SearchResults, ModeEdit
        },
        data() {
            return {
                mode_request: '',
                searchtag: ''
            }
        },
        async created() {
            this.getData();
        },
        methods: {
            async getData() {

                //console.log(this.$route.params.slug);

                let basic_tag = this.$route.params.slug;
                basic_tag = basic_tag.replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, '_');
                basic_tag = basic_tag.toLowerCase();

                this.searchtag = basic_tag;
                this.mode_request = 'like';
            },
        },
    }
</script>
