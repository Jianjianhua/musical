<template>
  <div class="product-list">
    <Header>
      <div slot="center" class="center">
        <input type="text" v-model="keyword" >
      </div>
      <div slot="right" class="right">
        <router-link to="/cart">
          <i class="icon icon-white-cart"></i>
        </router-link>
      </div>
    </Header>
    <yd-tab v-model="tab2"  :prevent-default="false" :item-click="itemClick">
        <yd-tab-panel v-for="(item,index) in items" 
        :key="index"
        :label="item.label" 
        :active="curstatus===item.status">
            <div class="goods">
           <div class="product" v-for="(product,index) in updatedProducts"
          :key="index">
            <div class="pic">
              <router-link :to="`/product/${product.id}`">
                <img :src="product.pic" />
              </router-link>
            </div>
            <div class="title">{{product.title}}</div>
            <div class="price">￥{{product.price}}</div>
            <div class="end">
              <div class="freight">快递：{{product.freight}}</div>
              <div class="sales">月销：{{product.sales }}</div>
            </div>  
          </div>
         </div>
        </yd-tab-panel>
    </yd-tab>
  </div>
</template>

<script>
import { orderBy } from 'lodash';

export default {
  name: "List",
  created() {
    this.keyword = this.$route.query.keyword;
  },
  data() {
    return {
      keyword: "",
      curstatus: 0,
      tab2: 0,
      items: [
        { label: "全部", status: 0 },
        { label: "销量", status: 1 , LowToHeight: false },
        { label: "价格∨", status: 2, LowToHeight: false },
        { label: "进口", status: 3 },
        { label: "筛选", status: 4 }
      ],
      products:[
        {
          id:1,
          pic:require('../assets/img/product/1.jpg'),
          title:'珠江钢琴三角琴GP-148...',
          price:29440,
          freight:10,
          sales:159
        },
        {
          id:2,
          pic:require('../assets/img/product/2.jpg'),
          title:'YAMAHA雅马哈立式钢琴...',
          price:19800,
          freight:10,
          sales:357
        },
        {
          id:3,
          pic:require('../assets/img/product/3.jpg'),
          title:'珠江钢琴德国工艺c2s立式...',
          price:17900,
          freight:10,
          sales:586
        },
        {
          id:4,
          pic:require('../assets/img/product/4.jpg'),
          title:'里特米勒立式钢琴J1-U...',
          price:22800,
          freight:10,
          sales:37
        },
      ],
      updatedProducts: []
    };
  },
  methods: {
    itemClick(key) {
      this.$dialog.loading.open("数据加载中");
      this.items.forEach((item)=> {
        if (item.status == key && item.hasOwnProperty("LowToHeight")) {
          item.LowToHeight = !item.LowToHeight;
        }
      });
      switch (key) {
        case 0:
          this.updatedProducts = this.products;
          break;
        case 1:
          this.items.forEach(item => {
            if(item.status===key){
              let sort;
            sort=item.LowToHeight ? ['asc'] : ['desc']
            this.updatedProducts = orderBy(this.products, ["sales"], sort);
            }
          });
          break;
        case 2:
          this.items.forEach(item=>{
            if(item.status===key){
              let sort;
              sort = item.LowToHeight ? ['asc'] : ['desc']
              this.updatedProducts = orderBy(this.products,['price'],sort)
            }
          })
        break;
          default:
          break;
      }
        this.tab2 = key;
        this.$dialog.loading.close();
    }
  },
 

  mounted() {
    this.updatedProducts = this.products;
  }
};
</script>

<style>
</style>
