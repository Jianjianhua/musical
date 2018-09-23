<template>
  <div class="product">
       <div class="item">
            <transition name="fade">
              <div class="mark" v-if="show">
              <div class="mark-btn">
                <yd-button  type="primary" bgcolor="#369eee" color="#fff">找相似</yd-button>
                <yd-button  class="mt" type="primary" bgcolor="#b8b8b8" color="#fff">不喜欢</yd-button>
              </div>
              <div @click="show = !show" class="close">&times;</div>
            </div>
            </transition>
            <router-link :to="`/product/${id}`">
              <div class="pic">
                <img v-lazy="pic" alt="">
              </div>
              <h3>{{ title }}</h3>
            </router-link>
            <div class="third-bottom">
                <div class="price">￥{{ price }}</div>
                <span>{{count}}人付款</span>
                <button @click.prevent="show = !show">
                  <i class="icon icon-point"></i>
                </button>
            </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    id:Number,
    title:String,
    count:Number,
    price:Number,
    pic:String,
  },
  data(){
    return {
      show:false
    }
  }
};
</script>

<style>
</style>


