<template>
    <div id="companyIntroduction">
        <Banner
            imgUrl="http://www.dixun.cc/assets/img/dx-intro-banner.jpg"
            name="走进迪迅"
        />
        <div class="container">
            <!-- 关于迪迅 -->
            <div class="row companyIntroduction-container">
                <card-title iconfont="icon-cunqingjianjie" title="关于迪迅" />
                <card-panel>
                    <div class="intro" slot="container">
                        <p class="text-justify">湖北迪迅环保科技有限公司是一家环保技术研发、环保设备设计、生产、销售为主的环保科技型企业。公司与湖北理工学院、华中科技大学、华中农业大学、武汉工程大学、中国沼气研究所等单位建立长期技术合作关系。</p>
                        <p class="text-justify">近年来公司自主研发的“烟气脱白除尘一体化管式电除尘换热技术”将干式电除尘、湿式电除尘器、管式换热器三种功能融为一体，同时实现烟气脱白和粉尘超低排放功能。</p>
                        <p class="text-justify">公司自主研发的“同步精密电除尘技术”能低成本实现工业废气粉尘近零排放，经多家公司三年以上的试用，出口粉尘浓度长期稳定在1mg/m3以下，运行费用、占地面积、总投资不到现有技术的一半。</p>
                        <p class="text-justify">公司自主研发的“蓄热式高温折流厌氧污水处理技术”能实现低能耗高温厌氧发酵，使常温废水增温两度达到60度以上的高温发酵效果，发酵时间从30天缩短到3-5天，出口的沼液各项指标高于现有国家有机肥标准，达到欧盟回用标准。</p>
                        <p class="text-justify">公司拥有该技术完整的知识产权，获多项实用新型专利和发明专利。</p>
                    </div>
                </card-panel>
                <card-panel>
                    <div class="wow zoomIn" slot="container">
                        <img class="img-responsive center-block" src="http://www.dixun.cc/assets/img/dx-intro.png" loading="lazy" />
                    </div>
                </card-panel>
            </div>

            <!-- 企业文化 -->
            <div class="row companyIntroduction-container">
                <card-title iconfont="icon-wenhua" title="企业文化" />
                <card-panel
                    :rowPanelNum="3"
                    v-for="(item) in culturesList"
                    :key="item.id"
                >
                    <div class="culture" slot="container">
                        <img v-lazy="item.img" loading="lazy" />
                        <div class="cul-box">
                            <div class="name">{{item.name}}</div>
                            <div class="enName">{{item.id}}</div>
                            <div class="des">{{item.des}}</div>
                        </div>
                    </div>
                </card-panel>
                
            </div>

            <!-- 车间照片 -->
            <div class="row companyIntroduction-container">
                <card-title iconfont="icon-kuaizhao" title="车间快照" />
                <card-panel :rowPanelNum="1">
                    <div slot="container" class="picture">
                        <el-carousel 
                            :interval="4000" 
                            type="card" 
                            height="400px"
                        >
                            <el-carousel-item 
                                v-for="item in storeList" 
                                :key="item"
                            >
                                <img v-lazy="item" loading="lazy" :key="item" />
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </card-panel>
            </div>

            <!-- 资质荣誉 -->
            <div class="row companyIntroduction-container">
                <card-title iconfont="icon-rongyu" title="资质荣誉" />
                <card-panel
                    :rowPanelNum="4"
                    v-for="(item, index) in flameList"
                    :key="index" 
                >
                    <div class="flame" slot="container">
                        <img v-lazy="item" loading="lazy" :key="index" />
                    </div>
                </card-panel>
                
            </div>

        </div>
    </div>
</template>
<script>
import { WOW } from 'wowjs';
import Banner from "@/components/Banner";
import CardTitle from "@/components/CardTitle";
import CardPanel from "@/components/CardPanel";
export default {
    name: 'companyIntroduction',
    data(){
        return{
            // 企业文化
            culturesList: [
                {
                    id: "mission",
                    name: "使命",
                    des: "以创新引领发展，用科技守护环境",
                    img: 'http://www.dixun.cc/assets/img/dx-mission.jpg'
                },
                {
                    id: "vision",
                    name: "愿景",
                    des: "成为环境综合解决方案的行业标杆",
                    img: 'http://www.dixun.cc/assets/img/dx-vision.jpg'
                },
                {
                    id: "values",
                    name: "价值观",
                    des: "以碳达峰、碳中和国策为导向；以节能降耗，资循环利用为根本",
                    img: 'http://www.dixun.cc/assets/img/dx-value.jpg'
                },
            ],
            // 车间快照
            storeList: [
                'http://www.dixun.cc/assets/img/dx-company1.png',
                'http://www.dixun.cc/assets/img/dx-company2.png',
                'http://www.dixun.cc/assets/img/dx-company3.png',
                'http://www.dixun.cc/assets/img/dx-company4.png',
                'http://www.dixun.cc/assets/img/dx-company5.png',
                'http://www.dixun.cc/assets/img/dx-company6.png'
            ],
            // 企业荣誉
            flameList: [
                "http://www.dixun.cc/assets/img/dx-zhizhao.png", 
                "http://www.dixun.cc/assets/img/dx-zl2.png", 
                "http://www.dixun.cc/assets/img/dx-zl8363745.png",
                "http://www.dixun.cc/assets/img/dx-zl10687346.png",
                "http://www.dixun.cc/assets/img/dx-zl15113257.png",
                "http://www.dixun.cc/assets/img/dx-zl17798181.png",
                "http://www.dixun.cc/assets/img/dx-zl40690.png",
                "http://www.dixun.cc/assets/img/dx-zl40691.png"
            ]
        }
    },
    mounted(){
        var wow = new WOW();
        wow.init();
    },
    components: {
        Banner,
        CardTitle,
        CardPanel
    }
}
</script>
<style scoped lang="scss">
#companyIntroduction {

    .container {
        padding-bottom: 50px;
        .companyIntroduction-container {
            padding-top: 80px;
            transition: all ease 0.5s;
            // 企业照片
            .picture {
                img{
                    width:100%;
                    height: 100%;
                }
            }
            // 文化
            .culture {
                width: 100%;
                position: relative;
                overflow: hidden;
                .cul-box {
                    position: absolute;
                    bottom: -70px;
                    width: calc(100%);
                    height: 145px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    background: rgba(0, 0, 0, 0.6);
                    transition: all 0.5s ease;
                    .name {
                        font-size: 18px;
                        font-weight: bold;
                        color: #fff;
                        margin-top: 15px
                    }
                    .enName {
                        font-size: 14px;
                        color: #999;
                        margin: 10px 0 15px 0;
                    }
                    .des {
                        font-size: 16px;
                        color: #d3d3d3;
                        text-align: center;
                    }
                }
                &:hover {
                    .cul-box {
                        bottom: 0px;
                        background: #fff;
                        transition: all 0.5s ease;
                        .name,.enName,.des {
                            color: $primaryColor;
                        }
                    }
                }
            }
            // 荣誉
            .flame {
                height: 300px;
                margin-bottom: 20px;
                img {
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}
</style>

