<template>
  <div id="footer" class="container-fluid">
    <div class="container">
      <div class="left">
        <div class="logo">
          <img src="http://www.dixun.cc/assets/img/dx-icon.png" alt="logo图" loading="lazy">
          <div class="title">湖北迪迅环保科技有限公司</div>
        </div>
        <div class="message">
          <div>电话：158-7121-3112</div>
          <div>邮箱：904867773@qq.com</div>
          <div>地址：湖北省黄石市大冶市高新技术产业园区科技服务中心（开元大道3号）</div>
          <!-- <div>91420281MA49M6EM8A</div> -->
        </div>
      </div>
      <img class="right" src="http://www.dixun.cc/assets/img/dx-wx.png" loading="lazy" />
    </div>
    
    <div class="copy">
      <div>开发者：湖北迪迅环保科技有限公司</div>
      <div>Copyright &copy; 2023 dixun.cc 版权所有</div>
      <div>
        <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42028102000245" target="_blank">
          <i class="record-icon"></i> 鄂公网安备 42028102000245号
        </a>&nbsp;&nbsp;|&nbsp;&nbsp;
        <a href="https://beian.miit.gov.cn" target="_blank">鄂ICP备2023001144号-1</a>
      </div>
      <div>
        <span>版本：1.0</span>&nbsp;&nbsp;|&nbsp;&nbsp;
        <span>隐私协议</span>&nbsp;&nbsp;|&nbsp;&nbsp;
        <span>用户权限</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {};
  }
};
</script>
<style scoped lang="scss">
#footer {
  width: 100%;
  height: 100%;
  color: #fff;
  background: $gray;
  overflow: hidden;
  text-align: center;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 50px;
    padding-bottom: 50px;
    border-bottom: 1px solid #666;
    font-size: 16px;
    .left {
      display: flex;
      flex-direction: column;
      .logo {
        display: flex;
        align-items: center;
        img {
          width: 60px;
          height: auto;
          margin-right: 20px;
        }
        .title {
          font-size: 25px;
        }
      }
      .message {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        height: 100px;
        margin-left: 85px;
      }
    }
    .right {
      width: 100px;
      height: 100px;
    }
  }
}
.copy {
  margin:15px 0 20px 0;
  color: #ffffff;
  font-size: 14px;
  opacity: 0.7;
  .record-icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url("http://www.dixun.cc/assets/img/record.png");
    vertical-align: middle;
  }
  >div {
    margin-bottom: 5px;
  }
  a {color: #ffffff;}
}
@media screen and (max-width: 997px) {
  #footer {
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 30px;

      .left {
        display: flex;
        flex-direction: column;
        align-items: center;
        .logo {
          display: flex;
          flex-direction: column;
          align-items: center;
          img {
            margin-right: 0px;
          }
          .title {
            font-size: 20px;
          }
        }
        .message {
          margin: 20px 0px;
        }
      }
    }
    .copy {
      font-size: 12px;
    }
  }
}
</style>

