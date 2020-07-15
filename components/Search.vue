<template>
  <div>
    <b-input-group size="lg">
      <b-form-input
        id="s"
        placeholder="Search" style="width: 200px!important;"
        v-model="value">
      
      </b-form-input>
      <b-input-group-append>
        <b-button id="s_button" ref="button" variant="primary">
          <i class="fas fa-search"></i>
        </b-button>
      </b-input-group-append>
    </b-input-group>
    <br>
    <p>{{ value }}</p>
  </div>
</template>
<style scoped>
  #s {
    width: 200px !important;
  }
  
  #s_button {
    /*width: 5vw;*/
    width: 65px;
    height: 48px;
  }
</style>
<script>
  export default {
    name: 'Search',
    data() {
      return {
        value: ''
      }
    }
  }
</script>
