<template>
	<div>
		<h1>Component 2</h1>
		<p v-on:click = "backToMain">Back</p>
	</div>
	
</template>
<script>
	export default {
		methods:{
			backToMain(){
				let el = document.querySelectorAll('.b1');
      			for (let i=0; i<el.length; i++){
      				el[i].classList.remove('disp-none');
      			}
      			this.$router.push('/')
			}
		}
	}	
</script>
<style>
	
</style>