import { createRouter, createWebHistory } from 'vue-router'

import HomeUser from './partial/pages/HomeUser.vue'
import MenuUser from './partial/pages/MenuUser.vue'
import SinglePlate from './partial/pages/SinglePlate.vue'



const history = createWebHistory()
console.log('history: ', history)

const router = createRouter({
	history,
	routes: [
		{
			path: '/home',
			name: 'home',
			component: HomeUser,
		},
        {
			path: '/menu',
			name: 'menu',
			component: MenuUser,
		},
		{
			path: '/singlePlate',
			name: 'singlePlate',
			component: SinglePlate,
		},
		
	],
})

export { router }