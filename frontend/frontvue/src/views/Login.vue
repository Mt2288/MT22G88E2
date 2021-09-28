<template>
  <div id="dashboard">
    <Header/> 
    <Inicio/>    
  </div>
</template>


<script>
// @ is an alias to /src
import Inicio from '@/components/Inicio.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'Login',
  components: {
    Inicio,    
    Header,  
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

