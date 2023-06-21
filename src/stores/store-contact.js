import { defineStore } from 'pinia';

export const useContactStore = defineStore('contact', {
    state: () => ({
        component: 'Owl',
        header: {
            title: 'Owl me',
            subtitle: 'lorem',
            action: 'Explore My Projects',
            parallax: {
                location: '/images/message.jpg'
            }
        },
        content: {
            title: 'About Me',

        },
        footer: {

        }
    }),

    getters: {

    },

    actions: {

    },
});
