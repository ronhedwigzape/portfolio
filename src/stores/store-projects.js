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
                'Welcome to my enchanting portfolio, where software engineering meets the artistry of the magical realm. Within these pages, you\'ll discover a collection of extraordinary crafts that showcase my prowess as a magical software engineer.',
                'Just as software projects weave together lines of code to create digital marvels, my crafts intertwine strands of enchantment to bring forth physical wonders. Each creation is a testament to my expertise in weaving spells and coding incantations.',
                'From elegant spellbinding wands that harness the raw power of magic to intricately crafted amulets that safeguard against the forces of darkness, my portfolio represents a fusion of technology and the mystical arts. Each piece is imbued with its own story, steeped in ancient traditions and infused with modern enchantments.',
                'Like a software project that captivates and delights users, my crafts evoke awe and wonder. They are meticulously designed, thoughtfully crafted, and seamlessly merge form and function. Each artifact is a testament to my dedication as a magical software engineer, striving to create tangible wonders that leave a lasting impression.',
                'Step into this mystical realm, explore my portfolio, and witness the alchemy that occurs when software engineering and enchantment converge. Prepare to be enchanted by the harmonious symphony of technology and magic, and allow these magical artifacts to transport you to a world where dreams become reality.'
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
