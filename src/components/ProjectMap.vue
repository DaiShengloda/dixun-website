<template>
  <div class="wrap">
    <div class="screen" :style="{height: height}" ref="screen"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/china.js'
import 'echarts/map/json/china.json'
import seriesData from '@/assets/js/seriesData.js'
import { isPC } from "@/utils/methods.js"
export default {
  name: 'default',
  props: {
    height: {
      type: String,
      default: "700px"
    }
  },
  data() {
    return {
      ispc: isPC(),
      mapSelParam: null,    //选中的参数
      echart: {
        // title: '中华人民共和国',   //选中的省份
        // zoom: 
      },
    };
  },
  mounted(){
    //代码入口
    this.initEcharts();
  },
  methods: {
    initEcharts(){
      //初始化echarts
      let echartApp = echarts.init(this.$refs.screen);

      //设置配置项
      echartApp.setOption(this.getEchartsOptions())

      //点击各省份事件处理
      let _this = this;
      echartApp.on('click', param => {
        //获取到的省份名
        let temp = JSON.stringify(this.mapSelParam);
        if(this.mapSelParam){
          //取消选中前一次选中的省份
          echartApp.dispatchAction({
            type: 'geoUnSelect',
            seriesIndex: this.mapSelParam.seriesIndex,
            seriesName: this.mapSelParam.seriesName,
            dataIndex: this.mapSelParam.dataIndex,
            name: this.mapSelParam.name
          })
        }

        this.mapSelParam = {
          seriesIndex: param.seriesIndex,
          seriesName: param.seriesName,
          dataIndex: param.dataIndex,
          name: param.name
        }
        
        //*********************************
        //***为选中的省份的参数赋值**********
        //*********************************
        this.$set(this.echart, 'title', param.name);

        echartApp.setOption(this.getEchartsOptions());
        //如果前一次选中与当前选中相同，则return，取消选中
        if(temp === JSON.stringify(this.mapSelParam)){
          this.$set(this.echart, 'title', '中华人民共和国');
          echartApp.setOption(this.getEchartsOptions());
          this.mapSelParam = {};
          return;
        }

        //选中当前点击的省份
        echartApp.dispatchAction({
          type: 'geoSelect',
          seriesIndex: this.mapSelParam.seriesIndex,
          seriesName: this.mapSelParam.seriesName,
          dataIndex: this.mapSelParam.dataIndex,
          name: this.mapSelParam.name
        })
      })

      this.$nextTick(() => {
        // this.echart.zoom = 1.1;
        // echartApp.setOption(this.getEchartsOptions());
      })
    },
    getEchartsOptions(){
      return {
        title: {
          show: false,
          text: this.echart.title,
          textStyle: {
            color: '#FFF',
            fontSize: 24
          },
          top: 20,
          left: 20
        },
        geo: {
          map: 'china',  //引入中国地图
          roam: false,  //是否可以缩放，拖拽
          zoom: 1.2,
          //地名配置项
          label: {
            //默认情况下配置项
            normal: {
              show: this.ispc?true:false,
              textStyle: {
                color: '#000'
              }
            },
            //选中高亮情况下配置项
            emphasis: {
              textStyle: {
                color: '#000'
              }
            }
          },
          //各省样式
          itemStyle: {
            normal: {
              areaColor: '#427a57',
              borderColor: '#000',
              borderWidth: 1,
            },
            emphasis: {
              areaColor: '#ebdb64',
              borderColor: '#000',
            }
          },
        },
        //设置各省份根据值(value)显示不同颜色
        visualMap: {
          //最大最小值
          min: 0,
          max: 40,
          //最大最小值描述
          // text: ['High', 'Low'],
          //文字颜色
          // textStyle: {
          //   color: '#CCC'
          // },
          //拖拽时，是否实时更新。
          // realtime: false,
          //是否显示拖拽用的手柄
          // calculable: true,
          //定义在选中范围中 的视觉元素
          inRange: {
            color: ['#d4f0e5', '#b6e4d2', '#a2ddc5', '#7cceaa', '#3c6754']
          }
        },
        //系列配置
        series: [{
          name: '大数据',
          type: 'map',
          //【此参数必须配置，否则visualMap不起作用】
          geoIndex: 0,
          //此处可接收后端参数，当前数据仅为测试
          data: seriesData
        }],
        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: 2000
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.wrap{
  min-height: 100%;
}
.screen{
  width: 100%;
}
</style>