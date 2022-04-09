<template>
  <div class="box">
    <div class="son">
      <img src="@/assets/404.png" alt="404" class="imgs">
      <el-button class="btn" @click="backHome" type="primary">回到首页</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useRoute, useRouter } from 'vue-router'
  // const route = useRoute()
  const router = useRouter()
  const backHome = () => {
    // console.info('路由', route)
    router.push({
      name: 'home',
      // query: {
      //   info: '404'
      // }
    })
  }
</script>

<style lang="scss" scoped>
.box {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: $white;
  .son {
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translate(-50%, -20%);
    text-align: center;
    .imgs {
      width: 600px;
      height: 400px;
      display: block;
    }
  }
}
</style>