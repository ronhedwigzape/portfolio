// src/stores/uiStore.js
import { defineStore } from 'pinia';
import {useTheme} from "vuetify";

export const useUiStore = defineStore('ui',{
    state: () => ({
        sidebar: false,
        darkMode: true,
        theme: useTheme(),
        topBarHeight: 55
    }),
    getters: {
      getTheme() {
          return this.theme.global.name
      }
    },
    actions: {
        toggleSidebar() {
            this.sidebar = !this.sidebar;
        },
        toggleDarkMode() {
            this.darkMode = !this.darkMode;
            this.theme.global.name = this.darkMode ? "dark" : "light";
            localStorage.setItem("darkTheme", this.darkMode.toString());
        },
        init() {
            const storedTheme = localStorage.getItem('darkTheme');
            if (storedTheme) {
                this.darkMode = storedTheme === 'true';
            }
            this.theme.global.name = this.darkMode ? 'dark' : 'light';
        },
    },
});
