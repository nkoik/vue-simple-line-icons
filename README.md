# Simple Line Icons as a Vue Component ![VueJS v2.x compatible](https://img.shields.io/badge/vue%202.x-compatible-green.svg)

This is a Vue wrapper component for Simple Line Icons ( https://github.com/thesabbir/simple-line-icons/)
<p align="center">
<a href="https://www.npmjs.com/package/vue-simple-line"><img src="https://img.shields.io/badge/npm-1.0.5-blue.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/vue-simple-line"><img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License"></a>
    [![Codacy Badge](https://api.codacy.com/project/badge/Grade/d20a7f2f330049e582f6c58a63133012)](https://www.codacy.com/app/nkoik/simplelineicons?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=nkoik/simplelineicons&amp;utm_campaign=Badge_Grade)
</p>

## ✔ Installation

Get the package:
```bash
npm install vue-simple-line
```

## ✔ Use

Register SimpleLineIcons in your app:
```js
In main.js
import Vue from 'vue'
import SimpleLineIcons from 'vue-simple-line'

Vue.component('simple-line-icons', SimpleLineIcons)

OR

In your component.vue
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
	color="mediumseagreen" />

```
### API

Required Prop

| Property | Description | Type | Value
|:--|:--|:--|
| icon | Icon name | <i>String</i> | Any |

Optional Props

| Property | Description | Type | Value
|:--|:--|:--|
| rotate | Rotation degrees | <i>Number</i> | 0-360 |
| size | Icon size | <i>String</i> | small, large |
| color | Color | <i>String</i> | Hex,rgb(a),hsl(a),css color name |
| bold | Icon weight | <i>Boolean</i> | false |

