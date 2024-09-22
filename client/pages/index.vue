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
      <div class="main__main my-3 my-md-5">
        <h1 class="fs-7 d-block d-md-none h2 mb-5">IT аутсорс для малого и среднего бизнеса</h1>

        <v-block-chat />

        <h1 class="fs-7 d-none d-md-block">IT аутсорс для малого и среднего бизнеса</h1>
        <p class="text-secondary d-none d-md-block mb-0 fs-5 lh-base w-75">Сделаем продукт с нуля, доработаем
          текущий проект или усилим вашу ИТ-команду лучшими разработчиками на рынке.</p>
      </div>
    </v-section>

    <v-section v-if="orders">
      <template #title>Работаем без остановок</template>
      <v-block-orders :items="orders" />
    </v-section>

    <v-section v-if="timeline">
      <template #title>Как мы работаем ?</template>
      <v-block-timeline :items="timeline" />
    </v-section>

    <v-section v-if="projects">
      <v-block-projects :items="projects" />
    </v-section>
  </v-page-content>
</template>

<style lang="postcss">
</style>