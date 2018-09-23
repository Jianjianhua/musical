<template>
  <div class="user-setting">
    <Header title="设置"></Header>
    <div class="menu">
      <yd-cell-group>
      <yd-cell-item  arrow type="link" href="userinfo">
          <span slot="left">个人信息</span>
          <span slot="right"></span>
      </yd-cell-item>
          <yd-cell-item arrow type="link" href="/shipping-address">
          <span slot="left">收货地址</span>
          <span slot="right"></span>
      </yd-cell-item>
          <yd-cell-item arrow type="link" href="#">
          <span slot="left">账号安全</span>
          <span slot="right"></span>
      </yd-cell-item>
      <yd-cell-item arrow type="link" href="#">
          <span slot="left">通知消息提醒</span>
          <span slot="right"></span>
      </yd-cell-item>
      </yd-cell-group>
      <yd-cell-group>
      <yd-cell-item class="avatar" arrow type="link" href="#">
          <span slot="left">关于我们</span>
          <span slot="right"></span>
      </yd-cell-item>
          <yd-cell-item arrow type="link" href="#">
          <span slot="left">意见反馈</span>
          <span slot="right"></span>
      </yd-cell-item>
      </yd-cell-group>
    </div>
    <div class="back-btn">
        <yd-button @click.native="back" size="large" bgcolor="#369eee" color="#fff" type="primary">退出当前账号</yd-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserSetting",
  methods: {
    back() {
      this.$dialog.confirm({
        title: "提示",
        mes: "是否退出当前账号?",
        opts: () => {
          this.$dialog.toast({ mes: "退出成功", timeout: 1000 });
          this.$router.push("/login");
        }
      });
    }
  }
};
</script>

