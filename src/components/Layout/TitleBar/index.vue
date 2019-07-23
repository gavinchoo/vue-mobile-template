<template>
  <mt-header fixed v-bind:title='title'>
    <router-link to="" slot="left">
      <mt-button icon="back" @click="$router.go(-1)"></mt-button>
    </router-link>
  </mt-header>
</template>
<script>
export default {
  props: {
    title: String
  }
};
</script>
<style lang="less" scoped>
</style>


