<template>
  <div class="findpassword">
       <Header title="找回密码"></Header>
        <div class="content">
          <div class="filed">
            <yd-cell-group>
            <yd-cell-item>
            <yd-input slot="right" required :show-error-icon="false" :show-success-icon="false"
              v-model="phone" 
            placeholder="请输入手机号码"></yd-input>
            </yd-cell-item>
            </yd-cell-group>
            <div class="code">
              <yd-cell-item>
                <yd-input slot="right" type="text" v-model="code" placeholder="请输入验证码"></yd-input>
              </yd-cell-item>
              <yd-button @click.native='_sendcode' class="code-btn" type="primary" :disabled="isPhone">{{ text }}</yd-button>
            </div>
          </div>
          <yd-button @click.native='comfirm' size="large" bgcolor="#369eee" color="#fff" type="primary">确定</yd-button>
        </div>
  </div>
</template>

<script>
import { isEmpty } from "lodash";
export default {
  name: "FindPassword",
  data() {
    return {
      phone: "",
      code: "",
      text: "发送验证码"
    };
  },
  computed: {
    isPhone() {
      if (!/1[3578]\d{9}$/.test(this.phone)) {
        return true;
      }
    }
  },
  methods: {
    _vaildate() {
      if (isEmpty(this.phone)) {
        return "手机号码不能为空";
      }
      if (isEmpty(this.code)) {
        return "验证码不能为空";
      }
      if (!/1[3578]\d{9}$/.test(this.phone)) {
        return "手机号码格式不正确";
      }
    },
    _sendcode() {
      this.$service
        .sendCode({
          phone: this.phone
        })
        .then(data => {
          this.$dialog.toast({
            mes: "验证码已经发送,请注意查收",
            timeout: 1000
          });
          let time = 30;
          const timeId = setInterval(() => {
            if (time > 0) {
              this.text = `剩下${time}s`;
            } else {
              clearInterval(timeId);
              this.text = "发送验证码";
            }
            time--;
          }, 1000);
        });
    },
    comfirm() {
      const err = this._vaildate();
      if (err) {
        this.$dialog.toast({
          mes: err,
          timeout: 1000
        });
      }else{
         this.$router.push({
           path:'/setnewpassword',
           query:{
             phone:this.phone,
             code:this.code,
             from:this.$route.name
           }
         })
      }
     
    }
  }
};
</script>

<style>
</style>
