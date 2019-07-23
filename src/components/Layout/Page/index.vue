<template>
  <div class="business-wrapper">
    <div class="business-header">
      <slot name="header"></slot>
    </div>
    <div class="business-content">
      <slot name="content"></slot>
    </div>
    <div class="business-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String
  }
};
</script>
<style lang="less" scoped>
.business-wrapper {
  line-height: 0.58666667rem;
  padding-top: 45px;
}
.business-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>


