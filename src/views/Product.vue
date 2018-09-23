<template>
  <div class="product-detail">
    <div class="banner">
      <div class="control-icon">
        <div class="icon-item">
          <i class="icon icon-arrow-left" @click="$router.back()"></i>
        </div>
        <div class="link">
          <div class="icon-item">
            <router-link to="/share">
            <i class="icon icon-share"></i>
          </router-link>
          </div>
        <div class="icon-item">
            <router-link to="/cart">
            <i class="icon icon-white-cart"></i>
            </router-link>
            <div class="cartLength">{{cartsLength}}</div>
        </div>
        </div>
      </div>
      <yd-slider>
        <yd-slider-item v-for='(banner,index) in productDetails.banners' :key="index" >
          <img :src='banner' alt="">
        </yd-slider-item>
      </yd-slider>
    </div>
    <div class="detail">
      <div class="price">￥{{productDetails.price}}</div>
      <div class="oldPrice">￥{{productDetails.oldPrice}}</div>
      <div class="title">{{productDetails.title}}</div>
      <div class="detail-footer">
        <div class="postage">快递：{{productDetails.postage}}</div>
        <div class="sales">月销：{{productDetails.sales}}</div>
      </div>
    </div>
    <div class="service">
      <yd-cell-group>
        <yd-cell-item arrow type="link" href="#">
            <span slot="left"><span class="left-text">服务：</span>7天无理由退款 · 正品保证 · 运费险</span>
        </yd-cell-item>
        <yd-cell-item arrow type="link" href="#">
            <span slot="left"><span class="left-text">参数：</span>价格区间 品牌...</span>
        </yd-cell-item>
      </yd-cell-group>
    </div>
    <div class="type">
      <yd-cell-group>
        <yd-cell-item arrow type="link" href="#">
          <span slot="left">配送至：广东省广州市天河区</span>
      </yd-cell-item>
      <yd-cell-item arrow>
          <span slot="left" @click="show=!show" >选择颜色分类</span>
      </yd-cell-item>
      </yd-cell-group>

      <yd-popup v-model="show">
        <yd-cell-group title="颜色选择">
          <yd-cell-item type="radio" v-for="(item,index) in productDetails.colors" :key="index">
            <span slot="left">{{item}}</span>
            <input slot="right" type="radio" :value="item" v-model="choosecolor" />
          </yd-cell-item>
          <yd-cell-item>
            <span slot="left">你选择的颜色是：</span>
            <span slot="right">{{choosecolor}}</span>
          </yd-cell-item>
        </yd-cell-group>
      </yd-popup>
    </div>
    <div class="comments">
      <h2>商品评价({{productDetails.comments.length}})</h2>
      <div class="user-comments" v-for="(item,index) in productDetails.comments" :key="index">
          <div class="info">
            <div class="avator"><img :src="item.userinfo.avatar" alt=""></div>
            <span>{{item.userinfo.username}}</span>
          </div>
          <div class="main">{{item.content}}</div>
          <div class="color">颜色分类：{{item.color}}</div>
      </div>
      <div class="watch"><router-link to="/">查看全部评价</router-link></div>
    </div>
    <div class="pic-detail">
      <h3>图片详情</h3>
      <div class="Pics" v-for="(picItem,index) in productDetails.pics" :key="index"> 
        <img v-lazy="picItem" alt="">
      </div>
    </div>
    <div class="products-bottom">
      <router-link to="/customer">
        <i class="icon icon-kefu"></i>
        <span>客服</span>
      </router-link>
      <router-link to="/">
        <i class="icon icon-star"></i>
        <span>收藏</span>
      </router-link>
     <div class="bottom-btn">
        <yd-button @click.native="addCart" class="add-cart" shape="square" bgcolor="#fff" color="#369eee" type="hollow">加入购物车</yd-button>
        <yd-button class="buy" bgcolor="#369eee" color="#fff" type="hollow">立即购买</yd-button>
     </div>
    </div>
  </div>
</template>

<script>
import{ mapGetters, mapState, mapActions } from 'vuex'
export default {
  name: "Product",
  computed:{
    ...mapGetters(['cartsLength'])
  },
  data() {
    return {
      show:false,
      choosecolor:'白色',
      product_id:this.$route.params.id,
      productDetails: {
        banners: [
            require("../assets/img/product/product1.jpg"),
            require("../assets/img/product/product1.jpg"),
            require("../assets/img/product/product1.jpg"),
            require("../assets/img/product/product1.jpg"),
            require("../assets/img/product/product1.jpg")
        ],
        colors:['红色','黑色','白色'],
        price: 29440,
        oldPrice: 39000,
        title: "珠江钢琴三角钢琴平台琴GP 148 黑白两色演奏实木三角琴",
        postage: 0.0,
        sales: 159,
        comments:[
          {
            userinfo:{
              id:1,
              username:'不是好人',
              avatar:require('../assets/img/user-center/avatar.png')
            },
            content:'乐器收到了，非常好非常好非常好非常好非常好非常好非常好非非常好常好非常好非常好非常好非常好非常好',
            color:'黑色'
          }
        ],
        pics:[
          require('../assets/img/product/product2.jpg'),
          require('../assets/img/product/product3.jpg')
        ]
      },
    };
  },
  methods:{
    ...mapActions(['addCarts']),
    addCart(){
      const result = this.addCarts({
        id:this.product_id,
        title:this.productDetails.title,
        price:this.productDetails.price,
        checked:false,
        quantity:1,
        pic:this.productDetails.banners[0]
      })
      if(result){
        this.$dialog.toast({mes:'添加购物车成功',timeout:1000})
      }
    }
  }
};
</script>

<style>
</style>
