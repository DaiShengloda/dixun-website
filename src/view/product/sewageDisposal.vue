<template>
  <div class="sewageDisposal container">
    <div class="row">
      <card-title iconfont="icon-jianjie" title="蓄热式高温折流污水外理" />
      <card-panel :rowPanelNum="1">
        <div slot="container">
          <p>蓄热式高温折流厌氧发酵技术是将现有高温厌氧、折流厌氧、热回收、加热、厌氧氨氧化等多项先进技术完美地结合在一起, 整个系统既是一台板式换热器，同时也是一台折流式厌氧发酵器，换热回收热能，中、高温厌氧发酵、固液分离、厌氧氨氧化等多种功能在同一空间内同时进行。</p>
          <p>进水温度为20度时，出水温度约22度，当废水换热到极限温度62度时，再加热到65度，减少加热能耗，提高了发酵效率和杀菌功能。对20度的废水只增温3度，达到65度的发酵和杀菌效果。余热利用率达到97%以上。废水换热降温达到厌氧氨氧化的最佳温度（40度）时，加入厌氧氨氧化生物菌种，进行厌氧氨氧化脱氮处理。</p>
          <p>通过合理分配各不同温度的发酵时间，充分发挥高温杀菌功能和减少氨氮抑制。以总发酵时间72小时计算，所有时间内都在进行换热、发酵和固液分离，65度停留2小时，60度停留4小时，55度停留14小时，50度停留8小时，45度停留8 小时，40度停留8小时，35度停留8小时，30度停留8 小时，30度以下停留12小时。如此高的温度和停留时间，能杀死任何病菌，且能分解部分抗生素，出口沼液高于欧盟回用标准，还田更安全，冲栏回用无障碍。</p>
        </div>
      </card-panel>
    </div>

    <div class="row">
      <card-title iconfont="icon-gongyiliucheng_0" title="工艺原理" />
      <card-panel :rowPanelNum="3">
        <img slot="container" src='http://www.dixun.cc/assets/img/dx-sewage-gy1.png' loading="lazy" />
      </card-panel>
      <card-panel :rowPanelNum="3">
        <img slot="container" class="sewage-gy" src='http://www.dixun.cc/assets/img/dx-sewage-gy2.png' loading="lazy" />
      </card-panel>
      <card-panel :rowPanelNum="3">
        <img slot="container" class="sewage-gy" src='http://www.dixun.cc/assets/img/dx-sewage-gy3.png' loading="lazy" />
      </card-panel>
    </div>

    <div class="row">
      <card-title iconfont="icon-liangliangduibi" title="传统折流与蓄热式高温厌氧发酵技术对比"/>
      <card-panel :rowPanelNum="1">
        <img slot="container" src='http://www.dixun.cc/assets/img/dx-sewage-db1.png' loading="lazy" />
      </card-panel>
    </div>

    <div class="row">
      <card-title iconfont="icon-liangliangduibi" title="污水处理新旧工艺对比表"/>
      <card-panel :rowPanelNum="2">
        <img slot="container" src='http://www.dixun.cc/assets/img/dx-sewage-db2.png' loading="lazy" />
      </card-panel>
      <card-panel :rowPanelNum="2">
        <img slot="container" src='http://www.dixun.cc/assets/img/dx-sewage-db3.png' loading="lazy" />
      </card-panel>
    </div>

    <div class="row">
      <card-title iconfont="icon-freedocsys" title="相关资料" />
      <card-panel :rowPanelNum="2">
        <div slot="container" class="pdfWrapper">
          <div class="logo">
            <i class="iconfont icon-pdf"></i>
            <div>pdf</div>
          </div>
          <img 
            src='http://www.dixun.cc/assets/img/dx-sewage-pdf.png'
            loading="lazy" 
            style="cursor: pointer"
            @click="showDialog()"
          />
        </div>
      </card-panel>
      <card-panel :rowPanelNum="2">
        <div slot="container" class="pdfWrapper">
          <div class="logo">
            <i class="iconfont icon-video"></i>
            <div>video</div>
          </div>
          <img 
            src='http://www.dixun.cc/assets/img/dx-sewage-video.png'
            loading="lazy" 
            style="cursor: pointer"
            @click="playVideo()"
          />
        </div>
      </card-panel>
    </div>

    <el-dialog
      title="蓄热式高温折流厌氧发酵技术"
      :visible.sync="dialogVisible"
      width="80%"
    >
      <div v-loading="loading" element-loading-text="资源加载中" style="minHeight:200px">
        <pdf 
          v-for="i in pdfNum"
          :key="i"
          :src="pdfSrc"
          :page="i"
        />
      </div>
    </el-dialog>
  </div>
</template>

<script>
import CardTitle from "@/components/CardTitle";
import CardPanel from "@/components/CardPanel";
import pdf from 'vue-pdf';
export default {
  data() {
    return {
      loading: false,
      pdfSrc: pdf.createLoadingTask(require('@/assets/media/sewageDisposal.pdf')),
      pdfNum: undefined,
      dialogVisible: false,
    }
  },
  mounted() {},
  methods: {
    pdfTask() {
      try {
        var self = this;
        this.pdfSrc.promise.then(pdf => {
          self.pdfNum = pdf.numPages;
          self.loading = false;
        })
        .catch((err) => {
          console.error(err);
        });
      } catch(e) {
        console.error(e);
      }
    },
    showDialog() {
      this.pdfTask();
      this.dialogVisible = true;
      this.loading = true;
      // window.open("http://www.dixun.cc/assets/docs/sewageDisposal.pdf");
    },
    playVideo() {
      window.open("http://www.dixun.cc/assets/media/dx-sewageDisposal.mp4");
    }
  },
  components: {
    CardTitle,
    CardPanel,
    pdf
  }
}
</script>

<style scoped lang="scss">
.sewageDisposal {
  padding-bottom: 20px;
  .pdfWrapper {
    position: relative;
    .logo {
      position: absolute;
      bottom: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 30px;
      padding: 0 5px;
      background-color: rgba(0, 0, 0, 0.8);
      border-radius: 3px;
      color: #fff;
      .iconfont {
        margin-right: 5px;
      }
    }
    img {
      display: block;
    }
  }
}

@media screen and (min-width: 997px) {
  .sewageDisposal {
    .sewage-gy {
      height:375px
    }
  }
}
</style>