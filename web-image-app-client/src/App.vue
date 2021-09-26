<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import Scroll from './components/Scroll.vue'
import Upload from './components/Upload.vue'
import ToolBar from './components/ToolBar.vue'

</script>

<template>
  <el-container class="container">
    <el-header class="header"><ToolBar/></el-header>
    <el-main class="main"><Scroll /></el-main>
  </el-container>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />-->
  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.container{
  display: flex;
  justify-content: center;
}
.header{
  display: flex;
  justify-content: center;
}
.main{
  padding-top: 10px;
}
</style>
