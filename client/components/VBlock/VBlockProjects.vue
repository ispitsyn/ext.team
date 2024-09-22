<script setup lang="ts">
import {type Project } from '~~/types/project'
import VProject from "~/components/VProject/VProject.vue";

const props = defineProps<{
  items: Project[]
}>()
</script>

<template>
  <div class="v-block-projects">
    <v-project v-for="item in items" :data="item" class="v-block-projects__item" />
  </div>
</template>

<style lang="postcss" scoped>
.v-block-projects {
  &__item {}
}
</style>