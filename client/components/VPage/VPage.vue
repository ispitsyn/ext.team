<script setup lang="ts">
import VPageNavbar from "~/components/VPage/VPageNavbar.vue";
import VPageTopbar from "~/components/VPage/VPageTopbar.vue";
</script>

<template>
  <div class="v-page">
    <v-page-navbar class="v-page__navbar" />
    <div class="v-page__main">
      <v-page-topbar class="v-page__topbar" />
      <slot />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.v-page {
  display: grid;
  grid-template-columns: repeat(12,1fr);
  max-width: 1440px;
  margin: 0 auto;

  &__navbar {
    grid-column: 1/2;
  }
  &__main {
    grid-column: 3/-1;
  }

  &__topbar {}
}
</style>