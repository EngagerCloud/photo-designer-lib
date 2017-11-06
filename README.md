# photo-designer-lib


Library for designing marketing images. 

## Table of contents

<!-- vim-markdown-toc GFM -->

* [About this project](#about-this-project)
	* [How did we solve problems?](#how-did-we-solve-problems)
		* [Custom modules](#custom-modules)
		* [Rendering images](#rendering-images)
* [Installation](#installation)
* [Usage](#usage)
	* [Using on server](#using-on-server)
	* [Using with Webpack](#using-with-webpack)
	* [Using with SystemJS](#using-with-systemjs)
* [Development](#development)
	* [Testing](#testing)
		* [Browser](#browser)
		* [Server](#server)
* [Authors](#authors)

<!-- vim-markdown-toc -->

## About this project

There were 3 main problems we encountered when we started developing software for creating marketing material. 

 * We can not have dynamic image content (first version we developed rendered images only on frontend and we could not change anything on backend)

 * We simply lacked power to extend it simply (for example, if we wanted to add ability to add blur, we had to change a lot of code)

 * Design of image was hardcoded and with this library we want to make image as abstract as possible and let you parametrize it

### How did we solve problems? 

First we defined layer as smallest unit of organization. 

Layer is instance of what we call Module.

Module can be for example text, image, stock image, blur... 

#### Custom modules

You as user of this library can use modules we provided or write your own modules. 

#### Rendering images

What you need to render image is library configuration. 

You can write it yourself or generate it using this library. 

When you have instance of this library configured, you can render image. (Both on frontend and backend)

## Installation

```bash
npm install photo-designer-lib
```

## Usage

### Using on server

For usage on server, you will also have to install [canvas](https://github.com/Automattic/node-canvas). 

```bash
npm install canvas --save
```

### Using with Webpack

If you want to use it with webpack, you need to make it ignore ``canvas`` module. 

```javascript
module.exports = {
	node: {
		canvas: 'empty'
	}
};
```

### Using with SystemJS

If you want to use it with SystemJS, you need to make it ignore ``canvas`` module. 

```javascript
System.config({
	map: {
		'canvas': '@empty'
	}
});
```

## Development

### Testing

#### Browser

```bash
npm run serve # and open console in browser
```

#### Server

```
node ./example.js
```

## Authors

 * [Nemanja Nedeljković](https://nemanja.top/)

 * [Nikola Milenković](https://github.com/nikolamilenkovic)

