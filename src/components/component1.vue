<template>
	<div>
		<h1>Component 1</h1>
		<p class = "back" v-on:click = "backToMain">Back</p>
	</div>
</template>
<script>
export default {
	methods:{
		backToMain(){
			
      		this.$router.push('/')
		}
	}
}	
</script>
<style >
	
	

</style>