const newCanvas = require("./newCanvas");
const exportCanvas = require("./exportCanvas");

module.exports = function(config = null) {
	let photoDesigner = {
		// Config stuff

		_config: undefined,

		_defaultConfig: {
			root: {
				type: "layer",

				x: 0,
				y: 0,

				width: 640,
				height: 640
			}
		},

		_setConfig: function(config){
			// TODO config validator
			
			photoDesigner._config = config;
		},

		// Constructor and canvas stuff

		_canvas: undefined,

		_setCanvas: function(canvas){
			photoDesigner._canvas = canvas;
		},

		getCanvas: function(){
			return photoDesigner._canvas;
		},

		_init: function(config){
			if(config === null){
				photoDesigner._setConfig(photoDesigner._defaultConfig);
			}

			photoDesigner._setCanvas(newCanvas());

			return photoDesigner;
		},

		// Layer management and rendering
		
		_render: function(){
			// Render layers to canvas

			return new Promise(function(resolve, reject){
				resolve();
			});
		},

		render: function(){
			return new Promise(function(resolve, reject){
				photoDesigner._render().then(function(){
					exportCanvas(photoDesigner._canvas).then(function(url){
						resolve(url);
					});
				})
			});
		}
	}

	return photoDesigner._init(config);
}

