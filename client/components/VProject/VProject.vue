<script setup lang="ts">
import {type Project } from '~~/types/project'

const props = defineProps<{
  data: Project
}>()
</script>

<template>
  <div class="v-project">
    <h2 class="v-project__name fs-7 h2 fw-bold mb-5">{{ data.name }}</h2>
    <h3 class="v-project__title mb-4">О проекте</h3>
    <div class="row work">
      <div class="col col-12 col-md-8">
        <div class="v-project__description" v-html="data.description"></div>
        <h3 class="mb-4 mt-5">Команда</h3>
        <div class="theam-project row">
          <div v-for="member in data.team" class="v-project__tem-member col col-12 col-md-6 mb-4 ">
            <div class="theam-project__item d-flex align-items-center ">
              <div class="theam-project__image">
                <img :src="member.photo" :alt="member.name">
              </div>
              <div class="theam-project__body ms-3">
                <b class="">{{ member.name }}</b>
                <div class="text-secondary fw-normal">{{ member.position }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col col-12 col-md-4">
        <div class="work__item work__item_height  px-4 py-5">
          <div class="row mb-3">
            <div v-for="property in data.properties" class="col">
              <div class="text-secondary work__snippet fw-bold">{{ property.name }}</div>
              <p>{{ property.value }}</p>
            </div>
          </div>

          <template v-for="tag in data?.tags">
            <div class=" btn btn-outline-primary me-2 mb-2">{{ tag.name }}</div>
          </template>

          <div class="text-secondary work__snippet fw-bold mt-3">ТЕХНОЛОГИИ</div>

          <template v-for="(stackItem, stackIndex) in data?.stack">
            <span v-if="stackIndex" class="mx-2">&#8226;</span>
            <span class=" text-primary">{{ stackItem.name }}</span>
          </template>

          <template v-for="result in data.results">
            <div class="text-secondary work__snippet fw-bold mt-3">{{ result.name }}</div>
            <nuxt-link v-if="result?.link" :to="result.link.url">{{ result.link.name }}</nuxt-link>
          </template>
        </div>
      </div>

    </div>
  </div>
</template>

<style lang="postcss" scoped>
.v-project {

}
.theam-project {
  &__image {
    width: 60px;
    height: 60px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.work {
  &__snippet {
    font-size: 10px;
  }

  &__item {
    background: #f0f6fa;
    border-radius: 35px;
    height: 100%;

    &_height {
      height: auto;
    }

    &_ext {
      .work__item-name {
        position: relative;

        span {
          position: relative;
          z-index: 1;
        }

        &::after {
          content: "";
          position: absolute;
          top: -8px;
          left: -4px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: rgb(0 86 249 / 51%);
        }
      }
    }
  }
}
</style>