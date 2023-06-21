import { defineStore } from 'pinia';

export const useProjectStore = defineStore('project', {
    state: () => ({
        component: 'Crafts',
        header: {
            title: 'Enchanting Crafts',
            subtitle: 'Explore the magical artifacts I\'ve crafted',
            parallax: {
                location: '/images/wands.jpg'
            }
        },
        content: {
            title: 'Crafts',

        },
        footer: {

        }
    }),

    getters: {

    },

    actions: {

    },
});
