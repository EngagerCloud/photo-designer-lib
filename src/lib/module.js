const moduleManager = require("./moduleManager");

module.exports = function(config){
	const dm = {
		name: undefined, 

		config: undefined,

		_init: function(config){
			return new Promise(function(resolve, reject){
				dm.config = config;

				config.children = (config.children || []).map(function(child){
					return module.exports(child);
				});

				Promise.all(config.children).then(function(children){
					config.children = children;

					moduleManager.getModule(config.type).factory(dm, config).then(function(){
						resolve(dm);
					});
				})
			});
		},

		_render: function(){},
		_renderChildren: function(){
			return new Promise(function(resolve, reject){
				function render(elements){
					if(elements.lenghth == 0){
						resolve();
					}

					const element = elements.shift();

					element.render().then(function(){
						render(elements);
					})
				}

				render(children);
			});
		},

		render: function(){
			return new Promise(function(resolve, reject){
				_render().then(function(){
					_renderChildren().then(function(){
						resolve();
					});
				});
			});
		},
		config: {}
	}

	return dm._init(config);
}

