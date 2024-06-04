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
      activeName: ""
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.initActiveName(this, to, from);
    next()
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      // 通过 `vm` 访问组件实例
      vm.initActiveName(vm, to, from);
    })
  },
  methods: {
    initActiveName(vm, to, from) {
      const { path: toPath } = to
      const { path: fromPath } = from
      if(toPath == fromPath)return
      if(toPath.includes('electorPrecipitator')){
        vm.activeName = 'electorPrecipitator'
      }else if(toPath.includes('sewageDisposal')) {
        vm.activeName = 'sewageDisposal'
      }
    },
    handleClick({name}) {
      if(this.$route.fullPath.includes(name))return false;
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