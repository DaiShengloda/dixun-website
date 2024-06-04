<template>
  <div class="contactUs">
    <Banner
      imgUrl="http://www.dixun.cc/assets/img/dx-contact-banner.jpg"
      name="联系我们"
    />

    <div class="container">

      <div class="row">
        <card-title iconfont="icon-qiyeyuanquwuye-xianxing" title="联系我们" />
        <card-panel :rowPanelNum="2">
          <div slot="container">
            <div class="contactBox">
              <i class="iconfont icon-dianhua"></i>
              <div style="fontSize: 24px">158-7121-3112</div>
            </div>
            <div class="contactBox">
              <i class="iconfont icon-youxiang"></i>
              <div>904867773@qq.com</div>
            </div>
            <div class="contactBox">
              <i class="iconfont icon-dizhi"></i>
              <div>湖北省黄石市大冶市高新技术产业园区科技服务中心（开元大道3号）</div>
            </div>
            <div class="contactBox">
              <i class="iconfont icon-weixin"></i>
              <img style="width:140px;height:140px" src="http://www.dixun.cc/assets/img/dx-wx.png" loading="lazy" />
            </div>
          </div>
        </card-panel>
        <card-panel :rowPanelNum="2">
          <div slot="container" id="map" class="wow zoomIn"></div>
        </card-panel>
      </div>

      <div class="row">
        <card-title iconfont="icon-zhaopin1" title="社会招聘" />
        <card-panel 
          :rowPanelNum="1"
          v-for="(item, index) in jobList"
          :key="index"
        >
          <job-card
            slot="container" 
            :name="item.name"
            :jobDescribe="item.jobDescribe"
            :jobNeed="item.jobNeed" 
          ></job-card>
        </card-panel>
      </div>
    </div>

  </div>
</template>
<script>
import { WOW } from 'wowjs'
import BMap from "BMap";
import Banner from "@/components/Banner";
import CardTitle from "@/components/CardTitle";
import CardPanel from "@/components/CardPanel";
import JobCard from "@/components/JobCard";
export default {
  name: "ContactUs",
  data() {
    return {
      jobList: [
        {
          name: "CAD工程师",
          jobDescribe: "1、负责完成产品设计阶段的数据设计与优化；<br>2、能协助建立CAD设计规范标准；<br>3、协助产品组完成2D图纸。",
          jobNeed: "1、熟练使用CATIA（3D/2D）设计软件；<br>2、熟练使用OFFICE等办公软件；<br>3、2-3年工作经验。",
        },
        {
          name: "环保工程师",
          jobDescribe: "1、进行产品研究，确定产品的设计概念、产品性能和生产条件；<br>2、产品生产的可行性评估，解决产品生产中的技术问题；<br>3、研究材料工艺和市场需求。",
          jobNeed: "1、会做项目设计方案；<br>2、本公司主要以处理废水的产品为主；<br>3、 持有环保相关工程师证尤佳；<br>4、5年及以上环保行业工作经验。",
        }
      ]
    };
  },
  mounted() {
    var wow = new WOW();
    wow.init();
    this.initBaiduMap();
  },
  methods: {
    initBaiduMap() {
      var map = new BMap.Map("map"); // 创建地图实例
      var point = new BMap.Point(114.94777, 30.14354); // 创建点坐标
      map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      var marker = new BMap.Marker(point); // 创建标注
      map.addOverlay(marker); // 将标注添加到地图中
      var opts = {
        width: 150, // 信息窗口宽度
        height: 10, // 信息窗口高度
        title: "大冶市高新区科技创业服务中心" // 信息窗口标题
      };
      var infoWindow = new BMap.InfoWindow(
        "湖北迪迅环保科技有限公司",
        opts
      ); // 创建信息窗口对象
      map.openInfoWindow(infoWindow, map.getCenter()); // 打开信息窗口
    }
  },
  components: {
    Banner,
    CardTitle,
    CardPanel,
    JobCard
  }
};
</script>
<style scoped lang="scss">
.contactUs {
  .container {
    padding-top: 80px;
    padding-bottom: 50px;
    .row {
      margin-bottom: 20px;
    }
    .contactBox {
      display: flex;
      align-items: center;
      padding: 20px 0;
      color: #424242;
      font-size: 20px;
      .iconfont {
        margin-right: 18px;
        color: #999;
        font-size: 25px;
      }
    }
  }
}
#map {
  width: 100%;
  height: 365px;
}
</style>

