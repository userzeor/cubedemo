/*
 * @Descripttion:
 * @version: 1.0
 * @Author: userzero
 * @Date: 2019-07-29 15:17:41
 * @LastEditors: userzero
 * @LastEditTime: 2019-07-29 16:53:34
 */
/**
 * meta 可配置参数
 * @param {boolean} icon 页面icon
 * @param {boolean} keepAlive 是否缓存页面
 * @param {string} title 页面标题
 */
export default [
  {
    path: '/',
    redirect: '/tabnews'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue'),
    meta: {
      icon: '',
      keepAlive: true,
      title: 'login'
    }
  },
  {
    path: '/tabnews',
    name: 'tabnews',
    component: () => import('@/views/tabnews/tabnews.vue'),
    meta: {
      icon: '',
      keepAlive: true,
      title: 'tabnews'
    }
  }
]
