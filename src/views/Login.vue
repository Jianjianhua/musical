list-<template>
  <div class="login">
    <Header title="登录"></Header>
    <div class="content">
      <div class="filed">
        <yd-cell-group>
          <yd-cell-item>
            <yd-input slot="right" required :show-error-icon="false" :show-success-icon="false"
            v-model="username" max="11" 
            placeholder="请输入手机号码或用户名"></yd-input>
          </yd-cell-item>
          <yd-cell-item>
            <yd-input slot="right" type="password" v-model="password" placeholder="请输入密码"></yd-input>
          </yd-cell-item>
        </yd-cell-group>
      </div>
        <yd-button @click.native="submit" size="large" bgcolor="#369eee" color="#fff" type="primary">登录</yd-button>
        <router-link to="/register">
          <yd-button class="register-btn" size="large" bgcolor="#fff" color="#369eee" type="primary">注册账号</yd-button>
        </router-link>
      <div class="forget-password">
        <router-link to="/findpassword">
          忘记密码?
        </router-link>
      </div>
      <div class="other-link">
        <p>第三方登录</p>
        <div class="line"></div>
        
      </div>
      <div class="link-list">
          <router-link to="/">
            <div class="list-item">
              <i class="icon icon-qq"></i>
              <span>QQ登录</span>
            </div>
          </router-link>
           <router-link to="/">
            <div class="list-item">
              <i class="icon icon-wechat"></i>
              <span>微信登录</span>
            </div>
          </router-link>
           <router-link to="/">
            <div class="list-item">
              <i class="icon icon-weibo"></i>
              <span>微博登录</span>
            </div>
          </router-link>
        </div>
    </div>
  </div>
</template>

<script>
import { isEmpty } from "lodash";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    _vaildate() {
      if (isEmpty(this.username)) {
        return "手机号码不能为空";
      }
      if (!/1[3578]\d{9}$/.test(this.username)) {
        return "手机号码格式不正确";
      }
      if (isEmpty(this.password)) {
        return "密码不能为空";
      }
    },
    submit() {
      const err = this._vaildate();
      if (err) {
        return this.$dialog.toast({mes:err ,timeout:1500});
      }
      this.$store.dispatch("login", {
          username: this.username,
          password: this.password
        }).then(() => {
         this.$dialog.toast({mes: '登录成功',timeout:1000}); 
         this.$router.push('/') 
        });
    }
  }
};
</script>

