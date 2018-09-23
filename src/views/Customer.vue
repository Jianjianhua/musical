<template>
  <div class="customer">
    <Header title="在线客服">
      <div slot="right" class="right">
        <router-link to="/cart">
          <i class="icon icon-white-cart"></i>
        </router-link>
      </div>
    </Header>
    <div class="talk"> 
        <div class="time"><span>{{time}}</span></div>
      <div class="main">
        <div class="pic"><img :src="require('../assets/img/customer/1.jpg')" alt=""></div>
        <div class="dialog">亲，有什么可以帮到您？</div>
      </div>
    </div>
    <div class="send-product">
      <div class="goods-main">
        <div class="main-pic"><img :src="require('../assets/img/customer/2.jpg')" alt=""></div>
        <div class="container">
          <div class="title">珠江钢琴三角钢琴平台琴GP 148黑白两色演奏实木三角琴</div>
          <div class="price">￥29400</div>
        </div>
      </div>
      <div class="control-btn">
         <yd-button class="send-link" shape="square" bgcolor="#fff" color="#369eee" type="hollow">发送链接</yd-button>
        <yd-button class="buy" bgcolor="#369eee" color="#fff" type="hollow">去付款</yd-button>
      </div>
    </div>
    <div class="talk-bottom">
      <i class="icon icon-mic"></i>
      <input type="text" v-model="talk">
      <i class="icon icon-smile"></i>
      <i class="icon icon-add"></i>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name:'Customer',
  data(){
    return{
      time: moment().format('hh:mma'),
      talk:''
    }
  },
}
</script>

<style>

</style>
