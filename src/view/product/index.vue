<template>
  <div class="product">
    <Banner
      imgUrl="http://www.dixun.cc/assets/img/dx-product-banner.jpg"
      name="核心技术"
    />
    <!-- tab -->
    <el-tabs 
      v-model="activeName" 
      type="card" 
      @tab-click="handleClick"
      style="marginBottom: 24px"
    >
      <el-tab-pane
        v-for="item in tabList"
        :key="item.name"
        :label="item.label"
        :name="item.name"
      ></el-tab-pane>
    </el-tabs>

    <router-view></router-view>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
export default {
  data() {
    return {
      tabList: [
        {
          name: "electorPrecipitator",
          label: "同步精密电除尘",
        },
        {
          name: "sewageDisposal",
          label: "蓄热式高温折流污水外理",
        },
      ],
      activeName: "electorPrecipitator"
    }
  },
  watch: {
    $route(to, from) {
      const { path: toPath } = to
      const { path: fromPath } = from
      if(fromPath === "/" || toPath == fromPath)return
      if(toPath.includes('electorPrecipitator')){
        this.activeName = 'electorPrecipitator'
      }else if(toPath.includes('sewageDisposal')) {
        this.activeName = 'sewageDisposal'
      }
    }
  },
  methods: {
    handleClick({name}) {
      this.$router.push(name)
    }
  },
  components: {
    Banner,
  }
}
</script>

<style>

</style>