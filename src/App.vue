<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: userzero
 * @Date: 2019-07-29 10:58:52
 * @LastEditors: userzero
 * @LastEditTime: 2019-07-29 17:02:37
 -->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="styl">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
