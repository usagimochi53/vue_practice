Vue.component('my-hello', {
	props: [ 'yourName' ],
	template: `<div>hello {{ yourName }}!</div>`				
});

var app = new Vue({
	el: "#app"
});
