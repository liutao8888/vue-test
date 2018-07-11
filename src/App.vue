<template>
  <div id="app">
    <ul>
      <router-link to="/home">首页</router-link>
      <router-link to="/news">新闻</router-link>
    </ul>
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    <router-view></router-view> 
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
