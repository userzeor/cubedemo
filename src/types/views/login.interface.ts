/*
 * @Descripttion:
 * @version: 1.0
 * @Author: userzero
 * @Date: 2019-07-29 14:58:04
 * @LastEditors: userzero
 * @LastEditTime: 2019-07-29 16:46:54
 */
// login.Data 参数类型
export interface LoginData {
  pageName: string
}

// VUEX login.State 参数类型
export interface LoginState {
  [key: string]: any
  data?: any
  login?: any
}

// GET_DATA_ASYN 接口参数类型
// export interface DataOptions {}
