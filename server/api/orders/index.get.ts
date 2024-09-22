import { Project } from '@@/types/project'
import type {OrderPreview} from "~~/types/order";

export default defineEventHandler(async (event) => {
    const data: OrderPreview[] = [
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

    return data
})