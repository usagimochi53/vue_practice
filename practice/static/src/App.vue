<template>
	<div id="app">
		<p>hello vue.js!</p>
		<HelloWorld message="Welcome to Your Vue.js App"/>
	</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
	name: 'app',
	components: {
		HelloWorld
	}
}
</script>
