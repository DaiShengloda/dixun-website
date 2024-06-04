<template>
<div class="banner">
  <div 
    class="img text-center"
    :style="{
      backgroundImage: `url(${imgUrl})`,
      color: color
    }"
  >
    <div class="name">{{name}}</div>
    <div class="des">{{describe}}</div>
  </div>
</div>
</template>
<script>
export default {
  props: {
    imgUrl: String,
    name: String,
    describe: String,
    color: {
      type: String,
      default: "#fff"
    },
  }
}
</script>
<style scoped lang="scss">
.banner {
  .img{
    height: 260px;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;
    background-position: center center;
    .name {
      padding-top: 60px;
      font-size: 30px;
    }
    .des {
      padding-top: 8px;
      font-size: 18px;
    }
  }
}
</style>