const isBrowser = require("./helpers/isBrowser");

module.exports = function(width, height){
	let canvas = undefined;

	if(!isBrowser){
		const { createCanvas, loadImage } = require('canvas')

		canvas = createCanvas(width, height)
	} else {
		canvas = document.createElement("canvas");
		
		canvas.width = width;
		canvas.haight = height
	}

	return canvas;
}

