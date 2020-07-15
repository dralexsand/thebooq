<template>
  <div>
    
    <blank/>
    
    <div class="w-25 p-3 mb-1 text-dark">
      <h4>Crank: High Voltage</h4>
    </div>
    
    <blank/>
    <localmenu/>
    <blank/>
    
    <div class="w-75 p-3 mb-1 text-dark">
      
      <div>
        <ul class="list-unstyled">
          
          <b-media :key="index" tag="li" v-for="index in 10">
            <h5 class="mt-0 mb-1">Updated at <i>2020.07.15 09:10:11</i></h5>
            <b class="mb-0">
              <b-link href="/modeedit">
                Crank: High Voltage edited
              </b-link>
            </b>
            <h6 class="mt-0 mb-1">User: <i>Username</i></h6>
            <hr>
          </b-media>
        
        </ul>
      </div>
    
    </div>
  
  </div>
</template>

<script>
  
  import localmenu from '../components/helpers/localmenu'
  import blank from '../components/helpers/blank'
  
  export default {
    layout: "results",
    components: {
      blank, localmenu
    }
  }
</script>

<style>

</style>
