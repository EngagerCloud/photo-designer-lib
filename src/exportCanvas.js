const isBrowser = require("./helpers/isBrowser");

module.exports = function(canvas, format = "image/jpeg", quality = 90){
	const exportCanvas = {
		let src = undefined;

		if(!isBrowser){
			let urlHandler = function(err, image){
				if(error){
					reject(error);
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
	}
}

