<template>
  <section>
    <form action="">
      <h4>Login page</h4>
      <div class="form-group">
        <input type="text" class="form-control">
      </div>
      <p>
        <nuxt-link to="/">To home page</nuxt-link>
      </p>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </section>
</template>

<script>
  export default {
    layout: 'empty'
  }
</script>

<style scoped>
  form {
    width: 500px;
    margin: 0 auto;
  }
</style>
