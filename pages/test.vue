<template>
  <section>
    <form action="">
      <h4 style="text-align: center;">Searchblank page</h4>
      <div class="form-group">
        <input id="s" type="text" class="form-control">
      </div>
      <p>
        <nuxt-link to="/">To home page</nuxt-link>
      </p>
      <button type="submit" className="btn btn-primary">Search</button>
    </form>
  </section>
</template>

<script>
 
  export default {
    layout: 'searchblank',
  }
</script>

<style scoped>
  #s{
    width: 500px;
    border-radius: 50px;
    padding: 10px;
  }
  form {
    width: 500px;
    height: 200px;
    position: absolute;
    top:50%;
    left: 35%;
    /*margin: auto auto;*/
  }
</style>
