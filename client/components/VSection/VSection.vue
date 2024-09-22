<script setup lang="ts">
const slots = defineSlots()
</script>

<template>
  <section class="v-section">
    <h2 v-if="slots?.title" class="v-section__title fs-7 h2 fw-bold mb-4">
      <slot name="title" />
    </h2>
    <div  v-if="slots?.default" class="v-section__main">
      <slot />
    </div>
  </section>
</template>
