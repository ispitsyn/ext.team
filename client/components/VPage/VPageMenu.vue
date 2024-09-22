<script setup lang="ts">
import {storeToRefs} from 'pinia';
import {useMainStore} from '~~/store';
import VIcon from "~/components/VIcon/VIcon.vue";
const {menu} = storeToRefs(useMainStore());
</script>

<template>
  <nav class="v-page-menu">
    <ul class="v-page-menu__list">
      <li v-for="item in menu" class="v-page-menu__item">
        <nuxt-link class="v-page-menu__link" :to="item.url" >
          <v-icon class="v-page-menu__icon" :name="item.icon" size="m"/>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="postcss" scoped>
.v-page-menu {
  display: flex;
  flex-direction: column;
  gap: 48px;

  &__list {
    display: flex;
    flex-direction: column;
    gap: 48px;

    padding: 0;
    margin: 0;
    list-style-type: none;
  }
  &__item {}
  &__link {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #cdcdcd;
  }
  &__icon {}
}
</style>