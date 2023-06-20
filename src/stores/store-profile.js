import { defineStore } from 'pinia';

export const useProfileStore = defineStore('profile', {
    state: () => ({
        first_name: 'Ron',
        second_name: 'Hedwig',
        initial: 'A.',
        surname: 'Zape'
    }),

    getters: {

    },

    actions: {

    },
});
