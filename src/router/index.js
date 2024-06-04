import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    }, {
      path: '/',
      name: 'PageView',
      // component: resolve => require(['@/view/PageView'], resolve),
      component: () => import('@/view/PageView'),
      children: [
        {
          path: '/',
          redirect: '/home'
        }, 
        {
          path: '/home',
          name: 'home',
          // component: resolve => require(['@/view/homePage'], resolve),
          component: () => import('@/view/homePage'),
          meta: {
            title: '湖北迪迅环保科技有限公司'
          }
        }, 
        {
          path: '/companyintroduction',
          name: 'companyintroduction',
          // component: resolve => require(['@/view/companyIntroduction'], resolve),
          component: () => import('@/view/companyIntroduction'),
          meta: {
            title: '公司介绍'
          }
        }, 
        {
          path: '/product',
          name: 'product',
          // component: resolve => require(['@/view/product/index'], resolve),
          component: () => import('@/view/product/index'),
          meta: {
            title: '核心技术'
          },
          children: [
            {
              path: '/product',
              redirect: '/product/electorPrecipitator'
            },
            {
              path: '/product/electorPrecipitator',
              name: 'product',
              // component: resolve => require(['@/view/product/electorPrecipitator'], resolve),
              component: () => import('@/view/product/electorPrecipitator'),
              meta: {
                title: '核心技术丨同步精密电除尘'
              }
            },
            {
              path: '/product/sewageDisposal',
              name: 'product',
              // component: resolve => require(['@/view/product/sewageDisposal'], resolve),
              component: () => import('@/view/product/sewageDisposal'),
              meta: {
                title: '核心技术丨蓄热式高温折流污水外理'
              }
            }
          ]
        }, 
        {
          path: '/projectCase',
          name: 'projectCase',
          // component: resolve => require(['@/view/projectCase'], resolve),
          component: () => import('@/view/projectCase'),
          meta: {
            title: '应用案例'
          }
        }, 
        {
          path: '/contactus',
          name: 'contactus',
          // component: resolve => require(['@/view/contactUs'], resolve),
          component: () => import('@/view/contactUs'),
          meta: {
            title: '联系我们'
          }
        },
        // {
        //   path: '/newsinformation',
        //   name: 'newsinformation',
        //   component: resolve => require(['@/view/NewsInformation'], resolve),
        //   meta: {
        //     title: '新闻动态'
        //   }
        // }, 

      ]
    }
  ]
})
