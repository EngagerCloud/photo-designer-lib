const photoDesigner = require("./index.js").photoDesigner;

photoDesigner({
	root: {
		type: "layer",

		x: 0,
		y: 0,

		width: 640,
		height: 640,

		children: []
	}
}).then(function(designer){
	designer.render("image/png").then(function(url){
		console.log(url);
	})

	console.log(require("./src/lib/moduleManager").getModules());
});

