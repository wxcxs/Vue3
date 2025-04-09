import axios from 'axios'
import { useUserStore } from '@/stores'
import { ElMessage } from 'element-plus/es/locale'
import router from '@/router'
const baseURL = 'http://big-event-vue-api-t.itheima.net'

const instance = axios.create({
  //TODO 1.基础地址,超时时间
  baseURL,
  timeout: 10000
})

// 添加请求拦截器
instance.interceptors.request.use(
  (config) => {
    //TODO 2.携带Token
    const userStore = useUserStore()
    if (userStore.token) {
      config.headers.Authorization = userStore.token
    }
    return config
  },
  (err) => {
    // 对请求错误做些什么
    return Promise.reject(err)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  (res) => {
    //TODO 3.处理业务失败
    //TODO 4.摘取核心数据
    if (res.data.code === 0) {
      return res
    }
    ElMessage.error(res.data.message || '服务异常')

    return Promise.reject(res.data)
  },
  (err) => {
    // TODO 5.处理401错误
    //401 权限不足 或 token 过期
    if (err.response?.status === 401) {
      router.push('/login')
    }
    //错误默认情况
    ElMessage.error(err.response.data.message || '服务异常')
    return Promise.reject(err)
  }
)

export default instance
export { baseURL }
