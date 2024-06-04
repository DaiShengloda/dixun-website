<template>
  <div class="electorPrecipitator container">
    <div class="row">
      <card-title iconfont="icon-jianjie" title="同步精密电除尘" />
      <card-panel :rowPanelNum="1">
        <div slot="container">
          <p>省电，把“平行型阳极板” 改为垂直型阳极板”，惯性力与电场力同时起作用，耗电量是传统电除尘器的一半。</p>
          <p>气速高，普通的电除尘器惯性力对除尘是抑制作用，同步电除尘器惯性力对除尘是叠加助力作用。可增加气速，降低占地面积，同时也适应烟气量的较大幅度的波动。</p>
          <p>进口粉尘浓度适应性增强，由于采用团聚技术，当进口粉尘浓度大时，团聚效率更高，因而对出口浓度的影响较小。</p>
          <p>升级换代方便，更换不同密度和层数的阳极板，可保证不同的出口浓度。可以低成本实现近零排放。</p>
          <p>设备重量轻，降低基建投资，缩短施工周期。总投资低。</p>
          <p>采用金属材料制作，导电效果更好，防火性能强。</p>
        </div>
      </card-panel>
    </div>

    <div class="row">
      <card-title iconfont="icon-gongyiliucheng_0" title="工艺原理" />
      <card-panel :rowPanelNum="3">
        <div slot="container">
          <img src='http://www.dixun.cc/assets/img/dx-elector-jianjie1.png' loading="lazy" />
          <img src='http://www.dixun.cc/assets/img/dx-elector-jianjie2.png' loading="lazy" />
        </div>
      </card-panel>
      <card-panel :rowPanelNum="3">
        <img slot="container" src="http://www.dixun.cc/assets/img/dx-zl15113257.png" loading="lazy" />
      </card-panel>
      <card-panel :rowPanelNum="3">
        <img slot="container" src="http://www.dixun.cc/assets/img/dx-elector-gy1.png" loading="lazy" />
      </card-panel>
    </div>

    <div class="row">
      <card-title iconfont="icon-gongsiyoushi-" title="电除尘脱白核心优势" />
      <card-panel :rowPanelNum="3">
        <div slot="container">
          <p class="text-indent">烟气脱白除尘一体化管式电除尘换热器，包括除尘换热装置和与除尘换热装置连通的脱硫塔，干湿烟气通过阳极管直接换热，不需要另外增加热源和冷源，脱白除尘的同时，还能回收烟气中的水分，使脱硫后的烟气真正达到零排放。</p>
        </div>
      </card-panel>
      <card-panel :rowPanelNum="3">
        <img slot="container" src="http://www.dixun.cc/assets/img/dx-zl8363745.png" loading="lazy" />
      </card-panel>
      <card-panel :rowPanelNum="3">
        <img slot="container" src="http://www.dixun.cc/assets/img/dx-elector-dcctb.png" loading="lazy" />
      </card-panel>
    </div>

    <div class="row">
      <card-title iconfont="icon-gongsiyoushi-" title="四维湿电核心优势" />
      <card-panel :rowPanelNum="3">
        <div slot="container">
          <p class="text-indent">四维湿式电除尘器，是在湿式电除尘器的基础上，结合电场前端预荷电技术、电场后端再荷电技术、同步电除尘技术，三项技术组合成一个完整的整体。在减少占地面积、降低投资和运行费用的情况下，达到近零排放的目的。</p>
        </div>
      </card-panel>
      <card-panel :rowPanelNum="3">
        <img slot="container" src="http://www.dixun.cc/assets/img/dx-zl2.png" loading="lazy" />
      </card-panel>
      <card-panel :rowPanelNum="3">
        <img slot="container" src="http://www.dixun.cc/assets/img/dx-elector-swsd.png" loading="lazy" />
      </card-panel>
    </div>

    <div class="row">
      <card-title iconfont="icon-liangliangduibi" title="除尘器对比表" />
      <card-panel :rowPanelNum="1">
        <img slot="container" src="http://www.dixun.cc/assets/img/dx-elector-db.png" loading="lazy" />
      </card-panel>
    </div>
  </div>
</template>

<script>
import CardTitle from "@/components/CardTitle";
import CardPanel from "@/components/CardPanel";
export default {
  components: {
    CardTitle,
    CardPanel
  }
}
</script>

<style lang="scss" scoped>
.electorPrecipitator {
  >div {
    margin-bottom: 30px;
  }
}
</style>