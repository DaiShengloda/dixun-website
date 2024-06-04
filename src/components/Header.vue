<template>
  <!-- 头部整体盒子 -->
  <div id="header" class="container-fuild">

    <!-- 头部顶部 -->
    <!-- <div class="header-top container-fuild hidden-xs">
      <div class="container">
        <div class="server pull-left">
          <span class="glyphicon glyphicon-earphone"></span>888-888-888
          <span class="glyphicon glyphicon-envelope"></span>liyunkun_11@163.com
          <span class="glyphicon glyphicon-time"></span>7x24小时为您服务
        </div>
        <div class="shejiao pull-right">
          <span class="glyphicon glyphicon-hand-right"></span>赶快联系我们吧！
          <span class="glyphicon glyphicon-hand-left"></span>
        </div>
      </div>
    </div> -->

    <!-- 电脑导航 -->
    <div class="header-nav container hidden-xs">
      <!-- 导航logo -->
      <div class="header-nav-logo">
        <img src="http://www.dixun.cc/assets/img/dx-icon.png" loading="lazy">
        <span class="logo-name">湖北迪迅环保科技有限公司</span>
      </div>
      <!-- 导航内容 -->
      <ul class="header-nav-wrapper">
        <li
          v-for="(item,index) in navList"
          :key="index"
          :class="navIndex.includes(item.id)?'active':''"
          @click="navClick(item)"
        >
          <router-link :to="item.path">
            {{item.name}}
            <span v-if="item.children.length>0" class="glyphicon glyphicon-menu-down"></span>
            <i class="underline"></i>
          </router-link>
          <dl v-if="item.children&&item.children.length>0">
            <dt v-for="(i,n) in item.children" :key="n">
              <router-link :to="i.path" class="">{{i.name}}</router-link>
            </dt>
          </dl>
        </li>
      </ul>
    </div>
    <div class="header-nav-blank hidden-xs"></div>

    <!-- 手机导航 -->
    <div class="header-nav-m container-fuild visible-xs">
      <div class="header-nav-m-logo">
        <img class="center-block" src="http://www.dixun.cc//assets/img/dx-icon.png" alt="logo" loading="lazy">
      </div>
      <!-- 导航栏 -->
      <div 
        class="header-nav-m-menu text-center"
        data-toggle="collapse"
        data-target="#menu"
        @click="menuClick"
      >
        {{menuName}}
        <div
          class="header-nav-m-menu-wrapper"
          
        >
          <span :class="menuClass"></span>
        </div>
        <!-- 导航内容 -->
        <ul id="menu" class="header-nav-m-wrapper collapse">
          <li
            v-for="(item,index) in navList"
            :key="index"
            :class="navIndex.includes(item.id)?'active':''"
            @click="navClick(item)"
            data-toggle="collapse"
            data-target="#menu"
          >
            <router-link :to="item.path">
              {{item.name}}
              <i class="underline"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="header-nav-blank-m visible-xs"></div>

  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      navIndex: sessionStorage.getItem('navIndex') ? sessionStorage.getItem('navIndex') : "",
      menuName: "首页",
      menuClass: "glyphicon glyphicon-menu-down",
      navList: [
        {
          name: "首页",
          path: "/home",
          id: "home",
          children: []
        },
        {
          name: "公司介绍",
          path: "/companyintroduction",
          id: "companyintroduction",
          children: []
        },
        {
          name: "核心技术",
          path: "/product",
          id: "product",
          children: [
            {
              name: "同步精密电除尘",
              path: "/product",
            },
            {
              name: "蓄热式高温折流污水外理",
              path: "/product/sewageDisposal",
            }
          ]
        }, 
        {
          name: "应用案例",
          path: "/projectCase",
          id: "projectCase",
          children: []
        },
        {
          name: "联系我们",
          path: "/contactus",
          id: "contactus",
          children: []
        },
        // {
        //   name: "软件产品",
        //   path: "/software",
        //   children: []
        // },
        // {
        //   name: "相关服务",
        //   path: "/service",
        //   children: []
        // },
        // {
        //   name: "新闻动态",
        //   path: "/newsinformation",
        //   children: []
        // },
        // {
        //   name: "工作机会",
        //   path: "/jobchance",
        //   children: []
        // }
      ]
    };
  },
  // beforeRouteEnter(to, from, next) {
  //   debugger
  //   next(vm => {
      
  //     // 通过 `vm` 访问组件实例
  //   })
  // },
  // beforeRouteUpdate (to, from) {
  //   debugger
  //   // just use `this`
  //   this.name = to.params.name
  // },
  watch: {
    $route(to, from) {
      const { path: toPath } = to
      const { path: fromPath } = from
      if(fromPath === "/")return
      this.navIndex = toPath
    }
  },
  methods: {
    navClick({path, name}) {
      this.navIndex = path;
      sessionStorage.setItem('navIndex',path)
      this.menuName = name;
    },
    menuClick() {
      if (this.menuClass == "glyphicon glyphicon-menu-down") {
        this.menuClass = "glyphicon glyphicon-menu-up";
      } else {
        this.menuClass = "glyphicon glyphicon-menu-down";
      }
    }
  }
};
</script>
<style scoped lang="scss">
@import url("../assets/fonts/font.scss");
/* 顶部 */
#header {
  background: #f4f4f4;
  transition: all ease 0.6s;
  position: relative;
  .header-nav-blank {height: 70px;}
  .header-nav-blank-m {height: 100px}
}
// #header .header-top {
//   height: 50px;
//   color: #fff;
//   font-size: 12px;
//   line-height: 50px;
//   background: $primaryColor;
// }
// /* 顶部的图标 */
// #header .header-top span {
//   margin: 0 8px;
// }
/* 导航栏 */
#header .header-nav {
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  z-index: 9999;
  background: #fff;
}
/* 导航栏logo */
#header .header-nav .header-nav-logo {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  float: left;
  position: relative;
  /* 导航栏logo图片 */
  img {
    width: auto;
    height: 70px;
    margin-right: 8px;
  }
  .logo-name {
    color: $primaryColor;
    font-size: 32px;
    font-weight: bold;
    // font-family: "仓耳青禾体";
  }
}
/* 导航栏 导航容器 */
// #header .header-nav-fixed .header-nav-wrapper {
//   line-height: 50px;
// }
#header .header-nav .header-nav-wrapper {
  line-height: 70px;
  float: right;
  margin: 0;
  max-width: 800px;
}
/* 导航栏 每个导航 */
#header .header-nav .header-nav-wrapper > li {
  float: left;
  margin: 0 15px;
  position: relative;
}
/* 导航栏 每个导航下面的 a 链接 */
#header .header-nav .header-nav-wrapper > li > a {
  color: #000;
  font-size: 15px;
  font-weight: bold;
  padding: 15px 0;
  position: relative;
}
/* 导航栏 每个导航下面的 a 链接的下划线 */
#header .header-nav .header-nav-wrapper > li > a > i {
  display: block;
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  opacity: 0;
  transition: all 0.6s ease;
  background-color: $primaryColor;
}
/* 导航栏 每个导航下面的 a 链接的右侧小三角 */
#header .header-nav .header-nav-wrapper > li > a > span {
  font-size: 12px;
  transition: transform ease 0.5s;
}
/* 导航栏 每个导航下面的 a 链接 鼠标滑上去的样式 */
#header .header-nav .header-nav-wrapper > li > a:hover {
  color: $primaryColor;
  text-decoration: none;
}
/* 导航栏 每个导航下面的 a 链接 鼠标滑上去下划线的样式 */
#header .header-nav .header-nav-wrapper > li > a:hover .underline {
  opacity: 1;
  width: 100%;
  left: 0;
}
/* 导航栏 每个导航下面的 a 链接 鼠标滑上去三角标的样式 */
#header .header-nav .header-nav-wrapper > li > a:hover span {
  transform: rotate(180deg);
}
/* 导航栏 每个导航下面的 a 链接 鼠标点击后的样式 */
#header .header-nav .header-nav-wrapper > li.active > a {
  color: $primaryColor;
  text-decoration: none;
  border-bottom: 2px solid $primaryColor;
}
/* 导航栏 每个导航下面的二级导航容器 */
#header .header-nav .header-nav-wrapper > li > dl {
  display: none;
  position: absolute;
  width: 168px;
  top: 80%;
  left: 0;
  z-index: 999999;
  box-shadow: 0 0 3px 1px #ccc;
  background: #fff;
}
/* 导航栏 每个导航下面的二级导航容器的每个导航 */
#header .header-nav .header-nav-wrapper > li > dl > dt {
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
/* 导航栏 每个导航下面的二级导航容器的每个导航 当鼠标滑上时的样式*/
#header .header-nav .header-nav-wrapper > li > dl > dt > a:hover {
  text-decoration: none;
}
/* 导航栏 滑上一级导航显示二级导航 */
#header .header-nav .header-nav-wrapper > li:hover dl {
  display: block;
}
#header .header-nav .header-nav-wrapper > li > dl > dt:hover {
  cursor: pointer;
  background: #ccc;
}
@media screen and (max-width: 997px) {
  #header .header-nav-m {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100px;
    z-index: 9999;
    background: #fff;
  }
  /* 导航栏logo容器 */
  #header .header-nav-m .header-nav-m-logo {
    height: 50px;
    position: relative;
    background: $gray;
  }
  /* 导航栏logo图片 */
  #header .header-nav-m .header-nav-m-logo img {
    width: auto;
    height: 45px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
  /* 导航栏  菜单容器 */
  #header .header-nav-m .header-nav-m-menu {
    color: #fff;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    background: $primaryColor;
    position: relative;
  }
  /* 导航栏 菜单图标 */
  #header .header-nav-m .header-nav-m-menu-wrapper {
    position: absolute;
    top: 50%;
    right: 20px;
    margin-top: -25px;
    width: 50px;
    height: 40px;
    color: #fff;
    z-index: 999999;
    font-size: 12px;
  }
  /* 导航栏 */
  #header .header-nav-m .header-nav-m-wrapper {
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    background: $primaryColor;
    z-index: 9999999;
  }
  /* 导航栏 每个导航 */
  #header .header-nav-m .header-nav-m-wrapper > li {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
  }
  /* 导航栏 每个导航下面的 a 链接 */
  #header .header-nav-m .header-nav-m-wrapper > li > a {
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    padding: 15px 0;
    position: relative;
  }
  /* 导航栏 每个导航下面的 a 链接的右侧小三角 */
  #header .header-nav .header-nav-wrapper > li > a > span {
    font-size: 10px;
  }
}
</style>
