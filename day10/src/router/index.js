import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path:"/",
	redirect:'/about',
	},//重定向
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/about1/:pro_id',
    name: 'about1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About1.vue')
  },  
  {
    path: '/find',
    name: 'find',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/find.vue'),
	children:[
		{"path":"/",redirect:'child1'},
		{"path":"child1",name:"child1",component: () => import(/* webpackChunkName: "mytuijian" */ '../views/find-child1.vue')},
		{"path":"child2",name:"child2",component: () => import(/* webpackChunkName: "mytuijian" */ '../views/find-child2.vue')},
		{"path":"child3",name:"child3",component: () => import(/* webpackChunkName: "mytuijian" */ '../views/find-child3.vue')},
	]
  },
  {
    path: '/msg',
    name: 'smg',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/msg.vue')
  },
  {
    path: '/me',
    name: 'me',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/me.vue')
  },
  
]

const router = new VueRouter({
	linkActiveClass:'active',
  routes
})

export default router
