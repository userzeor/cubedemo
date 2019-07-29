<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <Tab />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import tab from '@/components/TabComposite.vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Component({
  components: {
    HelloWorld
    // tab
  }
})
export default class Home extends Vue {}
</script>
