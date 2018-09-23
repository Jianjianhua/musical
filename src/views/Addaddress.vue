<template>
  <div class="address">
    <Header title="添加收货地址">
    </Header>
    <div class="add-address">
      <div class="add-item">
        <span>收货人</span>
        <input type="text" v-model="consignee">
      </div>
      <div class="add-item">
        <span>联系电话</span>
        <input type="text" v-model="phone">
      </div>
      <yd-cell-group>
            <yd-cell-item arrow>
                <span slot="left">选择地区</span>
                <input slot="right" type="text" @click.stop="show1 = true" v-model="address" readonly placeholder="请选择">
            </yd-cell-item>
        </yd-cell-group>
        <yd-cityselect v-model="show1" :callback="result1" :items="district"></yd-cityselect>
      <div class="textarea">
        <textarea v-model="detail" name="" id="" cols="30" rows="10" placeholder="详细地址"></textarea>
      </div>
      <div class="add-item">
        <span>邮政编码</span>
        <input type="text" v-model="postcode">
      </div>
    </div>
    <div class="add-btn">
       <yd-button @click.native="addaddress"  size="large" bgcolor="#369eee" color="#fff" type="primary">保存</yd-button>
    </div>

  </div>

</template>

<script>
import District from "ydui-district/dist/jd_province_city_area_id";
export default {
  /* 前提是已经安装了 ydui-district */
  data() {
    return {
      consignee:'',
      phone:'',
      detail:'',
      show1: false,
      address: "",
      postcode:"",
      district: District
    };
  },
  methods: {
    result1(ret) {
      this.address = ret.itemName1 + " " + ret.itemName2 + " " + ret.itemName3;
    },
    addaddress(){
      this.$store.dispatch('setaddress',{
        consignee:this.consignee,
        phone:this.phone,
        detail:this.detail,
        addaddress:this.address,
        postcode:this.postcode
      }).then(()=>{
        this.$dialog.toast({mes:'保存成功',timeout:1000});
        this.$router.push('/shipping-address')
      })
    }
  }
};
</script>

<style>
</style>
