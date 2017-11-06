let modules = {}

let moduleManager = {
	addModule(module){
		modules[module.name] = module;
	},
	getModules: function(){
		let modulesArray = Object.keys(modules);

		modulesArray = modulesArray.map(function(key){
			return modules[key];
		});

		return modulesArray;
	},
	getModulesObject: function(){
		return modules;
	},
	getModule(name){
		return modules[name];
	}
}

module.exports = moduleManager;

