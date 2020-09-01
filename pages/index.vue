<template>

  <div>

    <Search/>

  </div>

</template>

<script>

    import Search from "../components/ui/Search";

    export default {
        layout: 'home-layout',
        components: {
            Search
        },
        data() {
            return {
                'textsearch': '',
            }
        },
        methods: {
            submit() {

            },
            onEnterSearch(textsearch) {
                this.textsearch = textsearch;
            }
        },

    }
</script>

<style>

</style>
