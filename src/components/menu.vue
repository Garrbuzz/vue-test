<template>
	<div>
		    <router-link to="/"></router-link>
		    <div>
		      <button class = "b1" v-on:click = "clickComponent('component1')">component1</button>
		      <button class = "b1" v-on:click = "clickComponent('component2')">component2</button>
		      <button class = "b1" v-on:click = "clickComponent('component3')">component3</button>  
		    </div>
    
    <router-view></router-view>
	</div>
</template>
<script>
	export default{
		methods: {
      clickComponent(comp){
      	let el = document.querySelectorAll('.b1');
      	for (let i=0; i<el.length; i++){
      		el[i].classList.add('disp-none');
      }
      	

        this.$router.push(comp)
      }
    }
	}
</script>
<style>
	
</style>