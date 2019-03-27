<template>
  <div id="app">
    <router-link id = "c1" to="/component1">component1</router-link>
    <router-link to="/component2">component2</router-link>
    <router-link to="/component3">component3</router-link>
    <router-view></router-view>
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

</style>
