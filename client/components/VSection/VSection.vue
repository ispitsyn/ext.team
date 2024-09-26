<script setup lang="ts">
const slots = defineSlots()

const isShowHeader = computed(() => slots?.title || slots?.description)
</script>

<template>
  <section class="v-section">
    <div v-if="isShowHeader" class="v-section__header">
      <h2 v-if="slots?.title" class="v-section__title fs-7 h2 fw-bold mb-4">
        <slot name="title" />
      </h2>
      <div v-if="slots?.description" class="v-section__description">
        <slot name="description" />
      </div>
    </div>

    <div  v-if="slots?.default" class="v-section__main">
      <slot />
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.v-section {
  &__header {}
  &__title {}
  &__description {}

  & + & {
    margin-top: 120px;
  }
}
</style>