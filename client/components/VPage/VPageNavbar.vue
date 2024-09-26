<script setup lang="ts">
import VPageLogo from "~/components/VPage/VPageLogo.vue";
import VPageMenu from "~/components/VPage/VPageMenu.vue";
import VPageContact from "~/components/VPage/VPageContact.vue";
</script>

<template>
  <div class="v-page-navbar">
    <div class="v-page-navbar__logo">
      <v-page-logo/>
    </div>
    <v-page-menu class="v-page-navbar__menu"/>
    <div class="v-page-navbar__contact">
      <v-page-contact/>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.v-page-navbar {
  display: grid;
  grid-template-columns: min-content;
  grid-template-rows: min-content auto min-content;
  align-items: center;
  justify-content: center;
  gap: 24px;

  padding-block: 24px;

  &__logo {
    position: relative;
    display: flex;
    align-items: center;
    height: 73px;
    padding-bottom: 16px;

    &:after {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;

      content: "";
      display: block;
      background-color: #cdcdcd;
      width: 26px;
      height: 2px;
      margin: 0 auto;

      opacity: .25;
    }
  }

  &__menu {
  }

  &__contact {
    position: relative;
    padding-top: 24px;

    &:before {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;

      content: "";
      display: block;
      background-color: #cdcdcd;
      width: 26px;
      height: 2px;
      margin: 0 auto;

      opacity: .25;
    }
  }
}
</style>
