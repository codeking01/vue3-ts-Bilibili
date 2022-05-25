<template>
  <!--  HTTP Referer是header的一部分，当浏览器向web服务器发送请求的时候，一般会带上Referer，告诉服务器该网页是从哪个页面链接过来的，服务器因此可以获得一些信息用于处理。-->
  <meta name="referrer" content="no-referrer">
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

<style lang="less" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;

  img {
    width: 100%;
    Height: 100%
  }
}
</style>
