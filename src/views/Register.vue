<template>
  <div class="register">
    <Header title="注册"></Header>
    <div class="content">
      <div class="filed">
        <yd-cell-group>
          <yd-cell-item>
            <yd-input slot="right" required :show-error-icon="false" :show-success-icon="false"
            v-model="phone" max="11" 
            placeholder="请输入手机号码"></yd-input>
          </yd-cell-item>
          <yd-cell-item>
            <yd-input slot="right" type="password" v-model="password" placeholder="请输入密码"></yd-input>
          </yd-cell-item>
        </yd-cell-group>
        <div class="code">
              <yd-cell-item>
                <yd-input  slot="right" type="text" v-model="code" placeholder="请输入验证码"></yd-input>
              </yd-cell-item>
              <yd-button @click.native="_sendcode" class="code-btn" type="warning"  :disabled="isPhone">{{text}}</yd-button>
        </div>
      </div>
          <yd-button @click.native="register" size="large" bgcolor="#369eee" color="#fff" type="primary">注册</yd-button>
        <div class="bottom">
        <yd-checkbox color="#369eee"  v-model="checked" shape="circle"></yd-checkbox>
        <p>已阅读并同意以下协议<a href="/">《乐器商城协议》</a></p>
      </div>
    </div>
     
  </div>
</template>

<script>
import { isEmpty } from "lodash";
export default {
  name: "Register",
  data() {
    return {
      phone: "",
      password: "",
      code: "",
      checked: false,
      text: "获取验证码"
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
      if (isEmpty(this.password)) {
        return "密码不能为空";
      }
      if (isEmpty(this.code)) {
        return "验证码不能为空";
      }
      if (!this.checked) {
        return "必须阅读协议才能完成注册";
      }
    },
   
    register() {
      const err = this._vaildate();
      if (err) {
        return this.$dialog.toast({ mes: err, timeout: 1000 });
      }
      this.$service
        .Register({
          phone: this.phone,
          code: this.code,
          password: this.password
        })
        .then(() => {
          this.$dialog.toast({ mes: "注册成功", timeout: 1000 });
          this.$router.push("/login");
        });
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
    }
  }
};
</script>


