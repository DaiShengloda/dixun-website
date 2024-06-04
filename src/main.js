// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App'
import VueLazyload from 'vue-lazyload'

/* 路由 */
import router from './router'

/* axios */
import axios from './api'
import api from './api/api'
Vue.prototype.http = axios;
Vue.prototype.api = api;

/* swiper */
import 'swiper/dist/css/swiper.min.css'

/* 重置样式 */
import './assets/css/reset.min.css'

/* jquery */
import 'jquery'

/* animate.css */
import 'animate.css'

/* bootstarp */
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/index.scss'

// qiankun
import { registerMicroApps, start } from 'qiankun';
import MicroApps from './MicroAppConfig';

 
/* 头部组件 */
import Header from './components/Header'
Vue.component(Header.name,Header)


/* 尾部组件 */
import Footer from './components/Footer'
Vue.component(Footer.name,Footer)

/* 回到顶部 */
import GoTop from './components/GoTop'
Vue.component(GoTop.name,GoTop)

Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1
})

// 路由守卫
router.beforeEach((to, from, next) => {
    if(to.meta.title){
      document.title = to.meta.title
    }

    // 页面置顶
    document.body.scrollTop = 0  // chrome
    document.documentElement.scrollTop = 0  // firefox
    window.pageYOffset = 0  // safari
    next();
});

/**
 * Step1 初始化应用
 * 渲染到DOM ID为app的节点上
 */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

/**
 * step2 注册微应用
 */
registerMicroApps(MicroApps, {
  beforeLoad: [
    (app) => {
      console.log('******【主应用 beforeLoad】******', app);
      return Promise.resolve();
    }
  ],
  beforeMount: [
    (app) => {
      console.log('******【主应用 beforeMount】******', app);
      return Promise.resolve();
    }
  ],
  afterUnmount: [
    (app) => {
      console.log('******【主应用 afterUnmount】******', app);
      return Promise.resolve();
    }
  ]
});

/**
 * step3 设置默认进入微应用
 */
//  setDefaultMountApp('/#/imarket/')

/**
 * step4 启动
 * 需要在LayoutView组件的contructor中执行start();
 * 直接启动微应用挂载dom节点container不存在；
 */
start()