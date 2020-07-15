<template>
  <div>
    <b-row>
      <b-col>TheBooq</b-col>
    </b-row>
    <blank/>
    <b-row>
      <b-col><Search/></b-col>
    </b-row>
  </div>
</template>

<script>
  import Search from '../components/Search'
  import blank from '../components/helpers/blank'
  
  export default {
    components: {
      Search,blank
    }
  }
</script>

<style>

</style>
