<script setup lang="ts">
import type {OrderPreview} from "~~/types/order";
import VIcon from "~/components/VIcon/VIcon.vue";

const props = defineProps<{
  items: OrderPreview[]
}>()

const columnCount = 3;
const columns = props.items.reduce<OrderPreview[][]>(
    (acc, item, index) => {
      const columnIndex = index % columnCount
      acc[columnIndex]!.push(item)
      return acc
    },
    Array.from({ length: columnCount }, () => [] as OrderPreview[])
)

const getColumnNameByIndex = (index: number) => `column-${index}`
</script>

<template>
  <div class="v-block-orders" ref="block-orders">
    <div class="v-block-orders__info">
      <h2 class="v-block-orders__title">Работаем без остановок</h2>
    </div>
    <div class="v-block-orders__columns">
      <div v-for="(column, columnIndex) in columns"
           :key="getColumnNameByIndex(columnIndex)"
           class="v-block-orders__column">
        <div v-for="item in column" :key="item.name" class="v-block-orders__item">
          <div class="v-block-orders__item-icon">
            <v-icon  :name="item.icon" size="m" fill="#fff" />
          </div>
          <div class="v-block-orders__item-name">{{ item.name }}</div>
          <div class="v-block-orders__item-status" :style="{background: item.status.color}">{{ item.status.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.v-block-orders {
  position: relative;
  background: #f0f6fa;
  display: grid;
  grid-template-columns: repeat(12,1fr);
  align-items: center;
  height: 480px;
  border-radius: 35px;
  overflow: hidden;
  padding: 0 24px;

  &:before,
  &:after {
    content: '';
    background: linear-gradient(180deg, #f0f6fa00, #f0f6fa80);
    height: 60px;
    left: 0;
    position: absolute;
    right: 0;
    z-index: 1;
  }

  &:before {
    top: 0;
    transform: rotate(180deg);
  }
  &:after {
    bottom: 0;
  }

  &__info {
    grid-column: 1/5;
  }

  &__columns {
    grid-column: 6/-1;
    height: 100%;
    overflow: hidden;

    display: grid;
    align-items: stretch;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    gap: 20px;
  }

  &__column {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;
    animation: scroll 60s linear .4s infinite;
    &:nth-of-type(2) {
      top: -148px;
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
    padding: 20px;
    min-height: 236px;
    background-color: #ffffff;
    border-radius: 25px;

    &-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: var(--color--1);
      overflow: hidden;
    }
    &-name {
      font-size: 14px;
      line-height: 20px;
    }
    &-status {
      margin-top: auto;
      margin-bottom: 0;
      padding: 4px 10px;
      border-radius: 100px;
      color: #fff;
      font-size: 10px;
      font-weight: 500;
      line-height: 12px;

    }
  }
}

@keyframes scroll {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(calc(-100% + 480px));
  }
}
</style>