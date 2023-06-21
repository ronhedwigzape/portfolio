import { defineStore } from 'pinia';

export const useHomeStore = defineStore('home', {
    state: () => ({
        header: {
            title: 'Welcome to Ron Hedwig\'s Magical World of Software Engineering',
            subtitle: 'Turning code into spells, one line at a time',
            action: 'Explore My Projects',
            parallax: {
                location: '/images/journey.jpg'
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
