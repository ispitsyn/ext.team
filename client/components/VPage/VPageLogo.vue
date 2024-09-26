<template>
  <div class="v-page-logo">
    <span class="v-page-logo__text">ext</span>
    <span class="v-page-logo__text">team</span>
  </div>
</template>

<style lang="postcss" scoped>
.v-page-logo {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  line-height: 1;
  &__text {
    color: #3e3e3e;
    font-size: 1em;
    font-weight: 500;
    text-transform: uppercase;
    &:last-child {
      width: 100%;
      padding: 0.2em 0;
      border-radius: 0.2em;
      background: var(--color--1);
      text-align: center;
      color: #fff;
      font-size: 0.5em;
      font-weight: 400;
      letter-spacing: 0.05em;
    }

  }
}
</style>