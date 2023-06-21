import { defineStore } from 'pinia';

export const useProfileStore = defineStore('profile', {
    state: () => ({
        name: 'Ron Hedwig',
        initial: 'A.',
        surname: 'Zape',
        social: {
            facebook: 'https://www.facebook.com/ronhedwigzape',
            github: 'https://github.com/ronhedwigzape',
            twitter: 'https://twitter.com/ronhedwigzape',
            linkedin: 'https://www.linkedin.com/in/ron-hedwig-zape-b49062269/'
        }
    }),

    getters: {

    },

    actions: {

    },
});
