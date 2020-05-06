var app = new Vue({
	el: "#app",
	methods: {
		onSubmit: function(e){
			if(!confirm('送信してもいいですか？')){
				e.preventDefault();
				return;
				}
			}
		}	
	});
