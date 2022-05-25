<template>
  <!-- 这个是头部组件 -->
  <App-Header/>
  <!-- 频道组件 -->
  <home-channel/>
  <!--轮播组件  -->
  <home-swipe/>
</template>
<script setup lang="ts">
// vue3.2 特性，可以不用注册
import AppHeader from '@/components/app-header.vue';
import HomeChannel from "@/views/Home/components/home-channel.vue";
import HomeSwipe from "@/views/Home/components/home-swipe.vue";
</script>
