<template>
  <div>

    {{article}}

    <!--<div>
      {{article.title}}
    </div>
    <div>
      {{article.tag}}
    </div>
    <div>
      {{article.content}}
    </div>-->


  </div>
</template>
<script>
    export default {
        name: 'ModeEdit',
        props: {
            article: {}
        },
        created() {
            console.log('article: ' + this.article);
        }
        /*data() {
            return {
                article: {}
            }
        }*/
    }
</script>
