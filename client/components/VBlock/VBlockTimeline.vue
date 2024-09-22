<script setup lang="ts">
import {type Timeline} from "~~/types/timeline";

const props = defineProps<{
  items: Timeline[]
}>()
</script>

<template>
  <div class="v-block-timeline row work mb-5">
    <template v-for="(item, index) in items">
      <div class="col col-12 col-lg-8 mb-4">
        <div class="work__item px-4 py-4 px-md-5 py-md-5">
          <div class="work__item-name fw-bold mb-3">{{ `${index+1}. ${item.title}` }}</div>
          <p class="work__item-text mb-0" v-html="item.description"></p>
        </div>
      </div>
      <div class="col col-12 col-lg-4 mb-4 d-none d-lg-block">
        <div class="work__item  work__item_ext  px-5 py-5">
          <div class="work__item-name fw-bold mb-3">
            <span><span class="text-white pe-2">EXT</span>.team</span>
          </div>
          <p class="work__item-text mb-0">{{ item.step }}</p>
        </div>
      </div>
    </template>
  </div>
</template>