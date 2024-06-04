<template>
  <div class="homePage">

    <!-- 轮播图 -->
    <div id="swiper" class="container-fuild">
      <div class="swiper-container banner-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in swiperList" :key="index">
            <video 
              v-if="item.type=='video'"
              class="swiper-lazy"
              autoplay
              controls
              muted
              playsinline
              :src="item.src" 
              alt="轮播图"
            >
              请使用最新版google浏览器播放视频！
            </video>
            <img 
              v-else
              class="swiper-lazy" 
              v-lazy="item.src" 
              alt="轮播图"
            />
            <div class="swiper-lazy-preloader"></div>
            <div 
              v-if="item.title || item.content"
              class="swiper-slide-title"
            >
                <h1>{{item.title}}</h1>
                <p>{{item.content}}</p>
            </div>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>

    <!-- 公司介绍 -->
    <div class="container">
      <div class="company">
        <div class="title"><router-link to="companyintroduction">关于迪迅</router-link></div>
        <div class="row">
          <card-panel :rowPanelNum="1">
            <div slot="container">
              <p class="text-justify">湖北迪迅环保科技有限公司是一家环保技术研发、环保设备设计、生产、销售为主的环保科技型企业。公司与湖北理工学院、华中科技大学、华中农业大学、武汉工程大学、中国沼气研究所等单位建立长期技术合作关系。</p>
              <p class="text-justify">近年来公司自主研发的“烟气脱白除尘一体化管式电除尘换热技术”将干式电除尘、湿式电除尘器、管式换热器三种功能融为一体，同时实现烟气脱白和粉尘超低排放功能。</p>
              <p class="text-justify">公司自主研发的“同步精密电除尘技术”能低成本实现工业废气粉尘近零排放，经多家公司三年以上的试用，出口粉尘浓度长期稳定在1mg/m3以下，运行费用、占地面积、总投资不到现有技术的一半。</p>
              <p class="text-justify">公司自主研发的“蓄热式高温折流厌氧污水处理技术”能实现低能耗高温厌氧发酵，使常温废水增温两度达到60度以上的高温发酵效果，发酵时间从30天缩短到3-5天，出口的沼液各项指标高于现有国家有机肥标准，达到欧盟回用标准。</p>
              <p class="text-justify">公司拥有该技术完整的知识产权，获多项实用新型专利和发明专利。</p>
            </div>
          </card-panel>
          <card-panel :rowPanelNum="2">
            <div slot="container" class="character">
              <div>
                <div class="charaBox">
                  <span>2</span>
                  <span>大</span>
                </div>
                <div class="type">应用技术</div>
              </div>
              <div>
                <div class="charaBox">
                  <span>30</span>
                  <span>年</span>
                </div>
                <div class="type">环保行业经验</div>
              </div>
            </div>
          </card-panel>
          <card-panel :rowPanelNum="2">
            <div slot="container" class="character">
              <div>
                <div class="charaBox">
                  <span>20</span>
                  <span>+</span>
                </div>
                <div class="type">专利技术</div>
              </div>
              <div>
                <div class="charaBox">
                  <span>100</span>
                  <span>+</span>
                </div>
                <div class="type">国内应用案例</div>
              </div>
            </div>
          </card-panel>
        </div>
      </div>
    </div>

    <!-- 核心技术 -->
    <div 
      class="product"
    >
      <div class="container">
        <div class="title txtCenter"><router-link to="product">核心技术</router-link></div>
        <div class="row">
          <card-panel 
            :rowPanelNum="2"
            v-for="(item) in productList"
            :key="item.id"
          >
            <div class="wrap" slot="container">
              <div class="box">
                <img v-lazy="item.img" loading="lazy" :key="item.id" />
                <div class="box-msg">
                  <div class="name">{{item.name}}</div>
                  <div class="des">{{item.des}}</div>
                  <router-link class="link" :to="item.path">查看详情</router-link>
                </div>
                <div class="box-modal"></div>
              </div>
            </div>
          </card-panel>
        </div>
      </div>
    </div>

    <!-- 项目介绍 -->
    <div class="project">
      <div class="container">
        <div class="title"><router-link to="projectCase">应用案例</router-link></div>
        <div class="tip">立足大冶，布局华中，辐射全国</div>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-6 left">
            <div class="msg">公司是环保科技型企业，拥有完整的环保设备自主研发、设计、生产、销售能力，在精密电除尘、污水处理等业务方面拥有完整解决方案，且拥有多项国家专利。在全国有100+应用案例，和中粮生物、史丹利化肥、同星抗生素等上市企业皆有项目合作。</div>
            <div class="link">
              <i class="iconfont icon-caidan"></i>
              <router-link to="projectCase">100+项目</router-link>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6 right">
            <ProjectMap />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/**
 * 轮播
 * 公司介绍
 * 产品介绍
 * 项目介绍
 *  */ 
import Swiper from "swiper";
import { WOW } from 'wowjs';
import CardPanel from "@/components/CardPanel";
import ProjectMap from "@/components/ProjectMap";
export default {
  name: "homePage",
  data() {
    return {
      // 轮播图
      swiperList: [
        {
          type: "video",
          src: "http://www.dixun.cc/assets/media/dx-intro.mp4",
          path: "",
          title: '',
          content: '',
        },
        {
          type: "image",
          src: "http://www.dixun.cc/assets/img/dx-banner1.jpeg",
          path: "",
          title: '我们致力于',
          content: '用科技守护环境,提供省钱、省心、高效的解决方案',
        },
        {
          type: "image",
          src: "http://www.dixun.cc/assets/img/dx-banner3.jpg",
          path: "",
          title: '我们专注于',
          content: '工业废气、粉尘处理、农村污水、养殖污水处理、污水资源化',
        },
        {
          type: "image",
          src: "http://www.dixun.cc/assets/img/dx-banner2.jpeg",
          path: "",
          title: '我们秉承着',
          content: '节能降耗、资源循环利用为根本，助力碳达峰、碳中和',
        },
        {
          type: "image",
          src: "http://www.dixun.cc/assets/img/dx-banner4.jpg",
          path: "",
          title: '',
          content: '',
        }
      ],
      // 核心技术
      productList: [
        {
          id: "elector",
          name: "同步精密电除尘",
          des: "以创新引领发展，用科技守护环境",
          path: "product/electorPrecipitator",
          img: 'http://www.dixun.cc/assets/img/dx-project1.png'
        },
        {
          id: "sewage",
          name: "蓄热式高温折流污水外理",
          des: "成为环境综合解决方案的行业标杆",
          path: "product/sewageDisposal",
          img: 'http://www.dixun.cc/assets/img/dx-vision.jpg'
        },
      ],
    };
  },
  mounted() {
    this.initBannerSwiper()
    /* wowjs动画 */
    var wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true
    })
    wow.init();
  },
  methods: {
    initBannerSwiper() {
      /* banner-swiper */
      new Swiper(".banner-swiper", {
        // loop: true, // 循环模式选项
        effect: 'slide',
        //自动播放
        // autoplay: {
        //   delay: 5000,
        //   stopOnLastSlide: false,
        //   disableOnInteraction: false
        // },
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        // 延迟加载
        lazy: {
          loadPrevNext: true
        },
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true //修改swiper的父元素时，自动初始化swiper
      });
    }
  },
  components: {
    CardPanel,
    ProjectMap
  }
};
</script>
<style scoped lang="scss">
@import url("../assets/fonts/font.scss");
/* 整体盒子 */
.homePage {
  width: 100%;

  /* 轮播图 */
  #swiper {
    height: 600px;
  }
  #swiper .banner-swiper {
    width: 100%;
    height: 100%;
  }
  #swiper .banner-swiper .swiper-slide img {
    width: 100%;
    height: 100%;
  }
  #swiper .banner-swiper .swiper-slide video {
    width: 100%;
    height: 100%;
  }
  #swiper .banner-swiper .swiper-slide{
    position: relative;
    background-color: #000000;
  }
  #swiper .banner-swiper .swiper-slide-title {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999999999;
    width: 100%;
    height: 100%;
    color: #fff;
    // background: rgba(51, 51, 51, 0.534);
    text-align: center;
  }
  #swiper .banner-swiper .swiper-slide-title > h1{
    font-size: 50px;
    margin-top: 8%;
    line-height: 80px;
  }
  #swiper .banner-swiper .swiper-slide-title > p{
    font-size: 20px;
    margin-top: 1%;
    font-weight: 700;
  }

  // 公司介绍
  .container {
    padding-top: 60px;
    padding-bottom: 60px;
    .title {
      margin-bottom: 20px;
      font-size: 30px;
      font-weight: bold;
      a {
        color: $primaryColor;
        &:hover{
          text-decoration: none;
        }
      }
    }
    .txtCenter {
      text-align: center;
    }
  }
  .company {
    .character {
      display: flex;
      justify-content: space-around;
      .charaBox {
        height: 74px;
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        margin-bottom: 8px;
        >span {
          &:first-child {
            display: inline-block;
            font-size: 60px;
            color: $primaryColor;
            line-height: 60px;
            margin: 0 5px;
            font-weight: bold;
            font-family: "汉仪瑞意宋";
          }
        }
      }
      .type {
        font-size: 14px;
        color: #666;
        opacity: 1.0;
        line-height: 18px;
        text-align: left;
        margin: 0 10px;
      }
    }
  }

  // 核心技术
  .product {
    margin-top: 60px;
    padding-bottom: 50px;
    background-image: url("http://www.dixun.cc/assets/img/dx-bad.jpg");
    .title a{
      color: #fff;
    }
    .wrap {
      width: 100%;
      display: flex;
      justify-content: center;
      .box {
        position: relative;
        overflow: hidden;
        max-width: 400px;
        .box-msg {
          width: 100%;
          position: absolute;
          top: 20%;
          color: #fff;
          text-align: center;
          z-index: 999;
          .name {
            font-size: 24px;
            font-weight: bold;
          }
          .des {
            font-size: 18px;
            margin: 20px 0;
          }
          .link {
            font-size: 16px;
            color: #fff;
          }
        }
        .box-modal {
          width: 100%;
          height: 100%;
          background: rgba($color: $primaryColor, $alpha: 0.3);
          position: absolute;
          top: 100%;
          transition: all 0.5s ease;
        }
        &:hover {
          .box-modal {
            top: 0px;
          }
        }
      }
    }
  }

  // 项目介绍
  .project {
    .tip {
      width: 90%;
      max-width: 350px;
      margin: 0 auto;
      line-height: 46px;
      font-size: 20px;
      color: #fff;
      font-weight: bold;
      text-align: center;
      background: rgba($color: $primaryColor, $alpha: 1);
    }
    .left {
      .msg {
        font-size: 14px;
        line-height: 28px;
      }
      .link {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 46px;
        padding: 0 15px;
        margin-top: 30px;
        border: 1px solid $primaryColor;
        font-size: 16px;
        background: #fff;
        .iconfont {
          margin-right: 10px;
          color: $primaryColor;
        }
        a {
          color: #000;
          text-decoration: none;
        }
        &:hover {
          background: $primaryColor;
          .iconfont {color: #fff;}
          a {color: #fff}
        }
      }
    }
  }
}

/* 媒体查询 */
@media screen and (min-width: 997px) {
  .homePage {
    .product {
      .wrap {
        .box {
          img {
            height: 530px;
          }
        }
      }
    }

    .project {
      .left {
        margin-top: 100px;
        width: 20%;
      }
      .right {
        width: 80%;
      }
    }
  }
}
@media screen and (max-width: 997px){
  .homePage {
    .product {
      .wrap {
        .box {
          img {
            height: 440px;
          }
        }
      }
    }

    .project {
      .left {
        margin-top: 20px;
      }
      .right {}
    }
  }
}

/* 媒体查询（手机） */
@media screen and (max-width: 768px) {
  #swiper {
    height: 200px;
  }
}

/* 媒体查询（平板） */
@media screen and (min-width: 768px) and (max-width: 996px) {
  #swiper {
    height: 400px;
  }
}
</style>

