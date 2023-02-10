// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { md2 } from 'vuetify/blueprints'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
    blueprint: md2,
    display: {
        mobileBreakpoint: 'sm',
        thresholds: {
            xs: 0,
            sm: 340,
            md: 540,
            lg: 800,
            xl: 1280,
        },
    },
    theme: {
        defaultTheme: 'dark'
    }
});
