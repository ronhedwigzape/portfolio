import { defineStore } from 'pinia';
import axios from "axios";

export const useProfileStore = defineStore('profile', {
    state: () => ({
        component: 'Profile',
        username: 'ronhedwigzape',
        org: 'aclc-iriga',
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
        repositories: [],
        message: 'Fetching Crafts...'
    }),

    getters: {
        getMessage(state) {
            return state.message;
        }
    },

    actions: {
        async fetchOrgRepositories() {
            const org = this.org;
            const token = this.github_personal_token;

            const response = await axios.get(`https://api.github.com/orgs/${org}/repos?per_page=100`, {
                headers: {
                    'Authorization': `${token}`
                }
            });
            return response.data;
        },
        async fetchRepositories() {
            const username = this.username;
            const token = this.github_personal_token;
            let response;

            try {
                response = await axios.get(`https://api.github.com/users/${username}/repos?per_page=100`, {
                    headers: {
                        'Authorization': `${token}`
                    }
                });
                this.message = 'Crafts fetched successfully!'
                setTimeout(() => {
                    this.message = null;
                }, 1000);
            } catch (error) {
                this.message = 'Error fetching crafts!'
            }

            // See rate limit
            // const rateLimitResponse = await axios.get("https://api.github.com/rate_limit", {
            //     headers: {
            //         "Authorization": `${token}`
            //     }
            // });
            //
            // console.log(rateLimitResponse.data);

            const orgRepos = await this.fetchOrgRepositories();
            const allRepos = [...response.data, ...orgRepos];

            // Filter the repositories array base on repoNames
            const filteredRepos = allRepos.filter(
                repo =>
                    // Can add repositories here and modify its properties
                    (repo.name === 'sportsfest-litmusda' && repo.forks_count > 0) ||
                    (repo.name === 'vue-voice-gpt') ||
                    (repo.name === 'qotu.sn-iriga') ||
                    (repo.name === 'msduran-nabua') ||
                    (repo.name === 'mk') ||
                    (repo.name === 'laravel-task-list') ||
                    (repo.name === 'laravel-book-review') ||
                    (repo.name === 'laravel-event-management')
            );

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
