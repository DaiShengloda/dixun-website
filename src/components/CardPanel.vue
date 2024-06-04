<template>
  <div 
    :class="`col-xs-12 col-sm-12 col-md-6 card-panel ${className}`"
    :style="{...myStyle, ...panelStyle}"
  >
    <slot name="container"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      widthMap: {
        1: "100%",
        2: "50%",
        3: "33%",
        4: "24%",
      }
    }
  },
  props: {
    className: String,
    rowPanelNum: {
      type: Number,
      default: 2
    },
    panelStyle: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    myStyle() {
      return {
        "--width": this.widthMap[this.rowPanelNum]
      }
    }
  },
}
</script>

<style scoped lang="scss">
.card-panel {
  font-size: 16px;
  line-height: 2.5rem;
  .text-indent {
    text-indent:2em;
  }
  img {
    display: block;
    width: 100%;
    height: auto;
  }
}
@media screen and (min-width: 997px) {
  .card-panel {
    width: var(--width);
  }
}
@media screen and (max-width: 997px){
  .card-panel {
    margin-bottom: 20px;
  }
}
</style>