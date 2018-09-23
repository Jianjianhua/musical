<template>
  <div class="collection">
    <Header title="我的收藏">
      <div slot="right" class="right">
        <i class="icon icon-white-del"></i>
      </div>
    </Header>
     <yd-tab v-model="tab2"  :prevent-default="false" :item-click="itemClick">
        <yd-tab-panel v-for="(item,index) in items" 
        :key="index"
        :label="item.label" 
        :active="curstatus===item.status">
         <div class="goods">
           <div class="product" v-for="(product,index) in products"
          :key="index" v-if="product.status===item.status">
            <div class="pic">
              <router-link :to="`/product/${product.id}`">
                <img v-lazy="product.pic" alt="">
              </router-link>
            </div>
            <div class="title">{{product.title}}</div>
            <div class="end">
              <div class="price">￥{{product.price}}</div>
              <yd-button @click.native="addCart(product.id)" 
              class="add-cart" 
              shape="square" 
              bgcolor="#fff" 
              color="#369eee" 
              type="hollow">加入购物车</yd-button>
            </div>  
          </div>
         </div>
        </yd-tab-panel>
    </yd-tab>
  </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
  name:'UserCollection',
  mounted(){
    this.curstatus=parseInt(this.$route.query.status)
  },
  data(){
    return{
      curstatus: 0,
      tab2: 0,
      items: [
        { label: "全部", status: 0 },
        { label: "降价", status: 1 },
        { label: "失效", status: 2 },
      ],
      products:[
        {
          id:1,
          status:0,
          pic:require('../assets/img/collection/1.jpg'),
          title:'珠江钢琴三角琴GP-148...',
          price:29440,
        },
        {
          id:2,
          status:0,
          pic:require('../assets/img/collection/2.jpg'),
          title:'YAMAHA雅马哈立式钢琴...',
          price:19800,
        },
        {
          id:3,
          status:0,
          pic:require('../assets/img/collection/3.jpg'),
          title:'星海琵琶乐器 初学者8911-1...',
          price:838,
        },
        {
          id:4,
          status:0,
          pic:require('../assets/img/collection/4.jpg'),
          title:'日芬 Fender Japan 电贝司...',
          price:6500,
        },
         {
          id:5,
          status:1,
          pic:require('../assets/img/collection/4.jpg'),
          title:'日芬 Fender Japan 电贝司...',
          price:6500,
        }
      ]
    }
  },
   methods: {
     ...mapActions(['addCarts']),
    itemClick(key) {
      this.$dialog.loading.open("数据加载中");
      setTimeout(() => {
        this.tab2 = key;
        this.$dialog.loading.close();
      }, 1000);
    },
    addCart(id){
      const index = this.products.findIndex(item=>item.id===id)
      const result = this.addCarts({
        id:this.products[index].id,
        title:this.products[index].title,
        price:this.products[index].price,
        pic:this.products[index].pic,
        quantity:1,
        check:false
      })
      if(result){
        this.$dialog.toast({mes:'添加购物车成功',timeout:1000})
      }
    }
  }
}
</script>


