import { defineStore } from 'pinia';

export const useProjectStore = defineStore('project', {
    state: () => ({
        component: 'Crafts',
        slug: 'projects',
        header: {
            title: 'Enchanting Crafts',
            subtitle: 'Step into my world of magical creations',
            parallax: {
                location: './images/wands.jpg'
            }
        },
        content: {
            title: 'Crafts',
            description: [
                'Welcome to my enchanting portfolio, where software engineering and magic intertwine. Explore a collection of extraordinary crafts that showcase my prowess as a magical software engineer.',
                'From spellbinding wands to mystical amulets, each artifact tells a unique story, blending ancient traditions with modern enchantments. Discover the harmonious fusion of technology and magic, as lines of code bring these creations to life.',
                'Join me on GitHub to explore the secrets behind these magical works. Delve into the code, contribute your own magic, and witness the alchemy that occurs when software engineering and enchantment converge.',
                'Step into this mystical realm and let these magical artifacts transport you to a world where dreams become reality.'
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
