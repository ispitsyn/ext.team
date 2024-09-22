<script setup lang="ts">
import {storeToRefs} from 'pinia';
import {useMainStore} from '~~/store';
import VIcon from "~/components/VIcon/VIcon.vue";
const {contacts} = storeToRefs(useMainStore());
</script>

<template>
  <nuxt-link class="v-page-contact" :href="contacts.phoneUrl">
    <v-icon class="v-page-contact__icon" name="phone" size="m"/>
  </nuxt-link>
</template>

<style lang="postcss" scoped>
.v-page-contact {
  display: flex;
  justify-content: center;
  &__icon {
    color: #0d6efd;
  }
}
</style>