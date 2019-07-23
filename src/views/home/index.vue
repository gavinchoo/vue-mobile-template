<template>
  <mt-page>
    <mt-titlebar slot="header"></mt-titlebar>
    <div slot="content">
      <mt-button @click="open('/inspect')">列表</mt-button>
      <mt-button @click="open('/status')">详情</mt-button>
      <mt-button @click="open('/inspect/result')">编辑</mt-button>
    </div>
  </mt-page>
</template>
<script>
export default {
  methods: {
    open(path) {
      this.$router.push(path);
    }
  }
};
</script>
<style lang="less" scoped></style>
