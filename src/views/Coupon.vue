<template>
  <div class="coupon">
    <Header title="优惠券">
      <div slot="right">
        <i @click="del" class="icon icon-white-del"></i>
      </div>
    </Header>
    <div class="coupon-content">
      <yd-tab v-model="tab2" :prevent-default="false" :item-click="itemClick">
        <yd-tab-panel v-for="(item,index) in items" 
        :active="curStatus === item.status" 
        :key="index" 
        :label="item.label">
          <div v-for="(picItem, picIdx) in coupon" :key="picIdx" v-if="item.status == picItem.status" class="coupons">
            <img :src="picItem.pic" />
          </div>
        </yd-tab-panel>
      </yd-tab>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  mounted() {
    this.curStatus = parseInt(this.$route.query.status);
  },
  computed: {
    getStatus0() {
      return this.coupon.filter(item => item.status == 0).length;
    },
    getStatus1() {
      return this.coupon.filter(item => item.status == 1).length;
    },
    getStatus2() {
      return this.coupon.filter(item => item.status == 2).length;
    },
    items() {
      return [
        { label: `未使用(${this.getStatus0})`, status: 0 },
        { label: `已过期(${this.getStatus1})`, status: 1 },
        { label: `已使用(${this.getStatus2})`, status: 2 }
      ];
    },
     ...mapState({
      coupon: state=>state.coupons
    })
  },
  data() {
    return {
      tab2: 0,
      
      curStatus: 0
    };
  },
  methods: {
    itemClick(key) {
      this.$dialog.loading.open("数据加载中");
      setTimeout(() => {
        this.tab2 = key;
        this.$dialog.loading.close();
      }, 1000);
    },
    del() {
      this.$dialog.confirm({
        title: "提示",
        mes: "确定要删除全部过期和已经使用的优惠券？",
        opts: () => {
          this.coupon.splice(5);
          this.$dialog.toast({ mes: "删除成功", timeout: 1000 });
        }
      });
    }
  }
};
</script>

