# 😸 SVG - Simple Line Icons ![VueJS v2.x compatible](https://img.shields.io/badge/vue%202.x-compatible-green.svg)

This is a Vue component for Simple Line Icons and you may choose a SVG or a Font icon just with a prop. 
By default component will render SVG icon.

![Simple Line Icons sample](https://image.freepik.com/free-vector/simple-line-icons_302-2147488249.jpg "Sample")
<p align="center">
<a href="https://www.npmjs.com/package/vue-simple-line"><img src="https://img.shields.io/badge/npm-1.1.0-blue.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/vue-simple-line"><img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License"></a>
</p>

### Find the icon name: (http://simplelineicons.com/)

## ✅  Installation

Get the package:
```bash
npm install vue-simple-line
```

## ✅  Use

Register SimpleLineIcons in your app:
```js
// In main.js
import Vue from 'vue'
import SimpleLineIcons from 'vue-simple-line'

Vue.component('simple-line-icons', SimpleLineIcons)

OR

// In your component.vue
import SimpleLineIcons from 'vue-simple-line'

new Vue({
    components: {
        SimpleLineIcons
    }
})
```

In your template you can call it like this:

```html
<simple-line-icons
	icon="plus"
	:rotate="90"
	size="small"
	color="mediumseagreen"
	no-svg
/>

```
### API

Required Prop

| Property | Description | Type | Value
|:--|:--|:--|:--|
| icon | Icon name | <i>String</i> | Any |

Optional Props

| Property | Description | Type | Value
|:--|:--|:--|:--|
| rotate | Rotation degrees | <i>Number</i> | 0-360 |
| size | Icon size | <i>String</i> | small, large |
| color | Color | <i>String</i> | Hex,rgb(a),hsl(a),css color name |
| no-svg | Render font icon instead of svg | <i>Boolean</i> | false |

### License
MIT
