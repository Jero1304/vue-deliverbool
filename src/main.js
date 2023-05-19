import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faSearch, faRobot, faDesktop, faRightLong, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faAppleWhole, faWrench, faMugSaucer, faCubes, faLaptop, faFileLines } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

library.add(faSearch, faFileLines, faMugSaucer, faCubes, faLaptop,
    faWrench, faAppleWhole, faDesktop, faRobot, faRightLong, faAngleRight,)

createApp(App).mount('#app')
