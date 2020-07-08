<template>
  <section>
    <h4>{{pageTitle}}</h4>
    <ul>
      <li :key="user.id" v-for="user of users">
        <a @click.prevent="openUser(user)" href="#">{{user.name}}</a>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    async asyncData({$axios}){
      const users = await $axios.$get('http://jsonplaceholder.typicode.com/users')
      return {users}
    },
    data: () => ({
      //users: [],
      pageTitle: 'Users list page',
    }),
    methods: {
      openUser(user) {
        this.$router.push('/users/' + user.id)
      }
    },
  }
</script>

<style scoped>

</style>
