<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
    default: 'settings',
  },
  width: {
    type: String,
    default: '100%',
  },
  height: {
    type: String,
    default: '100%',
  },
  fill: {
    type: String,
    default: 'currentColor',
  },
  stroke: {
    type: String,
    default: 'none',
  },
  type: {
    type: String,
    default: 'span',
  },
  size: {
    type: String,
    default: 'full',
    validator: value => {
      return value.match(/(xs|s|m|l|xl|xxl|xxxl)/);
    },
  },
});
const svg = ref(null);

onMounted(async () => {
  const svgIcon = await import(`@/components/Icon/ui/${props.name}.svg?raw`);
  svg.value = svgIcon.default.replace(
      /^<svg /,
      `<svg style="fill: ${props.fill}; stroke: ${props.stroke}; height:${props.height}; width:${props.width};"`
  );
});
</script>

<template>
  <component :is="type" :class="['icon',  `icon_name_${name}`, `icon_size_${size}`]" v-html="svg" />
</template>

<style lang="postcss" scoped>
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