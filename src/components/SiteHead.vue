<template>
  <header class="headers">
    <div class="main">
      <img src="https://lovehaha.cn/img/logo3.f0bd8bc7.png" alt="" class="logo" />
      <div class="tab">
        <router-link to="/home" tag="a">
        <el-icon :size="20" color="#409EFF"><cold-drink /></el-icon>
        <span> 资源软件</span>
       
       </router-link>
        <router-link to="/article" tag="a">
        <el-icon :size="20" color="#409EFF"><coffee-cup /></el-icon>
         <span>教程文章</span>
        </router-link>
        <router-link to="/log" tag="a">更新日志</router-link>
      </div>
      <div>
        <el-button>登陆/注册</el-button>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="scss">
@import '@/style/minix.scss';
.headers {
  box-sizing: border-box;
  width: 100%;
  height: $height;
  background-color: $white;
  // box-shadow: $light-shadow;
  .main {
    @include flex--auto(center, space-between);
    width: $layout-width;
    margin: 0 auto;
    height: $height;
    line-height: $height;
    .logo {
      display: block;
      width: 180px;
      height: 60px;
    }
    .tab {
      flex: 1;
      @include flex--auto(center);
      margin-left: 20px;
      a {
        @include font-set($font14, $b-title);
        padding: 0 30px;
        &:active,&:hover {
          color: $brand;
        }
      }
    }
  }
}
</style>