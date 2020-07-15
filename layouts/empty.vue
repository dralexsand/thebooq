<template>
  <div class="empty-layout">
    <nuxt/>
  </div>
</template>

<script>
  import Nav from "../components/Nav"
  
  export default {
    name: "empty",
    components: {
      Nav
    },
  }
</script>

<style scoped>
  .empty-layout{
    display: flex;
    justify-content: center;
    padding-top: 5rem;
  }
</style>
