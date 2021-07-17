import Vue from 'vue'
import Router from 'vue-router'
// import request from '../utils/request'
// import _this from './../main.js'

import Index from '@/views/Index.vue'
import activityInquiry from '@/components/ActivityManage/activityInquiry'
import activityApproval from '@/components/ActivityManage/activityApproval'
// const Index = () => import('../views/Index.vue')
const Signin = () => import('../views/Signin.vue')
// const activityApproval = () => import('../components/ActivityManage/activityApproval')

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      redirect: '/signin'
    },
    {
      path: '/signin',
      component: Signin
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      redirect: '/activityinquiry',
      children: [
        {
          path: '/activityinquiry',
          name: 'activityInquiry',
          component: activityInquiry
        },
        {
          path: '/activityapproval',
          name: 'activityApproval',
          component: activityApproval
        }
      ]
    }
  ]
});

// // 全局路由守卫
// router.beforeEach((to, from, next) => {
//   if (to.path === '/signin') {
//     // next();
//     // request.localStorageSet('token',null)
//     let token = request.localStorageGet('token');
//     console.log(token)
//     if (!token) {
//       next();
//     } else {
//       next('index');
//       request.message(_this, '您已登陆', 'warning')
//     }
//   } else {
//     let token = request.localStorageGet('token');
//     console.log(token)
//     if (!token) {
//       // next('/signin');
//       next({
//         path: '/signin',
//         query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
//       })
//       request.message(_this, '请先登陆' ,'warning')
//     } else {
//       next()
//     }
//   }
// })

export default router
