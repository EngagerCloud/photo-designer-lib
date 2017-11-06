const isBrowser = require("./isBrowser");

module.exports = function(canvas, format = "image/jpeg", quality = 90){
	return new Promise(function(resolve, reject){
		let src = undefined;

		if(!isBrowser){
			let urlHandler = function(err, image){
				if(err){
					reject(err);
				} else {
					resolve(image);
				}
			}

			if(format == "image/jpeg"){
				src = canvas.toDataURL(format, quality, urlHandler);
			} else {
				src = canvas.toDataURL(format, urlHandler);
			}
		} else {
			if(format == "image/jpeg"){
				src = canvas.toDataURL(format, quality);
			} else {
				src = canvas.toDataURL(format);
			}
			
			resolve(src);
		}
	})
}

