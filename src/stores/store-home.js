import { defineStore } from 'pinia';

export const useHomeStore = defineStore('home', {
    state: () => ({
        component: 'Home',
        slug: '',
        header: {
            title: 'Welcome to Ron Hedwig\'s Magical World of Software Engineering',
            subtitle: 'Turning code into spells, one line at a time',
            action: 'Explore My Crafts',
            parallax: {
                location: './images/journey.jpg'
            }
        },
        content: {
            title: 'About Me',
            description: [
                'Hi, I\'m Ron Hedwig, a passionate magical software engineer with a love for the world of Harry Potter. Currently pursuing a Bachelor of Science in Computer Science and Magic at ACLC College of Iriga, I believe that software engineering and magic share a common thread: the ability to create extraordinary things out of thin air.',
                'My expertise lies in back-end development and cloud computing, and I\'m constantly expanding my skills to develop powerful spells through code. I\'m proficient in technologies like Vue.js and PHP, which I leverage to build enchanting web applications.',
                'Beyond the realm of coding, I spend my time immersed in practicing spells, brewing potions, and delving into the magical world of Harry Potter. The fusion of magic and technology fascinates me, and I\'m always seeking opportunities to collaborate on projects and explore the intersection of software engineering and the magical arts.'
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
