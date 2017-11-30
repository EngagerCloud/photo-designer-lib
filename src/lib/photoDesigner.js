// Helpers for Canvas

const newCanvas = require("../helpers/newCanvas.js");
const exportCanvas = require("../helpers/exportCanvas");

// Singelton for registering modules

const moduleManager = require("./moduleManager");

// Built in modules

require("../modules/index");

// Layer initializer

const dm = require("./module");

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
			return new Promise(function(resolve, reject){
				if(config === null){
					photoDesigner._setConfig(photoDesigner._defaultConfig);
				} else {
					photoDesigner._setConfig(config);
				}

				photoDesigner._setCanvas(newCanvas(photoDesigner._config.root.width, photoDesigner._config.root.height));

				dm(config.root);

				resolve(photoDesigner);
			});
		},

		// Layer management and rendering
		
		_render: function(){
			// Render layers to canvas

			return new Promise(function(resolve, reject){
				resolve();
			});
		},

		render: function(format, quality){
			return new Promise(function(resolve, reject){
				photoDesigner._render().then(function(){
					exportCanvas(photoDesigner._canvas, format, quality).then(function(url){
						resolve(url);
					});
				})
			});
		}
	}

	return photoDesigner._init(config);
}

