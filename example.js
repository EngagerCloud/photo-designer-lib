const photoDesigner = require("./src/photoDesigner")();

photoDesigner.render().then(function(url){
	console.log(url);
})

