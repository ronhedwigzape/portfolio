import { defineStore } from 'pinia';

export const useHomeStore = defineStore('home', {
    state: () => ({
        header: {
            title: 'Ron Hedwig\'s Magical World of Software Engineering',
            subtitle: 'Turning code into spells, one line at a time',
            action: 'Explore My Projects',
            parallax: {
                location: '/images/flying-envelopes.jpg'
            }
        },
        content: {
            title: '',
            description: [
                ''
            ]
        },
        footer: {

        }
    }),

    getters: {

    },

    actions: {

    },
});
