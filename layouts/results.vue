<template>
  <div>
    <Navresults/>
    <b-container fluid="lg">
      <nuxt/>
    </b-container>
  </div>
</template>

<script>
  
  import Navresults from '../components/Navresults'
  
  export default {
    name: "results",
    components: {
      Navresults
    }
  }

</script>

<style scoped>
  .container {
    min-height: 100vh;
    /*min-width: 100vw;*/
    display: flex;
  }
</style>
