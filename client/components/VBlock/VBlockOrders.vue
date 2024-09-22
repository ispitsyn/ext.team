<script setup lang="ts">
import type {OrderPreview} from "~~/types/order";

const props = defineProps<{
  items: OrderPreview[]
}>()
</script>

<template>
  <div class="section section-bg orders mb-5">
    <div class="orders__shadow orders__shadow_top"></div>
    <div class="orders__shadow orders__shadow_bottom"></div>

    <div class="container ">
      <div class="row h-100">
        <div class="col col-4 d-none d-lg-block">
          <div class="d-flex align-items-center h-100">
            <h2 class="fs-7 h2 fw-bold mb-0">Работаем<br />без остановок</h2>
          </div>
        </div>

        <div class="col col-lg-8">
          <div class="orders__wrap">
            <div class="orders__col">
              <div class="orders__item" v-for="item in items" :key="item.id">
                <div class="orders__icon">
                  <v-icon :name="item.icon" size="m" fill="#fff" />
                </div>

                <div class="orders__name">{{item.name}}</div>
                <div class="d-flex justify-content-between align-items-center">
                  <!-- <div class="orders__date text-muted">
                    {{item.date}}
                  </div> -->
                  <div class="orders__badge">
                    <div class="badge" v-if="item.badge" :style="{background: item.badge.color}">
                      {{item.badge.text}}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="orders__col">
              <div class="orders__item" v-for="item in items" :key="item.id">
                <div class="orders__icon ">
                  <v-icon :name="item.icon" size="m" fill="#fff" />
                </div>
                <div class="orders__name">{{item.name}}</div>

                <div class="d-flex justify-content-between align-items-center">
                  <!-- <div class="orders__date text-muted">
                    {{item.date}}
                  </div> -->
                  <div class="orders__badge">
                    <div class="badge" v-if="item.badge" :style="{background: item.badge.color}">
                      {{item.badge.text}}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="orders__col d-none d-lg-block">
              <div class="orders__item" v-for="item in items" :key="item.id">
                <div class="orders__icon ">
                  <v-icon :name="item.icon" size="m" fill="#fff" />
                </div>

                <div class="orders__name">{{item.name}}</div>

                <div class="d-flex justify-content-between align-items-center">
                  <!-- <div class="orders__date text-muted">
                    {{item.date}}
                  </div> -->
                  <div class="orders__badge">
                    <div class="badge" v-if="item.badge" :style="{background: item.badge.color}">
                      {{item.badge.text}}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.section-bg {
  background: #f0f6fa;
}

.orders {
  height: 480px;
  overflow: hidden;
  position: relative;
  display: flex;
  border-radius: 35px;

  &__badge {}

  &__date {
    font-size: 14px;
    line-height: 20px;
  }

  &__name {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    flex-grow: 1;
    margin-top: 16px;
    margin-bottom: 8px;
    font-size: 14px;
    line-height: 20px;
  }

  &__wrap {
    position: relative;
    display: flex;
    flex-grow: 1;
    align-self: flex-start;

  }

  &__icon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    min-height: 50px;
    border-radius: 100%;
    background: #0056f9;
  }

  &__item {
    margin-bottom: 20px;
    border-radius: 25px;
    background: #fff;
    display: flex;
    flex-direction: column;
    padding: 20px;
    height: 235px;
    position: relative;

    @media (max-width: 991.98px) {
      margin-bottom: 12px;
    }
  }

  &__shadow {
    position: absolute;
    right: 0;
    left: 0;
    height: 60px;
    z-index: 1;
    background: linear-gradient(180deg, rgba(240, 246, 250, 0), rgba(240, 246, 250, .5));

    &_top {
      top: 0;
      transform: rotate(180deg);

    }

    &_bottom {
      bottom: 0;
    }
  }


  &__col {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    transform: translateY(0);
    width: calc((100%/3) - 20px);

    animation: scroll 180s linear .4s infinite;

    @media (max-width: 991.98px) {
      width: calc((100%/2) - 6px);
    }

    &:first-child {
      left: 0;
    }

    &:nth-of-type(2) {
      left: calc(100%/3);
      margin-top: -120px;

      @media (max-width: 991.98px) {
        left: calc((100%/2) + 6px);
      }
    }

    &:last-child {
      left: calc((100%/3) *2);
    }
  }
}

.badge {
  padding-right: 10px;
  padding-left: 10px;
  border-radius: 100px;
  background-color: #ff5674;
  color: #fff;
  font-size: 10px;
  line-height: 12px;
  font-weight: 500;
}
</style>