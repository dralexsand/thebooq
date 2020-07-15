<template>
  <section>
    <h4>User: {{user.name}} </h4>
    <br>
    <h4>Users site: {{user.website}} </h4>
    <br>
    <h4>Users email: {{user.email}} </h4>
    <br>
    <nuxt-link to="/users">To Users</nuxt-link>
  
    <a @click.prevent="editUser(user)" href="#">Edit {{user.id}}</a>
  </section>
</template>

<script>
  export default {
    layout: "results",
    validate({params}) {
      //console.log('validate')
      return /^\d+$/.test(params.id)
    },
    
    async asyncData({$axios, params}){
      const user = await $axios.$get('http://jsonplaceholder.typicode.com/users/' + params.id)
      return {user}
    },
    
    methods: {
      editUser(user) {
        this.$router.push('/users/edit/' + user.id)
      }
    },
  }
</script>

<style scoped>

</style>
