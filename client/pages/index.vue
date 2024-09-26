<script setup lang="ts">
import type {Project} from "~~/types/project";
import type {Timeline} from "~~/types/timeline";
import type {OrderPreview} from "~~/types/order";
import VSection from "~/components/VSection/VSection.vue";
import VBlockChat from "~/components/VBlock/VBlockChat.vue";
import VBlockOrders from "~/components/VBlock/VBlockOrders.vue";
import VBlockTimeline from "~/components/VBlock/VBlockTimeline.vue";
import VBlockProjects from "~/components/VBlock/VBlockProjects.vue";
import VPageContent from "~/components/VPage/VPageContent.vue";

const { data: projects } = await useFetch<Project[]>('/api/projects');
const { data: timeline } = await useFetch<Timeline[]>('/api/timeline');
const { data: orders } = await useFetch<OrderPreview[]>('/api/orders');
</script>

<template>
  <v-page-content>
    <v-section>
      <v-block-chat />
    </v-section>

    <v-section>
      <template #title>IT аутсорс для малого и среднего бизнеса</template>
      <template #description>Сделаем продукт с нуля, доработаем текущий проект или усилим вашу ИТ-команду лучшими разработчиками на рынке.</template>
    </v-section>

    <v-section v-if="orders">
      <v-block-orders :items="orders" />
    </v-section>

    <v-section v-if="timeline">
      <template #title>Как мы работаем ?</template>
      <v-block-timeline :items="timeline" />
    </v-section>

    <v-section v-if="false && projects">
      <v-block-projects :items="projects" />
    </v-section>
  </v-page-content>
</template>

<style lang="postcss">
</style>