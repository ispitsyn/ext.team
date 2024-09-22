import {defineStore} from 'pinia';

export const useMainStore = defineStore('main', {
    state: () => ({
        contacts: {
            phone: '8 (952) 765-80-40', phoneUrl: 'tel:+79527658040',
        },
        menu: [
            {
                url: '#',
                icon: 'home_1_1'
            },
            {
                url: '#',
                icon: 'electro_2'
            },
            {
                url: '#',
                icon: 'accept_cr'
            },
            {
                url: '#',
                icon: 'star_1'
            },
            {
                url: '#',
                icon: 'tea_1'
            }
        ]
    })
});