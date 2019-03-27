<template>
	<div><h1>Component 1</h1></div>
</template>
<script>
export default {
    mounted:function(){
    	let el =  document.querySelector('#c1');
    	console.log(el);

    }
}	
</script>
<style>
	.router-link-exact-active{
		text-decoration: none;
	}
</style>