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
        // GitHub Personal Token
        github_personal_token: import.meta.env.VITE_GITHUB_PERSONAL_TOKEN,
        repositories: []
    }),

    getters: {

    },

    actions: {
        async fetchRepositories() {
            const username = this.username;
            const token = this.github_personal_token;

            const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
                headers: {
                    'Authorization': `${token}`
                }
            });

            // See rate limit
            // const rateLimitResponse = await axios.get("https://api.github.com/rate_limit", {
            //     headers: {
            //         "Authorization": `${token}`
            //     }
            // });
            //
            // console.log(rateLimitResponse.data);

            // Add the repository names to display
            const repoNames = ['seat-n-savor', 'sportsfest-litmusda', 'notes', 'vue-voice-gpt'];

            // Filter the repositories array base on repoNames
            const filteredRepos = response.data.filter(repo => repoNames.includes(repo.name));

            this.repositories = filteredRepos.map(repo => ({
                id: repo.id,
                name: repo.name,
                full_name: repo.full_name,
                description: repo.description,
                stars: repo.stargazers_count,
                forks: repo.forks_count,
                language: repo.language,
                license: repo.license?.name || '',
                visibility: repo.visibility,
                url: repo.html_url,
                watchers: repo.watchers_count
            }));
        }
    },
});
