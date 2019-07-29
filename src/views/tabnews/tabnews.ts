/*
 * @Descripttion:
 * @version: 1.0
 * @Author: userzero
 * @Date: 2019-07-29 15:45:54
 * @LastEditors: userzero
 * @LastEditTime: 2019-07-29 16:52:09
 */
import { Component, Vue } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'
import { TabnewsData } from '@/types/views/tabnews.interface'
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {
  // Getter
  // @Getter tabnews.author

  // Action
  // @Action GET_DATA_ASYN

  // data
  TabnewsData = {
    pageName: 'tabnews'
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
