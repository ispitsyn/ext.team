<template>
  <div class="wrap container-fluid">
    <div class="row ">
      <div class="col col-12  col-md-2 col-lg-1 d-none d-md-block">
        <BaseHeader />
        <hr class="d-block d-md-none mb-0">
      </div>
      <div class="col offset-xl-1 col-12   col-md-10">
        <div class="main d-flex  flex-column py-0 py-md-4 justify-content-between">
          <div class="main__header">
            <div class="pr-4 d-block d-md-flex justify-content-between align-items-center">
              <h3 class="logo mx-0 my-0 fs-4 fw-medium d-none d-md-block text-nowrap">Ваша внешняя команда</h3>
              <div class="row justify-content-end d-none d-md-flex">
                <div class="col col-12 col-md-auto d-grid d-md-block">
                  <a href="#" class="btn btn-header btn-primary btn-lg btn-main fs-6 fw-bold px-5 py-3">Обсудить
                    задачу</a>
                </div>
              </div>

            </div>
          </div>
          <div class="main__main my-3 my-md-5">
            <h1 class="fs-7 d-block d-md-none h2 mb-5">IT аутсорс для малого и среднего бизнеса</h1>
            <div class="row">
              <div class="col col-12 col-md-12 col-lg-6">
                <div class="message">
                  <div class="message__item  mb-3 ">
                    <div class="message__msg p-3 d-inline-block">Есть задача!</div>
                  </div>
                  <div class="message__item  mb-3">
                    <div class="message__msg p-3 d-inline-block">Решим!</div>
                  </div>

                  <div class="message__item  mb-3">
                    <div class="message__msg p-3 d-inline-block">Нужно сделать <b>
                        <vue-typer :text='["Нарисовать Баннер","Настроить сервер" , "Разработать Сайт"]'
                          :pre-erase-delay='300' :type-delay='100' erase-style='clear' caret-animation='expand'>
                        </vue-typer>
                      </b></div>
                  </div>
                  <div class="message__item  mb-3">
                    <div class="message__msg p-3 d-inline-block">Собираем команду <img class="ms-1"
                        src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/thumbs-up_1f44d.png"
                        alt="" width="22dpx"></div>
                  </div>
                </div>
                <div class="d-grid d-md-none">
                  <a href="#"
                    class="btn btn-header btn-primary btn-lg btn-main fs-6 fw-bold px-5 py-3">Обсудитьзадачу</a>
                </div>

              </div>

            </div>
            <h1 class="fs-7 d-none d-md-block">IT аутсорс для малого и среднего бизнеса</h1>
            <p class="text-secondary d-none d-md-block mb-0 fs-5 lh-lg w-75">Не важно нужно создать баннер,
              корпоративный сайт или
              маркеплейс.
              Обширный штат сотрудников и гибкие метадологие управления.</p>
          </div>
          <span></span>
        </div>
        <h2 class="fs-7 h2 fw-bold mb-0 d-lg-none mb-4"> Работаем без остановок</h2>
        <div class="section section-bg orders mb-5">
          <div class="orders__shadow orders__shadow_top"></div>
          <div class="orders__shadow orders__shadow_bottom"></div>
          <div class="container ">
            <div class="row h-100">
              <div class="col col-4 d-none d-lg-block">
                <div class="d-flex align-items-center h-100">
                <h2 class="fs-7 h2 fw-bold mb-0 "> Работаем<br />без остановок</h2>
                </div>
              </div>
              <div class="col col-lg-8">
                <div class="orders__wrap">
                  <div class="orders__col">
                    <div class="orders__item" v-for="item in orders" :key="item.id">
                      <div class="orders__icon">
                        <Icon :name="item.icon" size="m" fill="#fff" />
                      </div>
                      <div class="orders__name">
                        {{item.name}}
                      </div>
                      <div class="orders__date text-muted">Сделали<br>
                        {{item.date}}
                        назад</div>
                    </div>
                  </div>
                  <div class="orders__col">
                    <div class="orders__item" v-for="item in orders" :key="item.id">
                      <div class="orders__icon ">
                        <Icon :name="item.icon" size="m" fill="#fff" />
                      </div>
                      <div class="orders__name">
                        {{item.name}}
                      </div>
                      <div class="orders__date text-muted">Сделали<br>
                        {{item.date}}
                        назад</div>
                    </div>
                  </div>
                  <div class="orders__col d-none d-lg-block">
                    <div class="orders__item" v-for="item in orders" :key="item.id">
                      <div class="orders__icon ">
                        <Icon :name="item.icon" size="m" fill="#fff" />
                      </div>
                      <div class="orders__name">
                        {{item.name}}
                      </div>
                      <div class="orders__date text-muted">Сделали<br>
                        {{item.date}}
                        назад</div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <span class="main__footer ">
          <h1 class=" mb-5 d-block">Последние решения </h1>
          <swiper :slides-per-view="4" :space-between="15">
            <swiper-slide>
              <div class="card border-0 px-3 py-3 ">
                <div class="mb-2 card__name">Адаптировать модуль OpenStreetMap (OSM) под мобильную версию</div>
                <div class="d-flex justify-content-between mb-3">
                  <span class="fw-normal card__text">Требуется доделать верстку для мобильной версии поиска по карте на
                    портале.</span>
                </div>
                <span class="text-end d-flex ">
                  <span class=" text-secondary text-end fw-normal me-2">7200 &#8381;</span>
                  / 8 часов </span>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="card border-0 px-3 py-3 ">
                <div class="mb-2 fw-bold card__name">Адаптировать модуль OpenStreetMap (OSM) под мобильную версию</div>
                <div class="d-flex justify-content-between mb-3">
                  <span class="fw-normal card__text">Требуется доделать верстку для мобильной версии поиска по карте на
                    портале.</span>
                </div>
                <span class="text-end d-flex ">
                  <span class=" text-secondary text-end fw-normal me-2">7200 &#8381;</span>
                  / 8 часов </span>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="card border-0 px-3 py-3 ">
                <div class="mb-2 fw-bold card__name">Адаптировать модуль OpenStreetMap (OSM) под мобильную версию</div>
                <div class="d-flex justify-content-between mb-3">
                  <span class="fw-normal card__text">Требуется доделать верстку для мобильной версии поиска по карте на
                    портале.</span>
                </div>
                <span class="text-end d-flex ">
                  <span class=" text-secondary text-end fw-normal me-2">7200 &#8381;</span>
                  / 8 часов </span>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="card border-0 px-3 py-3 ">
                <div class="mb-2 fw-bold card__name">Адаптировать модуль OpenStreetMap (OSM) под мобильную версию</div>
                <div class="d-flex justify-content-between mb-3">
                  <span class="fw-normal card__text">Требуется доделать верстку для мобильной версии поиска по карте на
                    портале.</span>
                </div>
                <span class="text-end d-flex ">
                  <span class=" text-secondary text-end fw-normal me-2">7200 &#8381;</span>
                  / 8 часов </span>
              </div>
            </swiper-slide>

          </swiper>
        </span> -->
      </div>

    </div>
  </div>
</template>

<script>
  import BaseHeader from './components/BaseHeader.vue'
  import Icon from '@/components/Icon/Icon'

  import {
    VueTyper
  } from 'vue-typer'
  // import {
  //   Swiper,
  //   SwiperSlide
  // } from 'swiper/vue';
  // import 'swiper/swiper.scss';
  export default {
    name: 'app',
    data() {
      return {
        orders: [{
            icon: 'news',
            name: 'Бесплатная консультация юриста',
            date: '31 мин.'
          },
          {
            icon: 'news',
            name: 'Бесплатная консультация юриста',
            date: '31 мин.'
          },
          {
            icon: 'news',
            name: 'Бесплатная консультация юриста',
            date: '31 мин.'
          },
          {
            icon: 'news',
            name: 'Бесплатная консультация юриста',
            date: '31 мин.'
          },
          {
            icon: 'news',
            name: 'Бесплатная консультация юриста',
            date: '31 мин.'
          },
          {
            icon: 'news',
            name: 'Бесплатная консультация юриста',
            date: '31 мин.'
          },
          {
            icon: 'news',
            name: 'Бесплатная консультация юриста',
            date: '31 мин.'
          }, {
            icon: 'news',
            name: 'Бесплатная консультация юриста',
            date: '31 мин.'
          },
          {
            icon: 'news',
            name: 'Бесплатная консультация юриста',
            date: '31 мин.'
          },
          {
            icon: 'news',
            name: 'Бесплатная консультация юриста',
            date: '31 мин.'
          },
          {
            icon: 'news',
            name: 'Бесплатная консультация юриста',
            date: '31 мин.'
          },
          {
            icon: 'news',
            name: 'Бесплатная консультация юриста',
            date: '31 мин.'
          },
          {
            icon: 'news',
            name: 'Бесплатная консультация юриста',
            date: '31 мин.'
          },
          {
            icon: 'news',
            name: 'Бесплатная консультация юриста',
            date: '31 мин.'
          },
          {
            icon: 'news',
            name: 'Бесплатная консультация юриста',
            date: '31 мин.'
          },
          {
            icon: 'news',
            name: 'Бесплатная консультация юриста',
            date: '31 мин.'
          },
          {
            icon: 'news',
            name: 'Бесплатная консультация юриста',
            date: '31 мин.'
          },
          {
            icon: 'news',
            name: 'Бесплатная консультация юриста',
            date: '31 мин.'
          }, {
            icon: 'news',
            name: 'Бесплатная консультация юриста',
            date: '31 мин.'
          },
          {
            icon: 'news',
            name: 'Бесплатная консультация юриста',
            date: '31 мин.'
          },
          {
            icon: 'news',
            name: 'Бесплатная консультация юриста',
            date: '31 мин.'
          },
          {
            icon: 'news',
            name: 'Бесплатная консультация юриста',
            date: '31 мин.'
          }
        ]
      }
    },
    components: {
      BaseHeader,
      Icon,
      VueTyper
      // Swiper,
      // SwiperSlide
    }
  };
</script>

<style lang="scss">
  @import "@/assets/styles/global.scss";

  .section-bg {
    background: #f0f6fa;
  }

  svg {
    display: block;
  }

  .orders {
    height: 480px;
    overflow: hidden;
    position: relative;
    display: flex;
    border-radius: 35px;

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
      &_bottom{
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

  .wrap {
    box-sizing: border-box;
    max-width: 1440px;
    margin: 0 auto;
  }

  .btn-header {
    position: relative;

    &::after {
      background: #6a9cfc;
      content: "";
      width: 90%;
      height: 100%;
      bottom: 0;
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      z-index: -1;
      bottom: -10px;
      border-radius: 16px
    }
  }

  .message {
    margin-bottom: 84px;

    @media (max-width: 767.98px) {
      margin-bottom: 50px;
    }

    &__item {
      .message__msg {
        background: #f1f2f6;
        border-radius: 20px 20px 20px 0;
      }

      &:nth-child(2n + 2) {
        text-align: right;

        .message__msg {
          background: #e5eefe;
          border-radius: 20px 20px 0px 20px;
        }
      }
    }
  }

  .btn-main {
    text-transform: uppercase;
    border-radius: 16px;
    letter-spacing: 0.5px;
  }

  .card {
    background: #f1f2f6;

    &__text {
      -webkit-line-clamp: 3;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    &__name {
      -webkit-line-clamp: 2;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  .main {
    min-height: 100vh;

  }

  @keyframes scroll {
    to {
      transform: translateY(-2590px)
    }
  }
</style>