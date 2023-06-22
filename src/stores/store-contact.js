import { defineStore } from 'pinia';

export const useContactStore = defineStore('contact', {
    state: () => ({
        component: 'Owl',
        slug: 'contact',
        header: {
            title: 'Contact Me',
            subtitle: 'Reach out and let\'s weave magic together',
            parallax: {
                location: './images/message.jpg'
            }
        },
        content: {
            title: 'Unleash the Magic of Connection',
            card_title: 'Send me an owl',
            description: [
                'Welcome to my contact page, a gateway for magical connections. Whether you\'re a fellow wizard, a muggle with a curious mind, or anyone in between, I invite you to reach out and join me on this enchanting journey.',
                'Send me an owl carrying your thoughts, questions, or ideas, or simply use the magical form below to share your message. Let\'s collaborate, discuss the secrets of the arcane arts, or explore the endless possibilities of software engineering intertwined with magic.',
                'I\'m excited to hear from you and discover how our combined powers can create something extraordinary. Together, we can unlock new realms of innovation and make the impossible possible.',
                'Take a leap of faith, embrace the unknown, and let\'s weave magic together.'
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
