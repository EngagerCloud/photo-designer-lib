const newCanvas = require("./newCanvas");

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
		}

		// Constructor and canvas stuff

		_canvas: undefined,

		_init: function(config){
			if(config === null){
				photoDesigner._setConfig(photoDesigner._defaultConfig);
			}

			photoDesigner._canvas = newCanvas();

			return photoDesigner;
		}
	}

	return photoDesigner._init(config);
}

