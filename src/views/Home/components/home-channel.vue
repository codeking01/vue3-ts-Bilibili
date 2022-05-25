<template>
  <van-tabs v-model:active="active">
    <van-tab v-for="item in list" :key="item.id" :title="item.text"></van-tab>
  </van-tabs>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import axios from 'axios';
//存储数据的list 频道数据 ,可以用泛型m,做数组校验(会有提示)
const list = ref<INaItem[]>([])

//TypeScript的接口 用来约束标记一些数据格式
interface INaItem {
  id: string,
  text: string,
}

const active = ref(0);
axios({
  url: '/navList',
  method: 'get'
}).then(res => {
  console.log(res.data)

  list.value = res.data.result
})

</script>
