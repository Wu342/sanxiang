import Vue from 'vue'
import VueRouter from 'vue-router'
import loginRegister from '../views/loginRegister.vue'
import home from '../views/home.vue'
import personcenter from '../views/personcenter.vue'
import goods from '../views/goods.vue'
import homee from '../views/homee.vue'
import loginn from '../views/loginn.vue'



Vue.use(VueRouter)

const routes = [
  {
	  path:'/',
	  name:'homee',
	  component: homee
  },
  {
	  path:'/login',
	  component: loginRegister
  },
  {
	  path:'/personcenter',
	  component: personcenter
  },
  {
	  path:'/goods',
	  component: goods
  },
  {
	  path:'/home',
	  component: home
  },
  {
	  path:'/loginn',
	  component: loginn
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
