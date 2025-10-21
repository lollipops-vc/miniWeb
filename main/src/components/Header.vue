<template>
  <!-- 用户信息 -->
  <UserInfo />
  <!-- 导航 -->
  <MainNav />
</template>

<script>
import UserInfo from './userInfo.vue'
import MainNav from './MainNav.vue'
export default {
  name: 'header',
  components: {
    UserInfo,
    MainNav
  },
};
</script>

<style lang="scss" scoped>
</style>
