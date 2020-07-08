<template>
  <section>
    <h4>Error</h4>
    <nuxt-link to="/">Home</nuxt-link>
  </section>
</template>

<script>
  export default {
    name: "error"
  }
</script>

<style scoped>
  section {
    width: 600px;
    margin: 0 auto;
    padding-top: 5rem;
  }
  
  h4 {
    color: red;
  }
</style>
