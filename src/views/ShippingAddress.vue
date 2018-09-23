<template>
  <div class="shipping-address">
    <Header title="收货地址"></Header>
    <yd-radio-group v-model="radio1" :callback="change" 
      size="15" color="#369eee">
      <div class="address" v-for="(item,index) in lists"
      :key="index">
      <div class="info">
        <div class="user-info">
          <div class="name">{{ item.name }}</div>
          <div class="phone">{{ item.phone }}</div>
        </div>
        <div class="address-main">
          {{item.address}}
        </div>
      </div>
      <div class="control-btn">
        <yd-radio :val="item.id" v-if="curId === item.id">默认地址</yd-radio>
        <yd-radio :val="item.id" v-else>设置默认</yd-radio>
        <div class="btn">
          <router-link :to="`/edit-address?id=${item.id}`">
          <yd-button type="hollow">编辑</yd-button>

          </router-link>
          <yd-button @click.native="del(item.id)" type="hollow">删除</yd-button>
        </div>
      </div>
    </div>
    </yd-radio-group>
    <router-link class="toadd" to="/addaddress">
      <yd-button size="large" bgcolor="#369eee" color="#fff" type="primary">添加收货地址</yd-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ShippingAddress",
  data() {
    return {
      curId: null,
      ischecked:false,
      radio1:'',
      lists: [
        {
          id: 1,
          name: "李先生",
          phone: 12345678901,
          address:
            "广东省韶关市浈江区  韶关学院校本部西区丁香苑E栋101广东省韶关市浈江区韶关学院校本",
        },
        {
          id: 2,
          name: "陈先生",
          phone: 10987654321,
          address: "广东省广州市天河区车陂街道东圃镇假日新街9号楼公寓",
        },
        {
          id: 3,
          name: "陈先生",
          phone: 32165498710,
          address: "广东省肇庆市德庆县悦城镇",
        }
      ]
    };
  },
  methods: {
    change(item){
      this.curId = item;
    },
    del(id){
      const index = this.lists.findIndex(item=>item.id===id)
      console.log(index)
      this.$dialog.confirm({
        title:'提示',
        mes:'确定删除吗?',
        opts:()=>{
          this.lists.splice(index,1)
          this.$dialog.toast({mes:'删除成功',timeout:1000})
        }
      })
    },
    // getAddressLists() {
    //   this.$store.dispatch('getAddressLists').then(data => {
    //     console.log(data);
    //     this.lists=data
    //   })
    // }
  },
  // mounted() {
  //   this.getAddressLists();
  // }
};
</script>

