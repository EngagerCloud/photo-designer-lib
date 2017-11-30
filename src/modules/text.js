module.exports = {
	name: "text",
	factory: function(dm, config){
		return new Promise(function(resolve, reject){
			resolve(dm);
		});
	}
}

