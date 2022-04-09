<template>
  <SiteHead />
  <div class="main">
21
    <el-icon><coffee-cup /></el-icon>
  </div>
</template>

<script lang="ts" setup>
import { reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()


</script>


<style scoped lang="scss">
@import 'src/style/minix.scss';
.home {
  .main {
    margin: 20px auto 40px auto;
    padding-bottom: 80px;
    .content {
      margin-top: 20px;
      @include flex--auto(false, space-between);
      width: 100%;
      .left {
        width: 70%;
      }
      .right {
        width: 28%;
      }
    }
    .btn {
      margin: 0 auto;
      width: 50%;
    }
  }
}
</style>