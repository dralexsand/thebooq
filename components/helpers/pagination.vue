<template>
  <div class="overflow-auto">
    
    <div class="mt-3">
      <b-pagination-nav
        v-model="currentPage"
        :number-of-pages="pages"
        base-url="#"
        last-number
      ></b-pagination-nav>
    </div>
    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pages: 100,
        currentPage: 5
      }
    }
  }
</script>
