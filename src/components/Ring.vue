<template>
  <div class="ring">
    <div class="user">
      <div class="avator">
        <img :src="avator" alt="">
      </div>
      <span>{{username}}</span>
      <div class="time">{{time}}</div>
    </div>
    <div class="comments">
      {{comments}}
    </div>
    <div class="pic">
      <img v-for="(item,index) in pics" :key="index" :src="item" alt="">
    </div>
    <div class="icons">
      <div class="eye">
        <i class="icon icon-eye"></i>
        <span>{{eye}}</span>
      </div>
      <div class="msg">
        <i class="icon icon-comments"></i>
        <span>{{msg}}</span>
      </div>
      <div class="heart" @click="changeHeart(groupIndex)">
        <i v-if="!show" class="icon icon-heart"></i>
        <i v-else class="icon icon-heart-active"></i>
        <span>{{heart}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    avator: String,
    username: String,
    time: String,
    comments: String,
    eye: Number,
    msg: Number,
    heart: Number,
    pics: Array,
    groupIndex: Number
  },
  name: "Ring",
  data() {
    return {
      show: false
    };
  },
  methods: {
    changeHeart(index) {
      this.show = !this.show;
      this.$emit("changeHeart", {
        show: this.show,
        index: index
      });
    }
  }
};
</script>

