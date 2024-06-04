<template>
  <div class="card-title">
    <i :class="`iconfont ${iconfont}`"></i>
    <h3>{{title}}</h3>
  </div>
</template>

<script>
// 配合row类一起使用
export default {
  props: {
    iconfont: String,
    title: String,
  }
}
</script>

<style lang="scss" scoped>
.card-title {
  display: flex;
  margin-bottom: 15px;
  .iconfont {
    margin-right: 15px;
    font-size: 45px;
    border-radius: 50%;
    color: $primaryColor;
  }
}
</style>