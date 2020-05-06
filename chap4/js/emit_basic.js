Vue.component('my-counter', {
	props: [ 'step' ],
	template: `<button type="button" v-on:click="onClick">
	{{ step }}
	</button>`,
	methods: {
		onClick: function(){ 
			this.$emit('plus' , Number(this.step));
		}
	}
});

var app = new Vue({
	el: "#app",
	data: {
		current: 0
	},				
	methods: {
		onplus: function(e){
			this.current += e
		}
	}
});
