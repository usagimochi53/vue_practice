var MyHello = {
	template: `<div>hello {{ name }}!</div>`	
}

var app = new Vue({
	el: "#app",
	components: {
		'my-hello': MyHello
	}
});
