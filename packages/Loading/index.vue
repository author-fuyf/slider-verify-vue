<template>
  <div class="loading-container">
    <img
      src="./images/loading.png"
      alt=""
      class="loading-img"
    >
    <div class="text">{{text}}</div>
  </div>
</template>
<script>
export default {
  name: 'Loading',
  props: {
    text: {
      type: String,
      default: '加载中...'
    }
  }
}
</script>
<style lang="stylus" scoped>
.loading-container {
  color: #969799;
  font-size: 14px;
  text-align: center;

  .loading-img {
    width: 32px;
    height: 32px;
    animation: loading 3s linear infinite;
  }

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  .text {
    margin-top: 5px;
  }
}
</style>
