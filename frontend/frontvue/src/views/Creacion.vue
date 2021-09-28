<template>
  <div id="dashboard">
    <Header/> 
    <Crear/>    
  </div>
</template>


<script>
// @ is an alias to /src
import Crear from '@/components/Crear.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'Creacion',
  components: {
    Crear,   
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