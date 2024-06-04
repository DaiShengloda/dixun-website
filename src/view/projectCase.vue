<template>
  <div class="case">
    <Banner
      imgUrl="http://www.dixun.cc/assets/img/dx-project-banner.jpg"
      name="省钱 省心 高效"
      describe="全国100+案例稳定运行"
    />

    <div class="container">
      <div class="row">
        <div 
          class="col-xs-12 col-sm-12 col-md-6 box"
          v-for="(item, index) in projectList"
          :key="index"
        >
          <div class="box-img">
            <el-carousel 
              v-if="item.carousel&&item.carousel.length>0"
              style="width: 100%;height: 100%"
              :autoplay="false"
            >
              <el-carousel-item 
                v-for="jtem in item.carousel" 
                :key="jtem"
              >
                <img v-lazy="jtem" loading="lazy" :key="jtem" />
              </el-carousel-item>
            </el-carousel>
            <img 
              v-else
              v-lazy="item.img"
              class="pic"
              loading="lazy"
              :key="item.img"
            />
          </div>
          <div class="box-msg">
            <div class="name" v-if="item.name">{{item.name}}</div>
            <div class="des">{{item.des}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
import CardPanel from "@/components/CardPanel";
export default {
  data() {
    return {
      projectList: [
        {
          //河北
          img: "http://www.dixun.cc/assets/img/dx-project1.png",
          name: "河北项目",  
          des: "同步电除尘塔电一体"
        },
        {
          //湖北
          img: "http://www.dixun.cc/assets/img/dx-project2.png",
          name: "湖北襄阳项目",  
          des: "同步精密电除尘器安装在脱硫塔上方"
        },
        {
          //河北
          img: "http://www.dixun.cc/assets/img/dx-project3.png",
          name: "泽东化工项目",  
          des: "团聚器"
        },
        {
           //湖北
          img: "http://www.dixun.cc/assets/img/dx-project4.png",
          name: "湖北怛盛科技项目", 
          des: "同步电除尘器"
        },
        {
           //湖北
          img: "http://www.dixun.cc/assets/img/dx-project5.png",
          name: "湖北润丰源项目",
          des: "蓄热式高温折流污水处理系统"
        },
        {
           //湖北
          name: "湖北大冶项目",
          des: "太阳能污水处理系统",
          carousel: [
            "http://www.dixun.cc/assets/img/dx-project6.png", 
            "http://www.dixun.cc/assets/img/dx-project7.png", 
            "http://www.dixun.cc/assets/img/dx-project8.png", 
            "http://www.dixun.cc/assets/img/dx-project9.png"
          ],
        },
        {
          //安徽
          img: "http://www.dixun.cc/assets/img/dx-project10.png",
          name: "", 
          des: "喷浆造粒复合肥尾气治理项目湿式电除雾器工程"
        },
        {
          //安徽
          img: "http://www.dixun.cc/assets/img/dx-project11.png",
          name: "", 
          des: "中粮生物科技有限公司"  
        },
        {
          //山东
          img: "http://www.dixun.cc/assets/img/dx-project12.png",
          name: "",  
          des: "史丹利化肥股份有限公司尾气治理项目"
        },
        {
          //河北
          img: "http://www.dixun.cc/assets/img/dx-project13.png",
          name: "",  
          des: "冀衡化学股份有限公司尾气治理项目"
        },
        {
          //浙江
          img: "http://www.dixun.cc/assets/img/dx-project14.png",
          name: "",  
          des: "万洋肥业有限公司复肥一、二车间湿式电除尘器"
        },
        {
          //山西
          img: "http://www.dixun.cc/assets/img/dx-project15.png",
          name: "",  
          des: "同星抗生素生物分公司尾气治理项目"
        },
      ]
    }
  },
  components: {
    Banner,
    CardPanel
  }
}
</script>

<style lang="scss" scoped>
.case {
  .row {
    margin-top: 50px;
    .box {
      margin-bottom: 20px;
    }
  }
}
@media screen and (min-width: 997px) {
  .case {
    .box {
      width: 33%;
      .box-img {
        width: 100%;
        height: 270px;
        overflow: hidden;
        img {
          display: block;
          width: 100%;
          height: 100%;
          transition: all ease 0.5s;
          &:hover {
            transform: scale(1.2);
          }
        }
      }
      .box-msg {
        height: 140px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .name {
          padding-top: 20px;
          font-size: 20px;
        }
        .des {
          padding-top: 8px;
          font-size: 16px;
        }
      }
    }
  }
}
@media screen and (max-width: 997px){
  .case {
    .box {
      .box-img {
        width: 100%;
        height: 220px;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      .box-msg {
        height: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .name {
          padding-top: 20px;
          font-size: 16px;
        }
        .des {
          padding-top: 8px;
          font-size: 14px;
        }
      }
    }
  }
}
</style>