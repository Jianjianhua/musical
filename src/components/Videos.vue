<template>
   <div class="video-content">
      <div class="caption">
        <i class="icon" :class="`icon-${icon}`"></i>
      </div>
      <div class="banner">
        <div class="mark" v-if="!showVideo">
          <h2>{{ title }}</h2>
          <div class="play-btn">
              <i @click="showVideo = !showVideo" class="icon icon-play"></i>
          </div>
        </div>
          <video v-if="showVideo" class="videos"  controls autoplay
          src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" 
          :poster="pic" 
          >
          </video>
          <img v-else :src="pic" alt="">
      </div>
      <div class="video-bottom">
        <div class="heart" @click="changeHeart(videoIndex)">
          <i v-if="!showHeart" class="icon icon-heart"></i>
          <i v-else class="icon icon-heart-active"></i>
          <span>{{heart}}</span>
        </div>
        <div class="comments">
          <i class="icon icon-comments"></i>
          <yd-badge class="badge" type="primary" bgcolor="#369eee">2</yd-badge>
          <span>{{comments}}</span>
        </div>
        <div class="share">
          <i class="icon icon-share"></i>
          <span>{{share}}</span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props:{
    icon:String,
    title:String,
    pic:String,
    heart:Number,
    comments:Number,
    share:Number,
    videoIndex: Number
  },
  data(){
    return {
      showVideo:false,
      showHeart:false,
    }
  },
  methods:{
    changeHeart(index){
      this.showHeart = !this.showHeart;
      // if(this.showHeart){
      //   this.heart++
      // }else{
      //   this.heart--
      // }
      this.$emit('changeHeart', {
        index: index,
        showHeart: this.showHeart
      });
    }
  }

}
</script>

<style>

</style>
