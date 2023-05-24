import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faSearch, faDesktop } from '@fortawesome/free-solid-svg-icons'
import { faAppleWhole, faWrench, faMugSaucer, faCubes, faLaptop, faFileLines } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'



library.add(faSearch, faFileLines, faMugSaucer, faCubes, faLaptop,
    faWrench, faAppleWhole, faDesktop, faFacebook, faInstagram, faTwitter)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
