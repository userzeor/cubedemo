/*
 * @Descripttion:
 * @version: 1.0
 * @Author: userzero
 * @Date: 2019-07-29 15:45:54
 * @LastEditors: userzero
 * @LastEditTime: 2019-07-29 16:44:47
 */
import { TabnewsState } from '@/types/views/tabnews.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as TabnewsApi from '@/api/tabnews'

const state: TabnewsState = {
  tabnews: {
    author: 'userzero'
  }
}

// 强制使用getter获取state
const getters: GetterTree<TabnewsState, any> = {
  author: (state: TabnewsState) => state.tabnews.author
}

// 更改state
const mutations: MutationTree<TabnewsState> = {
  // 更新state都用该方法
  UPDATE_STATE(state: TabnewsState, data: TabnewsState) {
    for (const key in data) {
      if (!data.hasOwnProperty(key)) {
        return
      }
      state[key] = data[key]
    }
  }
}

const actions: ActionTree<TabnewsState, any> = {
  UPDATE_STATE_ASYN({ commit, state: TabnewsState }, data: TabnewsState) {
    commit('UPDATE_STATE', data)
  }
  // GET_DATA_ASYN({ commit, state: LoginState }) {
  //   Tabnews.getData()
  // }
}

export default {
  state,
  getters,
  mutations,
  actions
}
