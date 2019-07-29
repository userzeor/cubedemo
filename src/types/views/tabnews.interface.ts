/*
 * @Descripttion:
 * @version: 1.0
 * @Author: userzero
 * @Date: 2019-07-29 15:45:54
 * @LastEditors: userzero
 * @LastEditTime: 2019-07-29 16:47:18
 */
// tabnews.Data 参数类型
export interface TabnewsData {
  pageName: string
}

// VUEX tabnews.State 参数类型
export interface TabnewsState {
  [key: string]: any
  data?: any
  tabnews?: any
}

// GET_DATA_ASYN 接口参数类型
// export interface DataOptions {}
