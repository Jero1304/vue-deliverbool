import { createRouter, createWebHistory } from 'vue-router'

import HomeUser from './partial/pages/HomeUser.vue'
import MenuUser from './partial/pages/MenuUser.vue'
import SinglePlate from './partial/pages/SinglePlate.vue'
import PaymentPage from './partial/pages/PaymentPage.vue'
import HomeRestaurant from './partial/pages/HomeRestaurant.vue'


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
		{
			path: '/PaymentPage',
			name: 'PaymentPage',
			component: PaymentPage,
		},
		{
			path: '/HomeRestaurant',
			name: 'HomeRestaurant',
			component: HomeRestaurant,
		},

	],
})

export { router }