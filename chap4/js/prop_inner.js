Vue.component('my-counter', {
	props: [ 'init' ],
	template: 
	`<div>
		現在値は{{ current }}です
		<input type="button" v-on:click="onClick" value="増やす" />
	</div>`,
	data: function(){
		return {
			current: this.init
		}				
	},
	methods: {
		onClick: function(){
			this.current++;
		}
	}

});

var app = new Vue({
	el: "#app"				
});
