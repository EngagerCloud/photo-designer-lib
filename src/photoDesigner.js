module.exports = function(config = null) {
	let photoDesigner = {
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

		_init: function(config){
			if(config === null){
				photoDesigner._setConfig(photoDesigner._defaultConfig);
			}

			return photoDesigner;
		}
	}

	return photoDesigner._init(config);
}
