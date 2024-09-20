<script setup>
import Typer from 'vue3-typer'
import "vue3-typer/dist/vue-typer.css"

const orders = [
  {
    icon: 'news',
    name: 'Разработка UX/UI дизайна блока услуг на глав.странице и страницы услуг',
    date: '5 мая, 8:32',
    badge: {
      color: '#8CC152',
      text: 'Готово'
    }
  },
  {
    icon: 'news',
    name: 'Разработать мультилендинг на WP',
    date: '31 мин.',
    badge: {
      color: '#F14CAE',
      text: 'В работе'
    }
  },
  {
    icon: 'news',
    name: 'Доработка сайта на опен карт 3, установка и настройка модулей',
    date: '31 мин.',
    badge: {
      color: '#21C5FF',
      text: 'Согласование'
    }

  },
  {
    icon: 'news',
    name: 'Создание приложения с функционалом как доставка "Самокат"',
    date: '31 мин.',
    badge: {
      color: '#F14CAE',
      text: 'В работе'
    }
  },
  {
    icon: 'news',
    name: 'Разработать сайт для продажи курса',
    date: '31 мин.',
    badge: {
      color: '#8CC152',
      text: 'Готово'
    }
  },
  {
    icon: 'news',
    name: 'Поднять в docker MySQL и PHP',
    date: '31 мин.',
    badge: {
      color: '#8CC152',
      text: 'Готово'
    }
  },
  {
    icon: 'news',
    name: 'Написать алгоритм, создающий картину в стиле стринг-арт',
    date: '31 мин.',
    badge: {
      color: '#8CC152',
      text: 'Готово'
    }
  }, {
    icon: 'news',
    name: 'Парсинг/скрепинг продавцов с Покупки от Яндекс.Маркета',
    date: '31 мин.',
    badge: {
      color: '#F14CAE',
      text: 'В работе'
    }
  },
  {
    icon: 'news',
    name: 'Нужно сделать адаптив на фигме',
    date: '31 мин.',
    badge: {
      color: '#21C5FF',
      text: 'Согласование'
    }

  },
  {
    icon: 'news',
    name: 'Провести первичную оптимизацию сайта',
    date: '31 мин.',
    badge: {
      color: '#F14CAE',
      text: 'В работе'
    }
  },
  {
    icon: 'news',
    name: 'Нужно настроить выгрузку данных из JSON по URL в Google Data Studio',
    date: '31 мин.',
    badge: {
      color: '#8CC152',
      text: 'Готово'
    }
  },
  {
    icon: 'news',
    name: 'Написать архитектуру фронтенда',
    date: '31 мин.',
    badge: {
      color: '#F14CAE',
      text: 'В работе'
    }
  },
  {
    icon: 'news',
    name: 'Установка и настройка модулей маркет плейса интернет магазина на ОПЕН КАРТ 3',
    date: '31 мин.',
    badge: {
      color: '#F14CAE',
      text: 'В работе'
    }
  },
  {
    icon: 'news',
    name: 'Адаптивная верстка сайта по готовому дизайнерскому макету',
    date: '31 мин.',
    badge: {
      color: '#F14CAE',
      text: 'В работе'
    }
  },
  {
    icon: 'news',
    name: 'Доработать фронт на React + Typescript',
    date: '31 мин.',
    badge: {
      color: '#F14CAE',
      text: 'В работе'
    }
  },
  {
    icon: 'news',
    name: 'Разработать интерфейс UI/UX для e-commerce',
    date: '31 мин.',
    badge: {
      color: '#21C5FF',
      text: 'Согласование'
    }

  },
  {
    icon: 'news',
    name: 'Отключить веб формы на сайте Битрикс',
    date: '31 мин.',
    badge: {
      color: '#8CC152',
      text: 'Готово'
    }
  },
  {
    icon: 'news',
    name: 'Развернуть бекенд соц сети на vds сервере ubuntu',
    date: '31 мин.',
    badge: {
      color: '#8CC152',
      text: 'Готово'
    }
  }, {
    icon: 'news',
    name: 'Доработка универсальной crud админки на quasar',
    date: '31 мин.',
    badge: {
      color: '#8CC152',
      text: 'Готово'
    }
  },
  {
    icon: 'news',
    name: 'Доработка на сайте 1С.Битрикс. Поиск по штрихкоду',
    date: '31 мин.',
    badge: {
      color: '#F14CAE',
      text: 'В работе'
    }
  },
  {
    icon: 'news',
    name: 'Создать простой оригинальный логотип',
    date: '31 мин.',
    badge: {
      color: '#8CC152',
      text: 'Готово'
    }
  },
  {
    icon: 'news',
    name: 'Vue мобильная верстка',
    date: '31 мин.',
    badge: {
      color: '#21C5FF',
      text: 'Согласование'
    }

  }
]
</script>

<template>
  <div class="wrap container-fluid">
    <div class="row ">
      <div class="col col-12  col-md-2 col-lg-1 d-none d-md-block">
        <BaseHeader />
        <hr class="d-block d-md-none mb-0">
      </div>
      <div class="col offset-xl-1 col-12   col-md-10 mb-5">
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
                    <div class="message__msg p-3 d-inline-block">Нужна помощь.</div>
                  </div>
                  <div class="message__item  mb-3">
                    <div class="message__msg p-3 d-inline-block">Давайте обсудим</div>
                  </div>

                  <div class="message__item  mb-3">
                    <div class="message__msg p-3 d-inline-block">Нужно <b>
                      <typer :text='["Нарисовать Баннер","Настроить сервер" , "Разработать продукт"]'
                             :pre-erase-delay='300' :type-delay='100' erase-style='clear' caret-animation='expand'>
                      </typer>
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
            <p class="text-secondary d-none d-md-block mb-0 fs-5 lh-base w-75">Сделаем продукт с нуля, доработаем
              текущий проект или усилим вашу ИТ-команду лучшими разработчиками на рынке.</p>
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
                      <div class="d-flex justify-content-between align-items-center">
                        <!-- <div class="orders__date text-muted">
                          {{item.date}}
                        </div> -->
                        <div class="orders__badge">
                          <div class="badge" v-if="item.badge" :style="{
                          background: item.badge.color
                        }">
                            {{item.badge.text}}
                          </div>
                        </div>
                      </div>


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

                      <div class="d-flex justify-content-between align-items-center">
                        <!-- <div class="orders__date text-muted">
                          {{item.date}}
                        </div> -->
                        <div class="orders__badge">
                          <div class="badge" v-if="item.badge" :style="{
                          background: item.badge.color
                        }">
                            {{item.badge.text}}
                          </div>
                        </div>
                      </div>
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

                      <div class="d-flex justify-content-between align-items-center">
                        <!-- <div class="orders__date text-muted">
                          {{item.date}}
                        </div> -->
                        <div class="orders__badge">
                          <div class="badge" v-if="item.badge" :style="{
                          background: item.badge.color
                        }">
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
        <h2 class="fs-7 h2 fw-bold mb-4"> Как мы работаем ?</h2>
        <div class="row work mb-5">
          <div class="col col-12 col-lg-8 mb-4">
            <div class="work__item px-4 py-4 px-md-5 py-md-5">
              <div class="work__item-name fw-bold mb-3">1. Уточняем детали</div>
              <p class="work__item-text mb-0">Проведем встречу где узнаем всю информацию по задаче, дадим рекомендации и
                сделаем предложение </p>
            </div>
          </div>
          <div class="col col-12 col-lg-4 mb-4 d-none d-lg-block">
            <div class="work__item  work__item_ext  px-5 py-5">
              <div class="work__item-name fw-bold mb-3">
                <span> <span class="text-white pe-2">EXT</span>.team</span></div>
              <p class="work__item-text mb-0">Интерьвью</p>
            </div>
          </div>
          <div class="col col-12 col-lg-8 mb-4">
            <div class="work__item  px-4 py-4 px-md-5 py-md-5">
              <div class="work__item-name fw-bold mb-3">2. Составляем план</div>
              <p class="work__item-text mb-0">Уточняем технические детали и разбивем задачу на этапы. Согласовываем план
                с заказчиком и отправляем на оценку разработчикам.

              </p>
            </div>
          </div>
          <div class="col col-12 col-lg-4 mb-4 d-none d-lg-block">
            <div class="work__item   work__item_ext  px-5 py-5">
              <div class="work__item-name fw-bold mb-3">
                <span> <span class="text-white pe-2">EXT</span>.team</span></div>
              <p class="work__item-text mb-0">Планирование</p>
            </div>
          </div>
          <div class="col col-12 col-lg-8 mb-4">
            <div class="work__item  px-4 py-4 px-md-5 py-md-5">
              <div class="work__item-name fw-bold mb-3">3. Подготовка</div>
              <p class="work__item-text mb-0">Подбираем команду,обределяем оценку сроков и бюджета. Начинаем работу над
                проектом..</p>
            </div>
          </div>
          <div class="col col-12 col-lg-4 mb-4 d-none d-lg-block">
            <div class="work__item   work__item_ext  px-5 py-5">
              <div class="work__item-name fw-bold mb-3">
                <span> <span class="text-white pe-2">EXT</span>.team</span></div>
              <p class="work__item-text mb-0">Подготовка</p>
            </div>
          </div>

          <div class="col col-12 col-lg-8 mb-4">
            <div class="work__item  px-4 py-4 px-md-5 py-md-5">
              <div class="work__item-name fw-bold mb-3">4. Идет работа </div>
              <p class="work__item-text mb-0">Каждый день проходят митинги с командой, тем самым мы контрилируем сроки и
                качество работ. Каждая фича и этап согласовывается с клиентом. Клиент может участвовать в процессе
                разработки (чаты, задачи и т.д.), а может доверить всю разработку нам.</p>
            </div>
          </div>
          <div class="col col-12 col-lg-4 mb-4 d-none d-lg-block">
            <div class="work__item   work__item_ext  px-5 py-5">
              <div class="work__item-name fw-bold mb-3">
                <span> <span class="text-white pe-2">EXT</span>.team</span></div>
              <p class="work__item-text mb-0">Разработка</p>
            </div>
          </div>
          <div class="col col-12 col-lg-8 mb-4">
            <div class="work__item  px-4 py-4 px-md-5 py-md-5">
              <div class="work__item-name fw-bold mb-3">5. Завершение задачи </div>
              <p class="work__item-text mb-0"> Сдаем задачу в срок </p>
            </div>
          </div>
          <div class="col col-12 col-lg-4 mb-4 d-none d-lg-block">
            <div class="work__item   work__item_ext  px-5 py-5">
              <div class="work__item-name fw-bold mb-3">
                <span> <span class="text-white pe-2">EXT</span>.team</span></div>
              <p class="work__item-text mb-0">Итог</p>
            </div>
          </div>

        </div>
        <h2 class="fs-7 h2 fw-bold mb-5"> Международная платформа для благотворительности Sirius</h2>
        <h3 class="mb-4"> О проекте</h3>

        <div class="row work">
          <div class="col col-12 col-md-8">
            <p>Сириус - проект наших партнеров в Италии, который развивается по модели b2b-маркетплейса для
              благотворительных организаций. Бизнес в рамках своей корпоративной социальной ответственности поддерживает
              разные благотворительные проекты и их инициаторов, при этом все платежи происходят внутри платформы.</p>
            <p>Весь проект мы делаем под ключ с нуля. Начали с проектирования идеи, сделали первые прототипы, после чего
              наши партнеры привлекли инвестиции под проект. На следующем этапе мы подготовили дизайн и начали делать
              разработку двумя параллельными командами, чтобы уложиться к срокам релиза. Сейчас в команде также работает
              выделенный менеджер продукта, который помогает нашим партнерам в развитии проекта.</p>
            <h3 class="mb-4 mt-5"> Команда</h3>
            <div class="theam-project row">
              <div class="col col-12 col-md-6 mb-4 ">
                <div class="theam-project__item d-flex align-items-center ">
                  <div class="theam-project__image">
                    <img
                        src="https://lh6.googleusercontent.com/uWrm7Rb1CSlzXjwomW_qLo4mAeg-JbmQGrrIfLafA7TUMpO8giANeXDatdca6IV4mDLj4KtL99qSGxDMNDpCjJafcb1vJDBrxmQgFWjSmXvyma4hKEIlj2Oqt-anveyjUPjIQt6C"
                        alt="">
                  </div>
                  <div class="theam-project__body ms-3">
                    <b class="">Александр</b>
                    <div class="text-secondary fw-normal">senior product designer</div>
                  </div>
                </div>
              </div>
              <div class="col col-12 col-md-6 mb-4">
                <div class="theam-project__item d-flex align-items-center ">
                  <div class="theam-project__image">
                    <img
                        src="https://lh6.googleusercontent.com/uWrm7Rb1CSlzXjwomW_qLo4mAeg-JbmQGrrIfLafA7TUMpO8giANeXDatdca6IV4mDLj4KtL99qSGxDMNDpCjJafcb1vJDBrxmQgFWjSmXvyma4hKEIlj2Oqt-anveyjUPjIQt6C"
                        alt="">
                  </div>
                  <div class="theam-project__body ms-3">
                    <b class="">Александр</b>
                    <div class="text-secondary fw-normal">senior product designer</div>
                  </div>
                </div>
              </div>
              <div class="col col-12 col-md-6 ">
                <div class="theam-project__item d-flex align-items-center ">
                  <div class="theam-project__image">
                    <img
                        src="https://lh6.googleusercontent.com/uWrm7Rb1CSlzXjwomW_qLo4mAeg-JbmQGrrIfLafA7TUMpO8giANeXDatdca6IV4mDLj4KtL99qSGxDMNDpCjJafcb1vJDBrxmQgFWjSmXvyma4hKEIlj2Oqt-anveyjUPjIQt6C"
                        alt="">
                  </div>
                  <div class="theam-project__body ms-3">
                    <b class="">Александр</b>
                    <div class="text-secondary fw-normal">senior product designer</div>
                  </div>
                </div>
              </div>
              <div class="col col-12 col-md-6">
                <div class="theam-project__item d-flex align-items-center ">
                  <div class="theam-project__image">
                    <img
                        src="https://lh6.googleusercontent.com/uWrm7Rb1CSlzXjwomW_qLo4mAeg-JbmQGrrIfLafA7TUMpO8giANeXDatdca6IV4mDLj4KtL99qSGxDMNDpCjJafcb1vJDBrxmQgFWjSmXvyma4hKEIlj2Oqt-anveyjUPjIQt6C"
                        alt="">
                  </div>
                  <div class="theam-project__body ms-3">
                    <b class="">Александр</b>
                    <div class="text-secondary fw-normal">senior product designer</div>
                  </div>
                </div>
              </div>


            </div>
          </div>
          <div class="col col-12 col-md-4">
            <div class="work__item work__item_height  px-4 py-5">
              <div class="row mb-3">
                <div class="col">
                  <div class="text-secondary work__snippet fw-bold">ГОД</div>
                  <p>2020</p>
                </div>
                <div class="col">
                  <div class="text-secondary work__snippet fw-bold">ЧАСЫ</div>
                  <p>1742</p>
                </div>
                <div class="col">
                  <div class="text-secondary work__snippet fw-bold">ДЛИТЕЛЬНОСТЬ</div>
                  <p>5 месяцев</p>
                </div>
              </div>

              <div class=" btn btn-outline-primary me-2 mb-2">Маркетплейсы</div>
              <div class=" btn btn-outline-primary me-2 mb-2">FinTech</div>
              <div class="text-secondary work__snippet fw-bold mt-3">ТЕХНОЛОГИИ</div>
              <span class=" text-primary">
                node.js
              </span>
              <span class="mx-2"> &#8226;</span>
              <span class="text-danger">react native </span>
              <div class="text-secondary work__snippet fw-bold mt-3">Сайт</div>
              <a href="https://bestgarden.ru/">Bestgarden</a>

            </div>
          </div>

        </div>

        <!-- <h2 class="fs-7 h2 fw-bold mb-4">Более >100 специалистов </h2> -->
        <!-- <div class="worker">
          <div class="worker__wrap">
            <div class="worker__item" v-for="item in 50" :key="item"></div>
          </div>
        </div> -->
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

<style lang="postcss">
.section-bg {
  background: #f0f6fa;
}

svg {
  display: block;
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

@keyframes scrollX {
  to {
    transform: translateX(-2590px)
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

.worker {
  height: 58px;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    right: -1px;
    bottom: 0;
    top: 0;
    width: 60px;
    z-index: 1;
    background: linear-gradient(180deg, rgba(240, 246, 250, 0), rgba(240, 246, 250, 0.5));
    transform: rotate(-90deg);
  }

  &::before {
    content: '';
    position: absolute;
    left: -1px;
    bottom: -0;
    top: 0;
    width: 60px;
    z-index: 1;
    background: linear-gradient(180deg, rgba(240, 246, 250, 0), rgba(240, 246, 250, 0.5));
    transform: rotate(90deg);
  }

  &__wrap {
    display: flex;
    flex-grow: 1;
    align-self: flex-start;
    position: absolute;
    animation: scrollX 180s linear .4s infinite;

  }

  &__item {
    border-radius: 50%;
    width: 58px;
    height: 58px;
    background: #0056f9;
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>