<template>
  <div class="hot-list">
    <Header title="热门推荐">
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
           <div class="product" 
            v-for="(product,index) in products"
            :key="index" 
            v-if="product.status===item.status">
            <div class="pic">
              <img v-lazy="product.pic" alt="">
            </div>
            <div class="detail">
              <div class="title">{{product.title}}</div>
              <div class="price">￥{{product.price}}</div>
              <div class="oldPrice">抵扣前￥{{product.oldPrice}}</div>
              <div class="count">{{product.count}}人已付款</div>
              <yd-button @click.native="addCart(product.id)" class="buy" bgcolor="#369eee" color="#fff" type="hollow">购买</yd-button>
            </div>
         </div>
        </yd-tab-panel>
    </yd-tab>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name:'HotList',
  data(){
    return{
      curstatus: 0,
      tab2: 0,
      items: [
        { label: "精选", status: 0 },
        { label: "销量", status: 1 },
        { label: "人气", status: 2 },
      ],
      products:[
        {
          id:1,
          status:0,
          pic:require('../assets/img/hotList/1.jpg'),
          title:'DOVE鸽子DTB 260 250 220 36/34寸旅行单板民谣吉他',
          price:1280,
          oldPrice:1680,
          count:4235,
        },  {
          id:2,
          status:0,
          pic:require('../assets/img/hotList/2.jpg'),
          title:'YAMAHA雅马哈双排键电子琴ELB-2C/ELS-01C/ELS-02C日本进口elb-02',
          price:89700,
          oldPrice:90000,
          count:25,
        },  {
          id:3,
          status:0,
          pic:require('../assets/img/hotList/3.jpg'),
          title:'麦尔MEINL中东手鼓中东鼓HE-215 纯铜手工刻制花纹7寸非洲鼓',
          price:1640,
          oldPrice:1860,
          count:405,
        },  {
          id:4,
          status:0,
          pic:require('../assets/img/hotList/1.jpg'),
          title:'DOVE鸽子DTB 260 250 220 36/34寸旅行单板民谣吉他',
          price:1280,
          oldPrice:1680,
          count:4235,
        }
      ],
    }
  },
  methods:{
     itemClick(key) {
      this.$dialog.loading.open("数据加载中");
      setTimeout(() => {
        this.tab2 = key;
        this.$dialog.loading.close();
      }, 1000);
    },
    ...mapActions(['addCarts']),
    addCart(id){
      const index = this.products.findIndex(item=>item.id===id)
      const result = this.addCarts({
        id:this.products[index].id,
        pic:this.products[index].pic,
        price:this.products[index].price,
        title:this.products[index].title,
        check:false,
        quantity:1
      })
      if(result){
        console.log(result)
        this.$dialog.toast({mes:'添加购物车成功',timeout:1000})
      }
    }
  }
}
</script>

