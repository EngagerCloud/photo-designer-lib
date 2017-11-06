# photo-designer-lib


Library for designing marketing images. 

It can work in browser or on server. 

## Usage

### Installation

```bash
npm install photo-designer-lib
```

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

