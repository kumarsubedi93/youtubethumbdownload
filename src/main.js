import './assets/main.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#E91E63',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
}

const vuetify = createVuetify({
    theme:{
      defaultTheme:'myCustomLightTheme',
      themes:{
        myCustomLightTheme
      }
    },
    components
  })

const app = createApp(App)

app.use(vuetify)
app.use(router)
app.mount('#app')
