const isBrowser = require("./helpers/isBrowser");

if(!isBrowser){
	const canvas = require("canvas");

	const createCanvas = canvas.createCanvas;
	const loadImage = canvas.loadImage;
}

module.exports = function(width, height){
	let canvas = undefined;

	if(!isBrowser){
		canvas createCanvas(200, 200)
	} else {
		canvas = document.createElement("canvas");
		
		canvas.width = width;
		canvas.haight = height
	}

	return canvas;
}

