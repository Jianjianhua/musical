<template>
  <div class="cart">
    <Header title="购物车"></Header>
    <div class="cart-content" v-if="carts.length>0">
        <div class="choose-all">
            <yd-checkbox color="#369eee"  v-model="isCheckAll" shape="circle">全选</yd-checkbox>
        </div>
        <div class="cart-list" >
          <slip-del  v-for="(item,index) in carts" :key="index">
          <div class="cart-products">
              <yd-checkbox color="#369eee" v-model="item.checked" shape="circle"></yd-checkbox>
            <div class="pic" 
              :style="{background: `url(${item.pic}) no-repeat center center / contain`}">
            </div>
            <div class="detail">
              <div class="title">{{item.title}}</div>
              <div class="price">￥{{item.price}}</div>
            </div>
            <yd-spinner v-model="item.quantity"></yd-spinner>
          </div>
          <div class="del" slot="del" @click="del(item.id)">删除</div>
        </slip-del>
        </div>
        <div class="total">
          <div class="select">已选:{{select}}</div>
          <div class="total-price">合计:<span>{{total}}</span></div>
          <router-link to="/">结算</router-link>
        </div>
    </div>
    <div v-else class="nothing">
      购物车里面空空如也!
      <router-link to="/">点击返回首页</router-link>
    </div>
    <Tabbar/>
  </div>
</template>

<script>
import { mapState } from "vuex";
import SlipDel from "vue-slip-delete";
export default {
  name: "Cart",
  components: {
    SlipDel
  },
  data() {
    return {
      isCheckAll: false,
      // carts: [
      //   {
      //     id: 1,
      //     checked: false,
      //     pic: require("../assets/img/home/palen1-01.jpg"),
      //     title: "柏聆乐器41寸吉他初学者民谣木吉他...",
      //     price: 369,
      //     quantity: 1
      //   },
      //   {
      //     id: 2,
      //     checked: false,
      //     pic: require("../assets/img/home/palen1-02.jpg"),
      //     title: "柏聆乐器41寸吉他初学者民谣木吉他...",
      //     price: 369,
      //     quantity: 1
      //   }
      // ]
    };
  },
  watch: {
    isCheckAll: {
      handler(newVal, oldVal) {
        this.carts.forEach(item => {
          item.checked = newVal;
        });
      }
    },
    carts: {
      handler(newVal, oldVal) {
        console.log(newVal);
        const arr = this.carts.filter(item => item.checked == true);
        console.log(arr);
        if (arr.length === this.carts.length) {
          this.isCheckAll = true;
        } else {
          this.isCheckAll = false;
        }
      },
      deep: true
    }
  },
  computed: {
    ...mapState({
      carts: state => state.carts
    }),
    // 全选
    // isCheckAll:{
    //   get(){
    //     return this.carts.every(item=>item.checked)
    //   },
    //   set(val){
    //     return this.carts.forEach(item=>{
    //       item.checked =val
    //     })
    //   }
    // },
    // 已选
    select() {
      return this.carts.filter(item => item.checked).length;
    },
    //合计
    total() {
      return this.carts.filter(item => item.checked).reduce((cur, item) => {
        return cur + item.price * item.quantity;
      }, 0);
    }
  },
  methods: {
    // 删除
    del(id) {
      const index = this.carts.filter(item => (item.id = id));
      this.$dialog.confirm({
        title: "提示",
        mes: "确认删除?",
        opts: () => {
          this.carts.splice(index, 1);
          this.$dialog.toast({ mes: "删除成功", timeout: 1000 });
        }
      });
    }
    //   singleChecked() {
    //     const checkedArr = this.carts.filter(item => item.checked == true);
    //     if (checkedArr.length === this.carts.length) {
    //       this.isCheckAll = true;
    //     } else {
    //       this.isCheckAll = false;
    //     }
    //   },
    //     // 全选
    //   checkedAll() {
    //   this.carts.forEach(item => {
    //     item.checked = this.isCheckAll;
    //   });
    // }
  }
};
</script>

