<template>
  <div id="app">
  
    <Menu></Menu>    
  </div>
</template>

<script>


export default {
  name: 'app',
  data () {
    return {
     
    }
  }
    
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a:active{
  color: green;
}
.router-link-exact-active{
    text-decoration: none;
}
.disp-none{
  display:none;
}
.back:hover{
  cursor:pointer;
};
</style>
