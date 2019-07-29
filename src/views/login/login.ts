/*
 * @Descripttion:
 * @version: 1.0
 * @Author: userzero
 * @Date: 2019-07-29 15:12:49
 * @LastEditors: userzero
 * @LastEditTime: 2019-07-29 16:50:40
 */
import { Component, Vue } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'
import { LoginData } from '@/types/views/login.interface'
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {
  // Getter
  // @Getter login.author

  // Action
  // @Action GET_DATA_ASYN

  // data
  LoginData = {
    pageName: 'login'
  }

  created() {
    //
  }

  activated() {
    //
  }

  mounted() {
    //
  }

  // 初始化函数
  init() {
    //
  }
}
