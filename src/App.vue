<script setup>
//在Vue3 composition API中
//1.获取路由对象 router useRouter
//const router = useRouter
//2.获取路由参数
//const route = useRoute()
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '@/stores'

const router = useRouter()
const route = useRoute()

const goSetUp = () => {
  router.push('/list')
  console.log(route, router)
}

const userStore = useUserStore()
</script>

<template>
  <hr />
  <router-view></router-view>
  <hr />
  <hr />
  <hr />
  <div>我是App</div>
  <test-demo></test-demo>
  <el-button @click="$router.push('/home')">跳首页</el-button>
  <el-button @click="goSetUp">跳列表页</el-button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>

  <p>{{ userStore.token }}</p>
  <el-button @click="userStore.setToken('bear wekwrewjrooewjoiewjo')"
    >登录</el-button
  >
  <el-button @click="userStore.removeToken('')">退出</el-button>
</template>

<style scoped></style>
