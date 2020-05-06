var app = new Vue({
	el: "#app",
	data: {
		message: ''
		},
	methods: {
		onClick: function(){
			this.message = new Date().toLocaleString();
			}
		}
	});
