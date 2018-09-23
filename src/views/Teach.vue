<template>
  <div class="teach">
    <Header title="教材">
      <div class="right" slot="right">
        <router-link to="/search">
          <i class="icon icon-white-search"></i>
        </router-link>
      </div>
    </Header>
    <div class="teach-content">
      <div class="teach-item">
        <div class="caption">
            <i class="icon icon-keyboard"></i>
        </div>
        <ul class="book">
          <li>
            <router-link to="/teach/1">
                <img :src="require('../assets/img/teach/teach1.jpg')" alt="">
                <span>手风琴</span>
            </router-link>
          </li>
          <li>
            <router-link to="/teach/2">
                <img :src="require('../assets/img/teach/teach2.jpg')" alt="">
                <span>钢琴/大键琴</span>
            </router-link>
          </li>
          <li>
            <router-link to="/teach/3">
                <img :src="require('../assets/img/teach/teach3.jpg')" alt="">
                <span>电子琴</span>
            </router-link>
          </li>
          <li>
            <router-link to="/teach/4">
                <img :src="require('../assets/img/teach/teach4.jpg')" alt="">
                <span>管风琴</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="teach-item">
        <div class="caption">
          <i class="icon icon-blow"></i>
        </div>
        <ul class="book">
          <li>
            <router-link to="/teach/5">
                <img :src="require('../assets/img/teach/teach5.jpg')" alt="">
                <span>架子鼓</span>
            </router-link>
          </li>
          <li>
            <router-link to="/teach/6">
                <img :src="require('../assets/img/teach/teach6.jpg')" alt="">
                <span>手鼓</span>
            </router-link>
          </li>
          <li>
            <router-link to="/teach/7">
                <img :src="require('../assets/img/teach/teach7.jpg')" alt="">
                <span>排鼓</span>
            </router-link>
          </li>
          <li>
            <router-link to="/teach/6">
                <img :src="require('../assets/img/teach/teach6.jpg')" alt="">
                <span>手鼓</span>
            </router-link>
          </li>
          <li>
            <router-link to="/teach/7">
                <img :src="require('../assets/img/teach/teach7.jpg')" alt="">
                <span>排鼓</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
