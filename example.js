const photoDesigner = require("./").photoDesigner;

const designer = photoDesigner({
	root: {
		type: "layer",

		x: 0,
		y: 0,

		width: 640,
		height: 640
	}
});

designer.render("image/png").then(function(url){
	console.log(url);
})

console.log(require("./src/lib/moduleManager").getModules());

