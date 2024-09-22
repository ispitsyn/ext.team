<script setup>

</script>

<template>
  <nuxt-layout>
    <nuxt-page/>
  </nuxt-layout>
</template>

<style lang="postcss">
* {
  box-sizing: border-box;
}

body {
  font: normal 16px/25px 'Montserrat' , Arial, "sans-serif";
  color: #151515;
  font-weight: 500;
}
hr:not([size]){
  height: 2px;
  background-color: #cdcdcd;
}
svg {
  display: block;
}

@keyframes scroll {
  to {
    transform: translateY(-2590px)
  }
}

@keyframes scrollX {
  to {
    transform: translateX(-2590px)
  }
}
</style>