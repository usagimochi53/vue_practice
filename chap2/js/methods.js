var app = new Vue({
	el: "#app",
	data: {
		email: 'Y-Suzuki@example.com'
		},
	methods: {
		localemail: function(){
			return this.email.split('@')[0].toLowerCase();
			}
		}
	});
