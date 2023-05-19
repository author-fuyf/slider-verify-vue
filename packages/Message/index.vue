<template>
  <div
    class="message-container"
    :class="{'is-show': isShow, 'is-success': isSuccess}"
  >
    <span>{{isSuccess ? sText : eText}}</span>
  </div>
</template>
<script>
export default {
  name: 'Message',
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    isSuccess: {
      type: Boolean,
      default: false
    },
    sText: {
      type: String,
      default: '验证通过'
    },
    eText: {
      type: String,
      default: '请正确拼合图像'
    },
  }
}
</script>
<style lang="stylus" scoped>
.message-container {
  position: absolute;
  bottom: -30px;
  width: 100%;
  height: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  opacity: 0;
  background-color: #DE715B;
  height: 30px;
  transition: bottom 0.3s ease-out, opacity 0.1s ease-in;

  &.is-success {
    background: #41B883;
  }

  &.is-show {
    bottom: 0;
    opacity: 1;
  }
}
</style>
