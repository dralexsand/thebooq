<template>
  <section>
    <h4>Edit User {{user.name}}, {{user.username}} </h4>
    <p>
      <textarea class="form-control" rows="3">{{user.address.city}}</textarea>
    </p>
    <p>
      <textarea class="form-control" rows="3">{{user.company.catchPhrase}}</textarea>
    </p>
  
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
    "lat": "-37.3159",
    "lng": "81.1496"
    }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
    }
    
    
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
  }
</script>

<style scoped>

</style>
