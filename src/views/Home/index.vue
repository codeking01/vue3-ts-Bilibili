<template>
  <!-- <h1>Bilibili 主页</h1>
  <router-link to="/video/1">点我去视频详情页</router-link> -->
  <app-header/>
  <!--引入频道组件  -->
  <home-channel/>
  <!--引入轮播组件  -->
  <home-swipe/>
  <!-- 引入视频组件 -->
  <HomeVideoList/>
</template>

<script setup lang="ts">
// vue3.2 特性，可以不用注册
import HomeSwipe from "@/views/Home/components/home-swipe.vue";
import HomeChannel from "@/views/Home/components/home-channel.vue";
import AppHeader from "@/components/app-header.vue";
import HomeVideoList from "@/views/Home/components/home-video-list.vue";
</script>
