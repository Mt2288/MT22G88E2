<template>
  <div>
    <div class="container-fluid">
      <!-- 404 Error Text -->
      <div class="text-center">
        <div class="error mx-auto mt-5" data-text="404">404</div>
        <p class="lead text-gray-800 mb-5">Page Not Found</p>
        <p class="text-gray-500 mb-0">
          It looks like you found a glitch in the matrix...
        </p>
        <a href="index.html">&larr; Back to Dashboard</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'error',
  components: { 
  },
}
</script>

<style scoped>
#dashboard h1 {
  text-align: center; 
  width: 100%;
  padding: 1%;
  height: 10vh;  
}

</style>