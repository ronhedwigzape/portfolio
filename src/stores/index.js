import { defineStore } from 'pinia'

export const useStore = defineStore('store', {

    state:() => {
        return {
            component: 'App',
            app: {
                backendDir: 'app',
                title: 'CodeWizard',
                brand: 'ronhedwigzape',
            }
        }
    },

    getters: {
        // get app name
        appName(state) {
            return import.meta.env.BASE_URL.replaceAll('/', '');
        },

        // get app url
        appURL(state) {
            const location = window.location;
            if (location.hostname === 'localhost' && location.port === '1000')
                return `http://localhost${import.meta.env.BASE_URL}${state.app.backendDir}`;
            else
                return `${location.protocol}//${location.hostname}${import.meta.env.BASE_URL}${state.app.backendDir}`;
        },

    }

});