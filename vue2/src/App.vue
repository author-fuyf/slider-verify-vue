<template>
  <div id="app">
    <a
      href="https://vuejs.org/"
      target="_blank"
    >
      <img
        src="./assets/logo.png"
        class="logo vue"
        alt="Vue logo"
      />
    </a>
    <div class="opreation">
      <span @click="isShowSelf = !isShowSelf">isShowSelf</span>
      <span @click="width = 400">width 400</span>
      <span @click="height = 200">height 220</span>
      <span @click="isBorder = !isBorder">isBorder 取反</span>
      <span @click="isParentNode = !isParentNode">isParentNode 取反</span>
      <span @click="isCloseBtn = !isCloseBtn">isCloseBtn 取反</span>
      <span @click="isReloadBtn = !isReloadBtn">isReloadBtn 取反</span>
    </div>

    <SliderVerify
      :isShowSelf.sync="isShowSelf"
      :width="width"
      :height="height"
      :isBorder="isBorder"
      :imgUrl="imgUrl"
      :isCloseBtn="isCloseBtn"
      :isReloadBtn="isReloadBtn"
      :isParentNode="isParentNode"
      @reload="reload"
      @show="show"
      @hide="hide"
      @success="success"
      @fail="fail"
    ></SliderVerify>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      isShowSelf: true,
      width: 300,
      height: 180,
      isBorder: true,
      imgUrl: '',
      isCloseBtn: true,
      isReloadBtn: true,
      isParentNode: false
    }
  },
  methods: {
    handlerClick() {
      console.log('handlerClick')
      this.isVerifyShow = true
    },
    reload() {
      console.log('SliderVerify => reload')
    },
    show() {
      console.log('SliderVerify => show')
    },
    hide() {
      console.log('SliderVerify => hide')
    },
    success() {
      console.log('SliderVerify => success')
    },
    fail() {
      console.log('SliderVerify => fail')
    }
  }
}
</script>

<style lang="stylus" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;

  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }

  .opreation {
    display: flex;
    justify-content: center;

    span {
      margin-left: 20px;
    }
  }
}
</style>
