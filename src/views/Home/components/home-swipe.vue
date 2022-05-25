<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="item in list" :key="item.imgSrc">
      <!--      todo 图片引用失败-->
      <img :src="item.imgSrc"/>
    </van-swipe-item>
  </van-swipe>
</template>

<script setup lang="ts">
import axios from "axios";
import {ref} from "vue";

//写接口 定义数据
interface ISwiper {
  imgSrc: string,
  link: string,
}

const list = ref<ISwiper[]>([])

//轮播图组件
axios({
  url: '/swiperList',
  method: 'get',
}).then(res => {
  console.log('轮播图数据:', res.data.result);
  list.value = res.data.result;
})
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
