<template>
  <div id="navegacion">   
      <router-view/>
  </div>
</template>

<style scoped>
#navegacion  {
  height: 10vh; 

}

#nav {
  padding: 100px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #0818a8;
}
</style>

