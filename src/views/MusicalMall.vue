<template>
  <div class="musical-mall">
    <Header title="乐器商城"></Header>
    <div class="background"></div>
    <div class="contain">
      <div class="base">
        <div class="mainPic">
          <img :src="require('../assets/img/musical-mall/base1.png')" alt="">
        </div>
        <div class="base-detail">
          <h2>弹拔弦鸣乐器</h2>
          <p>演奏出特色旋律来，因此电贝司在合奏中不仅仅作为低音伴奏乐器而出现，它往往奏出令人难忘的乐句，音色优美、旋律....</p>
          <ul class="base-list">
            <li v-for="(item,index) in lists" :key="index">
              <router-link :to="`/product/:${item.id}`"> 
                <div class="base-pic">
                  <img :src="item.pic" alt="">
                </div>
                <p>￥{{item.price}}</p>
              </router-link>
            </li>
          </ul>
        </div>

      </div>
    </div>
    <ul class="mall-product">
      <li v-for="(item,index) in products" :key="index">
        <div class="mall-pic">
          <img :src="item.pic" alt="">
        </div>
         <div class="explain">
          <h2>{{item.title}}</h2>
          <p>{{item.text}}</p>
          <div class="explain-bottom">
            <div class="price">￥{{item.price}}</div>
            <div class="quantity">{{item.quantity}}已买</div>
            <router-link :to="`/product/:${item.id}`">
              去看看>
            </router-link>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'MusicalMall',
  data(){
    return{
      lists:[
        {
          id:1,
          pic:require('../assets/img/musical-mall/base2.jpg'),
          price:1900
        },
        {
          id:2,
          pic:require('../assets/img/musical-mall/base3.jpg'),
          price:860
        },
        {
          id:3,
          pic:require('../assets/img/musical-mall/base4.jpg'),
          price:3300
        }

      ],
      products:[
        {
          id:5,
          title:'Henlucky HWG-885萨克斯',
          text:'Henlucky HWG-885萨克斯经过专业老师专业校音器校音，音准、音色、机械性能均符合标准，使用于专业考试以及其他形式的演奏。管体全身精美，纯手工雕花，图案鲜美生动，纯手工···',
          price:1835,
          quantity:42,
          pic:require('../assets/img/musical-mall/sks.jpg')
        },
          {
          id:5,
          title:'Henlucky HWG-885萨克斯',
          text:'Henlucky HWG-885萨克斯经过专业老师专业校音器校音，音准、音色、机械性能均符合标准，使用于专业考试以及其他形式的演奏。管体全身精美，纯手工雕花，图案鲜美生动，纯手工···',
          price:1835,
          quantity:42,
          pic:require('../assets/img/musical-mall/sks.jpg')

        }
      ]
    }
  }
};
</script>

<style>
</style>
