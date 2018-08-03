import 'simple-line-icons/css/simple-line-icons.css'
import './style.css'
import svgIcon from './svgSLIcons.js'

const camelCased = (string) => string.replace(/-([a-z])/g, (g) => g[1].toUpperCase())

export default {
  name: 'SimpleLineIcons',
  props: {
    icon: {
      type: String,
      required: true
    },
    size: {
      type: String,
      validator: function (value) {
        return value === 'small' || value === 'large'
      }
    },
    rotate: {
      type: Number,
      validator: function (value) {
        return value >= 0 && value <= 360
      }
    },
    color: String,
    noSvg: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return {
        [`sli-${this.noSvg ? 'font icon-' : 'svg '}${this.icon}`]: true,
        [this.size]: !!this.size
      }
    }
  },
  render (h) {
    return this.noSvg
      ? h('i', {
        class: this.classes,
        style: {
          transform: `rotate(${this.rotate}deg)`,
          color: this.color
        }
      })
      : h('svg', {
        class: this.classes,
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg',
          'xmlns:xlink': 'http://www.w3.org/1999/xlink',
          viewBox: '0 0 32 32',
          fill: this.color
        },
        style: { transform: `rotate(${this.rotate}deg)` }
      }, [
        h('path', {
          attrs: {
            d: svgIcon[camelCased(this.icon)]
          }
        })
      ])
  }
}
