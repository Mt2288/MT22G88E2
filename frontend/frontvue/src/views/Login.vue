<template>
  <div id="dashboard">
    <Inicio/>
    
  </div>
</template>


<script>
// @ is an alias to /src
import Inicio from '@/components/Inicio.vue'


export default {
  name: 'Login',
  components: {
    Inicio,    
  }
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

