# Simple Line Icons as a Vue Component [![NPM version](https://img.shields.io/npm/v/vue-form-generator.svg)](https://www.npmjs.com/package/vue-form-generator) ![VueJS v2.x compatible](https://img.shields.io/badge/vue%202.x-compatible-green.svg)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/d20a7f2f330049e582f6c58a63133012)](https://www.codacy.com/app/nkoik/simplelineicons?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=nkoik/simplelineicons&amp;utm_campaign=Badge_Grade)
This is a Vue wrapper component for simple line icons fonts.
https://github.com/thesabbir/simple-line-icons/


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

OR In component

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
	color="mediumseagreen">
</simple-line-icons>
```
### API

Required Prop

| Property | Description | Type
|:--|:--|:--|
| icon | Contains the name of the icon | <i>String</i> |

Optional Props

| Property | Description | Type
|:--|:--|:--|
| rotate | The degrees of rotation | <i>Number</i> |
| size | The size of the icon. Values <b>small</b> OR <b>large</b> | <i>String</i> |
| color | Any hex,rgb,hsla color | <i>String</i> |

