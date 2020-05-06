import Vue from 'vue'
import App from './App.vue'

//new Vue({
//	render: h => h(App),				
//}).$mount('#app')

//render: function(h) {
//	return h(App);  App.vueを描画しなさいという意味
//}
//app.$mount('#app');

var app = new Vue({
	render: h => h(App),
	data: {
		message: ''
	}				
});
app.$mount('#app');
