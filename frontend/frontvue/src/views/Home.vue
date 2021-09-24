<template>
  <div id="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Footer/>
    <Header/>
  </div>
</template>

<script>
// @ is an alias to /src

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
  }
}
</script>

<style scoped>
#home {
  text-align: center;
   width: 100%;
  height: 60vh;
 

}
</style>