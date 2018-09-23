<template>
  <div class="setpassword">
    <Header title="设置新密码"></Header>
    <div class="content">
      <div class="filed">
        <yd-cell-group>
          <yd-cell-item>
            <yd-input slot="right" type="password" v-model="password" placeholder="请输入新密码"></yd-input>
          </yd-cell-item>
          <yd-cell-item>
            <yd-input slot="right" type="password" v-model="comfirmpassword" placeholder="确认密码"></yd-input>
          </yd-cell-item>
        </yd-cell-group>
      </div>
        <yd-button @click.native="goLogin" size="large" bgcolor="#369eee" color="#fff" type="primary">登录</yd-button>
    </div>
  </div>
</template>

<script>
import {isEmpty} from 'lodash'
export default {
  name:'SetNewPassword',
  data(){
    return{
      password:'',
      comfirmpassword:''
    }
  },
  methods:{
     _vaildate() {
      if (isEmpty(this.password)) {
        return "密码不能为空";
      }
      if (isEmpty(this.comfirmpassword)) {
        return "确认密码不能为空";
      }
      if (this.password !==this.comfirmpassword) {
        return "两次输入的密码不一致";
      }
    },
    goLogin(){
      const err = this._vaildate();
      if (err) {
        this.$dialog.toast({
          mes: err,
          timeout: 1000
        });
      }else{
         this.$service.sendPassword({
           password:this.password,
           comfirmpassword:this.comfirmpassword
         }).then(()=>{
           this.$dialog.toast({mes:'修改密码成功,跳转到登录页面'})
           this.$router.push('/login')
         })
         
      }
    }
  }
};
</script>

