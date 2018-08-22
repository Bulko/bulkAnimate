# BulkAnimate
> BulkAnimate is a plugin inspirated by animateLoading under WTFPL

## Dependecies
ES6, Jquery 1 || 2 || 3

## Optional Dependecies
Animate.css

## How to ise it
In your main js file import this file
`import BulkAnimate from './{YOUR-PATH}/bulkAnimate';`

Then init this plugin in your document.ready (or ready function for turbolinks users)
```JS
let bulkAnimate = new BulkAnimate();
bulkAnimate.init([
		[ ".element-selector", "animation-class", optional-delay ],
		[ ".element-selector", "animation-class", optional-delay ],
		[ ".element-selector", "animation-class" ],
	]);
```
## Licence

### DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE

TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

1. You just DO WHAT THE FUCK YOU WANT TO.

![Bulko logo](http://www.bulko.net/templates/img/bko.png "Bulko logo")
