Vue.component('my-hello', {
	template: `<div>こんにちは{{ name }}!</div>`,
	data: function(){
		return {
			name: 'vue.js'
		}
	}
});

var app = new Vue({
	el: "#app"
});
