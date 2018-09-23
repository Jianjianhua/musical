<template>
  <div class="order">
    <Header title="我的订单">
      <div slot="right">
        <i class="icon icon-white-del"></i>
      </div>
    </Header>
    <yd-tab v-model="tab2"  :prevent-default="false" :item-click="itemClick">
        <yd-tab-panel v-for="(item,index) in items" 
        :key="index"
        :label="item.label" 
        :active="curstatus===item.status">
         <div class="product" v-for="(productItem,index) in products"
          :key="index" v-if="productItem.status===item.status">
            <div class="detail">
              <div class="pic">
                <img v-lazy="productItem.pic" alt="">
              </div>
              <div class="detail-content">
                <h4>{{productItem.state}}</h4>
                <p>颜色分类：{{ productItem.color }}</p>
                <p>数量：{{ productItem.account }}</p>
                <p class="price">￥{{ productItem.price }}</p>
              </div>
            </div>
            <div class="total-price">
              合计：{{productItem.price * productItem.account}}(含运费:00)
            </div>
            <div class="control-btn">
              <yd-button type="danger">取消订单</yd-button>
              <yd-button type="warning">朋友代付</yd-button>
              <yd-button type="primary">付款</yd-button>
            </div>
        </div>
        </yd-tab-panel>
    </yd-tab>
  </div>
</template>

<script>
export default {
  name:'Order',
  mounted() {
    this.curstatus = parseInt(this.$route.query.status);
  },
  data() {
    return {
      curstatus: 0,
      tab2: 0,
      items: [
        { label: "待付款", status: 0 },
        { label: "待发货", status: 1 },
        { label: "待收货", status: 2 },
        { label: "待评价", status: 3 }
      ],
      products: [
        {
          status: 0,
          id: 1,
          pic: require("../assets/img/order/product1.jpg"),
          state: "麦尔MEINL中东手鼓中东鼓HE-215 纯铜手工刻制花纹7寸非洲鼓",
          color: "HE-114铝制雕花",
          account: 1,
          price: 1640
        },
        {
          status: 1,
          id: 2,
          pic: require("../assets/img/order/product1.jpg"),
          state: "麦尔MEINL中东手鼓中东鼓HE-215 纯铜手工刻制花纹7寸非洲鼓",
          color: "HE-114铝制雕花",
          account: 2,
          price: 1640
        }
      ]
    };
  },
  computed:{
   
  },
  methods: {
    itemClick(key) {
      this.$dialog.loading.open("数据加载中");
      setTimeout(() => {
        this.tab2 = key;
        this.$dialog.loading.close();
      }, 1000);
    }
  }
};
</script>

<style>
</style>
