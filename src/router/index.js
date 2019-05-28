import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/pages/index'
import Register from '@/pages/register'
import Login from '@/pages/login'
import ManagerLogin from '@/pages/managerLogin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
// 			children:[
// 				{
// 				    path: '/login',
// 				    meta: { title: '设备列表', icon: 'icon iconfont allTabsIcon icon-deng' },
// 				    component: Login
// 				},
// 			]
    },
		{
		  path: '/register',
		  name: 'register',
		  component: Register
		},
		{
			path:"/hello",
			name:"hello",
			component:HelloWorld
		},
		{
			path:"/login",
			name:"login",
			component:Login
		},
		{
			path:"/manager/login",
			name:"managerLogin",
			component:ManagerLogin
		}
  ]
})
