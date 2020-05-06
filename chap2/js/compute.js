var app = new Vue({
	el: "#app",
	data: {
		email: 'Y-Suzuki@example.com'
		},
	computed: {
		localemail: function(){
			return this.email.split('@')[0].toLowerCase();
			}
		}
	});
