<template>
  <component :is="type" :class="['icon',  `icon_name_${name}`, `icon_size_${size}`]" v-html="svg" />
</template>

<script>
  const req = require.context("@/components/Icon/ui/", true, /^\.\/.*\.svg$/)
  /**
   *  Описание компонента
   */
  export default {
    name: "icon",
    status: "review",
    release: "1.0.0",
    props: {
    
      name: {
        required: true,
        default: "settings",
      },
      width: {
        type: String,
        default: "100%",
      },
      height: {
        type: String,
        default: "100%",
      },
     
      fill: {
        type: String,
        default: "currentColor",
      },
    
      stroke: {
        type: String,
        default: "none",
      },
      
      type: {
        type: String,
        default: "span",
      },
     
      size: {
        type: String,
        default: "full",
        validator: value => {
          return value.match(/(xs|s|m|l|xl|xxl|xxxl)/)
        },
      },
    },
    data() {
      return {
        svg: req("./" + this.name + ".svg").replace(/^<svg /,
          `<svg style="fill: ${this.fill}; stroke: ${this.stroke}; height:${this.height}; width:${this.width};"`),
      }
    }
  }
</script>
<style lang="scss" scoped>
  .icon {
    display: inline-block;
    vertical-align: middle;
    svg{
      display: block;
    }
    &_size {
      &_xs {
        width: 12px;
        height: 12px;
      }
      &_s {
        width: 18px;
        height: 18px;
      }
      &_m {
        width: 24px;
        height: 24px;
      }
      &_l {
        width: 30px;
        height: 30px;
      }
      &_xl {
        width: 36px;
        height: 36px;
      }
      &_xxl {
        width: 48px;
        height: 48px;
      }
      &_xxxl {
        width: 88px;
        height: 88px;
      }
    }
  }
  
</style>