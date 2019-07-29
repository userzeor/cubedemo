/*
 * @Descripttion:
 * @version: 1.0
 * @Author: userzero
 * @Date: 2019-07-29 10:58:52
 * @LastEditors: userzero
 * @LastEditTime: 2019-07-29 16:30:57
 */
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
declare module 'vue/types/vue' {
  interface Vue {
    [key: string]: any
  }
}
