<template>
  <el-card class="job-card">
    <div 
      slot="header" 
      class="header"
      v-on:click="showDetail = !showDetail"
    >
      <div class="name">{{name}}</div>
      <div class="msg">
        <div>
          <span class="mr12">薪资面议</span>
          <span class="mr12">全职</span>
          <span><i class="iconfont icon-dizhi"></i>湖北省-黄石市-大冶市</span>
        </div>
        <div>最近发布</div>
      </div>
    </div>
    <div 
      v-show="showDetail" 
      class="body"
    >
      <div class="need">
        <div class="title">工作职责</div>
        <div v-html="jobDescribe"></div>
      </div>
      <div class="des">
        <div class="title">任职资格</div>
        <div v-html="jobNeed"></div>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      showDetail: false
    }
  },
  props: {
    name: {
      type: String,
      default: "岗位名称"
    },
    jobDescribe: String,
    jobNeed: String,
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
/deep/ .el-card__header {
  padding: 0;
}
/deep/ .el-card__body {
  padding: 0;
}
.mr12 {
  margin-right: 12px;
}
.job-card {
  .header {
    display: flex;
    flex-direction: column;
    padding: 18px 20px;
    cursor: pointer;
    user-select: none;
    &:hover {
      background: #f3f5fd;
    }
    .name {
      font-size: 20px;
      color: rgb(20, 20, 20);
      line-height: 28px;
      font-weight: 600;
    }
    .msg {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 12px;
      font-size: 14px;
      color: rgb(20, 20, 20);
      line-height: 22px;
      font-weight: 400;
      .iconfont {
        margin-right: 5px;
      }
    }
  }
  .body {
    padding: 20px;
    font-size: 14px;
    color: rgb(20, 20, 20);
    line-height: 22px;
    font-weight: 400;
    .title {
      margin-bottom: 8px;
      font-weight: 600;
    }
    .des {
      margin-top: 15px;
    }
  }
}
</style>