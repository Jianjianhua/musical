<template>
  <div class="category">
    <Header class="category-header" title="分类">
      <div slot="left"></div>
      <div slot="right">
        <router-link to="/search">
        <i  class="icon icon-white-search"></i>
        </router-link>
      </div>
    </Header>
    <div class="category-main">
      <yd-scrolltab>
        <yd-scrolltab-panel v-for="(item,index) in cate"
          :key="index"
         :label="item.label">
          <div class="hots main-box">
            <div class="caption">
              <i class="icon icon-rmjx"></i>
            </div>
            <div class="products">
              <div class="product" v-for="(product,index) in item.sales" :key="index">
              <router-link to="/product">
                <div class="pic">
                  <img v-lazy="product.pic" alt="">
                </div>
                <span>{{product.text}}</span>  
              </router-link>
            </div>
            </div>
          </div>
          <div class="brand main-box">
            <div class="caption">
              <i class="icon icon-ppyq"></i>
            </div>
            <div class="products">
              <div class="product" v-for="(product,index) in item.sales" :key="index">
              <router-link :to="`/product/${product.id}`">
                <div class="pic">
                  <img v-lazy="product.pic" alt="">
                </div>
                <span>{{product.text}}</span>  
              </router-link>
            </div>
            </div>
          </div>
        </yd-scrolltab-panel>
    </yd-scrolltab>
    </div>
    <Tabbar/>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      cate: [
        {
          label: "为你推荐",
          sales: [
            {
              id: 1,
              pic: require("../assets/img/category/1.png"),
              text: "钢琴"
            },
            {
              id: 2,
              pic: require("../assets/img/category/2.png"),
              text: "架子鼓"
            },
            {
              id: 3,
              pic: require("../assets/img/category/3.png"),
              text: "电子琴"
            },
            {
              id: 4,
              pic: require("../assets/img/category/4.png"),
              text: "笛"
            },
            { id: 5, pic: require("../assets/img/category/5.png"), text: "筝" }
          ]
        },
        {
          label: "键盘乐器",
          sales: [
            {
              id: 1,
              pic: require("../assets/img/category/1.png"),
              text: "钢琴"
            },
            {
              id: 2,
              pic: require("../assets/img/category/2.png"),
              text: "架子鼓"
            },
            {
              id: 3,
              pic: require("../assets/img/category/3.png"),
              text: "电子琴"
            },
            { id: 4, pic: require("../assets/img/category/4.png"), text: "笛" },
            { id: 5, pic: require("../assets/img/category/5.png"), text: "筝" }
          ]
        },
        {
          label: "打击乐器",
          sales: [
            {
              id: 1,
              pic: require("../assets/img/category/1.png"),
              text: "钢琴"
            },
            {
              id: 2,
              pic: require("../assets/img/category/2.png"),
              text: "架子鼓"
            },
            {
              id: 3,
              pic: require("../assets/img/category/3.png"),
              text: "电子琴"
            },
            { id: 4, pic: require("../assets/img/category/4.png"), text: "笛" },
            { id: 5, pic: require("../assets/img/category/5.png"), text: "筝" }
          ]
        },
        {
          label: "弹拔乐器",
          sales: [
            {
              id: 1,
              pic: require("../assets/img/category/1.png"),
              text: "钢琴"
            },
            {
              id: 2,
              pic: require("../assets/img/category/2.png"),
              text: "架子鼓"
            },
            {
              id: 3,
              pic: require("../assets/img/category/3.png"),
              text: "电子琴"
            },
            { id: 4, pic: require("../assets/img/category/4.png"), text: "笛" },
            { id: 5, pic: require("../assets/img/category/5.png"), text: "筝" }
          ]
        },
        {
          label: "吹奏乐器",
          sales: [
            {
              id: 1,
              pic: require("../assets/img/category/1.png"),
              text: "钢琴"
            },
            {
              id: 2,
              pic: require("../assets/img/category/2.png"),
              text: "架子鼓"
            },
            {
              id: 3,
              pic: require("../assets/img/category/3.png"),
              text: "电子琴"
            },
            { id: 4, pic: require("../assets/img/category/4.png"), text: "笛" },
            { id: 5, pic: require("../assets/img/category/5.png"), text: "筝" }
          ]
        },
        {
          label: "拉弦乐器",
          sales: [
            {
              id: 1,
              pic: require("../assets/img/category/1.png"),
              text: "钢琴"
            },
            {
              id: 2,
              pic: require("../assets/img/category/2.png"),
              text: "架子鼓"
            },
            {
              id: 3,
              pic: require("../assets/img/category/3.png"),
              text: "电子琴"
            },
            { id: 4, pic: require("../assets/img/category/4.png"), text: "笛" },
            { id: 5, pic: require("../assets/img/category/5.png"), text: "筝" }
          ]
        },
        {
          label: "钢管乐器",
          sales: [
            {
              id: 1,
              pic: require("../assets/img/category/1.png"),
              text: "钢琴"
            },
            {
              id: 2,
              pic: require("../assets/img/category/2.png"),
              text: "架子鼓"
            },
            {
              id: 3,
              pic: require("../assets/img/category/3.png"),
              text: "电子琴"
            },
            { id: 4, pic: require("../assets/img/category/4.png"), text: "笛" },
            { id: 5, pic: require("../assets/img/category/5.png"), text: "筝" }
          ]
        },
        {
          label: "唇鸣类",
          sales: [
            {
              id: 1,
              pic: require("../assets/img/category/1.png"),
              text: "钢琴"
            },
            {
              id: 2,
              pic: require("../assets/img/category/2.png"),
              text: "架子鼓"
            },
            {
              id: 3,
              pic: require("../assets/img/category/3.png"),
              text: "电子琴"
            },
            { id: 4, pic: require("../assets/img/category/4.png"), text: "笛" },
            { id: 5, pic: require("../assets/img/category/5.png"), text: "筝" }
          ]
        },
        {
          label: "簧鸣类",
          sales: [
            {
              id: 1,
              pic: require("../assets/img/category/1.png"),
              text: "钢琴"
            },
            {
              id: 2,
              pic: require("../assets/img/category/2.png"),
              text: "架子鼓"
            },
            {
              id: 3,
              pic: require("../assets/img/category/3.png"),
              text: "电子琴"
            },
            { id: 4, pic: require("../assets/img/category/4.png"), text: "笛" },
            { id: 5, pic: require("../assets/img/category/5.png"), text: "筝" }
          ]
        },
        {
          label: "弓拉弦鸣",
          sales: [
            {
              id: 1,
              pic: require("../assets/img/category/1.png"),
              text: "钢琴"
            },
            {
              id: 2,
              pic: require("../assets/img/category/2.png"),
              text: "架子鼓"
            },
            {
              id: 3,
              pic: require("../assets/img/category/3.png"),
              text: "电子琴"
            },
            { id: 4, pic: require("../assets/img/category/4.png"), text: "笛" },
            { id: 5, pic: require("../assets/img/category/5.png"), text: "筝" }
          ]
        },
        {
          label: "弹拔弦鸣",
          sales: [
            {
              id: 1,
              pic: require("../assets/img/category/1.png"),
              text: "钢琴"
            },
            {
              id: 2,
              pic: require("../assets/img/category/2.png"),
              text: "架子鼓"
            },
            {
              id: 3,
              pic: require("../assets/img/category/3.png"),
              text: "电子琴"
            },
            { id: 4, pic: require("../assets/img/category/4.png"), text: "笛" },
            { id: 5, pic: require("../assets/img/category/5.png"), text: "筝" }
          ]
        }
      ]
    };
  }
};
</script>

