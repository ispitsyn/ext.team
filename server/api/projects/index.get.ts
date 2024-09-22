import { Project } from '@@/types/project'

export default defineEventHandler(async (event) => {
    const data: Project[] = [
        {
            name: 'Международная платформа для благотворительности Sirius',
            description: `
                <p>Сириус - проект наших партнеров в Италии, который развивается по модели b2b-маркетплейса для
                благотворительных организаций. Бизнес в рамках своей корпоративной социальной ответственности поддерживает
                разные благотворительные проекты и их инициаторов, при этом все платежи происходят внутри платформы.</p>
                
                <p>Весь проект мы делаем под ключ с нуля. Начали с проектирования идеи, сделали первые прототипы, после чего
                наши партнеры привлекли инвестиции под проект. На следующем этапе мы подготовили дизайн и начали делать
                разработку двумя параллельными командами, чтобы уложиться к срокам релиза. Сейчас в команде также работает
                выделенный менеджер продукта, который помогает нашим партнерам в развитии проекта.</p>
            `,
            properties: [
                {
                    code: 'year',
                    name: 'год',
                    value: '2020',
                },
                {
                    code: 'hours',
                    name: 'часы',
                    value: '1742',
                },
                {
                    code: 'duration',
                    name: 'продолжительность',
                    value: '5 месяцев',
                }
            ],
            team: [
                {
                    name: 'Александр',
                    position: 'senior product designer',
                    photo: '/images/team/member-1.png'
                },
                {
                    name: 'Александр',
                    position: 'senior product designer',
                    photo: '/images/team/member-1.png'
                },
                {
                    name: 'Александр',
                    position: 'senior product designer',
                    photo: '/images/team/member-1.png'
                },
                {
                    name: 'Александр',
                    position: 'senior product designer',
                    photo: '/images/team/member-1.png'
                }
            ],
            stack: [
                {
                    name: 'node.js',
                },
                {
                    name: 'react native'
                }
            ],
            tags: [
                {
                    name: 'Маркетплейсы'
                },
                {
                    name: 'FinTech'
                }
            ],
            results: [
                {
                    type: 'site',
                    name: 'Сайт',
                    link: {
                        name: 'Bestgarden',
                        url: 'https://bestgarden.ru'
                    }
                }
            ]
        }
    ]

    return data
})