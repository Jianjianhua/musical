<template>
  <div class="user">
    <div class="user-header">
      <div class="caption">
        <i class="icon icon-message"></i>
        <router-link to="/user-setting"><i class="icon icon-setting"></i></router-link>
      </div>
      <div class="user-message">
        <img :src="user.avatar" alt="">
        <p>{{user.name}}</p>
        <span>LV : {{user.level}}</span>
        <span>积分 : {{user.ingetral}}</span>
      </div>
    </div>
    <div class="user-order">
       <yd-cell-item arrow type="link" href="/order">
            <span  slot="left">我的订单</span>
            <span slot="right">全部订单</span>
        </yd-cell-item>
        <ul class="order-list">
          <li v-for="(item,index) in lists" :key="index">
            <router-link :to="`/order?status=${item.status}`">
              <i class="icon" :class="`icon-${item.icon}`"></i>
              <span>{{item.text}}</span>
            </router-link>
          </li>
        </ul>
    </div>
    <div class="user-collect">
       <yd-cell-item arrow type="link" href="/user-collection">
            <span slot="left">我的收藏</span>
            <span slot="right">查看全部</span>
        </yd-cell-item>
        <ul class="product-list">
          <li v-for="(item,index) in products" :key="index">
            <router-link :to="`/product/${item.id}`">
                <div class="product-pic">
                  <img :src="item.pic" alt="">
                </div>
                <span>￥{{item.price}}</span>
            </router-link>
          </li>
        </ul>
    </div>
    <div class="coupon">
       <yd-cell-item arrow type="link" href="/coupon">
            <span slot="left">优惠劵</span>
            <span slot="right">全部优惠券</span>
        </yd-cell-item>
         <yd-cell-item arrow type="link" href="/coupon?status=0">
            <span class="coupon-text" slot="left">未使用优惠券（{{getUse}}）</span>
        </yd-cell-item>
         <yd-cell-item arrow type="link" href="/coupon?status=1">
            <span class="coupon-text" slot="left">已过期优惠券（{{getPast}}）</span>
        </yd-cell-item>
    </div>
    <div class="tools">
        <yd-cell-item  >
            <span slot="left">必备工具</span>
        </yd-cell-item>
      <ul class="tool">
        <li>
          <router-link to="/shipping-address">
            <i class="icon icon-pos"></i>
            <span>收货地址</span>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <i class="icon icon-history"></i>
            <span>足迹</span>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <i class="icon icon-gray-share"></i>
            <span>我的分享</span>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <i class="icon icon-doc"></i>
            <span>发票助手</span>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <i class="icon icon-lock"></i>
            <span>账号安全</span>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <i class="icon icon-feedback"></i>
            <span>意见反馈</span>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <i class="icon icon-about"></i>
            <span>关于我们</span>
          </router-link>
        </li>
      </ul>
    </div>
    <Tabbar/>
  </div>  
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      lists: [
        {
          status: 0,
          icon: "wait-pay",
          text: "待付款"
        },
        {
          status: 1,
          icon: "wait-send",
          text: "待发货"
        },
        {
          status: 2,
          icon: "receiving",
          text: "待收货"
        },
        {
          status: 3,
          icon: "wait-comment",
          text: "待评价"
        },
        {
          status: 4,
          icon: "refund",
          text: "退款/售后"
        }
      ],
      products: [
        {
          id: 1,
          pic: require("../assets/img/user-center/collect1.jpg"),
          price: 1640
        },
        {
          id: 2,
          pic: require("../assets/img/user-center/collect2.jpg"),
          price: 684
        },
        {
          id: 3,
          pic: require("../assets/img/user-center/collect3.jpg"),
          price: 3760
        },
        {
          id: 4,
          pic: require("../assets/img/user-center/collect4.jpg"),
          price: 369
        }
      ]
    };
  },
  computed: {
    ...mapState({
      user: state => state.userInfo,
      coupon: state => state.coupons
    }),
    getUse() {
      return this.coupon.filter(item => item.status == 0).length;
    },
    getPast() {
      return this.coupon.filter(item => item.status == 1).length;
    }
  },

};
</script>

