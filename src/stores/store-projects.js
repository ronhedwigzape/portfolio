import { defineStore } from 'pinia';

export const useProjectStore = defineStore('project', {
    state: () => ({
        component: 'Crafts',
        header: {
            title: 'Enchanting Crafts',
            subtitle: 'Explore the magical artifacts I\'ve crafted',
            parallax: {
                location: './images/wands.jpg'
            }
        },
        content: {
            title: 'Crafts',
            description: [
                'Immerse yourself in a world of enchantment with my collection of magical crafts. Each artifact is meticulously crafted with a blend of traditional craftsmanship and modern wizardry. From bewitching wands that channel extraordinary powers to spellbinding talismans that bring luck and protection, my crafts are imbued with the essence of magic.',
                'Whether you\'re a fellow wizard seeking a new tool for your magical pursuits or a muggle intrigued by the wonders of the wizarding world, my crafts offer a touch of enchantment to your life. Each piece tells a unique story and is a testament to the artistry and mystique of the magical arts.',
                'Explore my collection and discover the perfect magical artifact to enhance your journey in the realm of spells and sorcery. Harness the power of these crafts and let the magic unfold in your hands.'
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
