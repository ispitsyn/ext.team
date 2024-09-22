<script setup lang="ts">

</script>

<template>
  <div class="v-page-topbar">
    <h2 class="v-page-topbar__slogan">Ваша внешняя команда</h2>
    <div class="v-page-topbar__button">
      <nuxt-link class="v-page-topbar-button">
        <span class="v-page-topbar-button__text">Обсудить задачу</span>
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.v-page-topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__slogan {
    margin: 0;
    font-size: 24px;
    font-weight: 500;
  }
  &__button {}
}
.v-page-topbar-button {
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
  padding: 16px 48px;
  border-radius: 16px;

  &:after {
    background: #6a9cfc;
    border-radius: 16px;
    bottom: -10px;
    content: "";
    height: 100%;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    width: 90%;
    z-index: -1;
  }

  &__text {
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
}
</style>