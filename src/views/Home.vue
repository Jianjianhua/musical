<template>
  <div class="home">
    <!-- 头部 -->
    <Header class="header">
      <div class="left" slot="left">
        <router-link to="/">
          <i class="icon icon-scan"></i>
          <span>扫一扫</span>
        </router-link>
      </div>
      <div class="center" slot="center">
        <router-link to="/search">
          <i class="icon icon-search"></i>
        <input type="text" placeholder="雅马哈吉他">
        </router-link>
      </div>
      <div class="right" slot="right">
        <router-link to="/">
          <i class="icon icon-message"></i>
          <span>消息</span>
        </router-link>
      </div>
    </Header>

    <!-- 轮播图 -->
     <yd-slider autoplay="3000">
        <yd-slider-item >
          <img :src='require("../assets/img/home/banner1.jpg")' alt="">
        </yd-slider-item>
        <yd-slider-item >
          <img :src='require("../assets/img/home/banner2.jpg")' alt="">
        </yd-slider-item>
        <yd-slider-item >
          <img :src='require("../assets/img/home/banner3.jpg")' alt="">
        </yd-slider-item>
        <yd-slider-item >
          <img :src='require("../assets/img/home/banner3.jpg")' alt="">
        </yd-slider-item>
        <yd-slider-item >
          <img :src='require("../assets/img/home/banner3.jpg")' alt="">
        </yd-slider-item>
    </yd-slider>

    <!-- 中部导航 -->
    <nav class="nav">
      <router-link class="nav-item" to="/musical-mall">
         <i class="icon icon-musical-mall"></i>
         <span>乐器商城</span> 
      </router-link>
       <router-link class="nav-item" to="/">
         <i class="icon icon-huodong"></i>
         <span>活动</span> 
      </router-link>
       <router-link class="nav-item" to="/video">
         <i class="icon icon-video"></i>
         <span>视频</span> 
      </router-link>
       <router-link class="nav-item" to="/teach">
         <i class="icon icon-teach"></i>
         <span>教材</span> 
      </router-link>
    </nav>
    <!-- 第一层 -->
    <div class="first-floor">
      <div class="first-box br">
        <h3>限时抢购
        <countdown :time="35* 60 * 1000">
          <template slot-scope="props">{{ props.hours }}:{{ props.minutes }}:{{ props.seconds }}</template>
        </countdown>
        </h3>
        <p>手快有 手慢无喔</p>
        <div class="pic">
          <div class="pic-box">
            <img v-lazy="require('../assets/img/home/palen1-01.jpg')" alt="">
          </div>
          <div class="pic-box">
            <img v-lazy="require('../assets/img/home/palen1-02.jpg')" alt="">
          </div>
        </div>
      </div>
      <div class="first-box">
        <h3 style="color:#369eee">折扣专场
        </h3>
        <p>领券享折上折</p>
        <div class="pic">
          <div class="pic-box">
            <img v-lazy="require('../assets/img/home/palen1-03.jpg')" alt="">
          </div>
          <div class="pic-box">
            <img v-lazy="require('../assets/img/home/palen1-04.jpg')" alt="">
          </div>
        </div>
      </div>
    </div>
    <!-- 第二层 -->
    <div class="second-floor bt">
      <div class="second-box br">
        <h3>乐配</h3>
        <p>乐器的配件全都有</p>
        <div class="pic">
          <img v-lazy="require('../assets/img/home/palen1-05.jpg')" alt="">
        </div>
      </div>
      <div class="second-box br">
        <h3>乐配</h3>
        <p>乐器的配件全都有</p>
        <div class="pic">
          <img v-lazy="require('../assets/img/home/palen1-06.jpg')" alt="">
        </div>
      </div>
      <div class="second-box">
        <h3>乐配</h3>
        <p>乐器的配件全都有</p>
        <div class="pic">
          <img v-lazy="require('../assets/img/home/palen1-07.jpg')" alt="">
        </div>
      </div>
    </div>
    <!-- 热门推荐 -->
    <div class="hot">
      <div class="title">
        <i class="icon icon-hot"></i>
        <div class="more">
          <router-link to="/hot-list">更多></router-link>
        </div>
      </div>
      <div class="hot-main">
        <div class="hot-box bt br">
          <router-link to="/hot-list">
            <img v-lazy="require('../assets/img/home/second1.jpg')" alt="">
          </router-link>
        </div>
        <div class="hot-box bt">
          <router-link to="/hot-list">
            <img v-lazy="require('../assets/img/home/second2.jpg')" alt="">
          </router-link>
        </div>
        <div class="hot-box bt br">
         <router-link to="/hot-list">
           <img v-lazy="require('../assets/img/home/second3.jpg')" alt="">
         </router-link>
        </div>
        <div class="hot-box bt">
          <router-link to="/hot-list">
            <img v-lazy="require('../assets/img/home/second4.jpg')" alt="">
          </router-link>
        </div>
      </div>
    </div>
    <!-- 第三层 -->
    <div class="third">
      <div class="caption">
        <i class="icon icon-like"></i>
      </div>
      <div class="third-box">
          <Mark v-for="(item,index) in products" 
          :key="index" 
          :title="item.title" 
          :price="item.price" 
          :pic="item.pic" 
          :count="item.count"  
          :id=item.id
          />
      </div>
    </div>
    <!-- 底部 -->
    <Tabbar></Tabbar>

  </div>
</template>

<script>
import Mark from '../components/Mark'
export default {
  name: "Home",
  components: {
    Mark
  },

  data() {
    return {
      show: false,
      products: [
        {
          id: 1,
          pic: require("../assets/img/home/third1.png"),
          title: "星海琵琶乐器 初学者硬木材质专业演奏8911-1...",
          price: 838,
          count: 95
        },
        {
          id: 2,
          pic: require("../assets/img/home/third1.png"),
          title: "润扬古筝 百凤朝阳专业演奏古筝 初学者入门考级...",
          price: 2698,
          count: 1089
        },
        {
          id: 3,
          pic: require("../assets/img/home/third3.png"),
          title: "SPYKER英国世爵 专业演奏用机械钢琴 三角钢琴...",
          price: 59800,
          count: 58
        },
        {
          id: 4,
          pic: require("../assets/img/home/third4.png"),
          title: "民族弹拔乐器北京星海8621专业菱形402扬琴...",
          price: 2667,
          count: 386
        }
      ]
    };
  }
};
</script>
