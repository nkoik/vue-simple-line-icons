<template>
  <i :class="classes" :style="styles"></i>
</template>

<script>
import 'simple-line-icons/css/simple-line-icons.css'

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
    bold: Boolean
  },
  computed: {
    classes () {
      return {
        [`icon icon-${this.icon}`]: true,
        [this.size]: !!this.size,
        bold: this.bold
      }
    },
    styles () {
      return {
        transform: `rotate(${this.rotate}deg)`,
        color: this.color
      }
    }
  }
}
</script>
<style scoped>
i {
  font-size: 16px;
  display: inline-block;
}
.small {
  font-size: 12px;
}
.large {
  font-size: 22px;
  font-weight: 600;
}
.bold {
  font-weight: 600;
}
</style>
