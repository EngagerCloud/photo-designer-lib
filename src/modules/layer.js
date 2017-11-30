module.exports = {
	name: "layer",
	factory: function(dm, config){
		return new Promise(function(resolve, reject){
			resolve(dm);
		});
	}
}

