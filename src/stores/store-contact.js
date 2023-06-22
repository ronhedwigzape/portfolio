import { defineStore } from 'pinia';

export const useContactStore = defineStore('contact', {
    state: () => ({
        component: 'Owl',
        slug: 'contact',
        header: {
            title: 'Contact Me',
            subtitle: 'Send me an owl or use the magical form below',
            parallax: {
                location: './images/message.jpg'
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
