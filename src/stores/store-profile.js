import { defineStore } from 'pinia';
import axios from "axios";

export const useProfileStore = defineStore('profile', {
    state: () => ({
        component: 'Profile',
        username: 'ronhedwigzape',
        name: 'Ron Hedwig',
        initial: 'A.',
        surname: 'Zape',
        social: {
            facebook: 'https://www.facebook.com/ronhedwigzape',
            github: 'https://github.com/ronhedwigzape',
            twitter: 'https://twitter.com/ronhedwigzape',
            linkedin: 'https://www.linkedin.com/in/ron-hedwig-zape-b49062269/'
        },
        projects: []
    }),

    getters: {

    },

    actions: {
        async fetchRepositories() {
            const username = this.username;
            const response = await axios.get(`https://api.github.com/users/${username}/repos`);

            this.projects = response.data.map(repo => ({
                repo_name: repo.name,
                repo_stars: repo.stargazers_count,
                repo_forks: repo.forks_count,
                repo_language: repo.language,
                repo_license: repo.license?.name || '',
                repo_visibility: repo.visibility
            }));
        }
    },
});
