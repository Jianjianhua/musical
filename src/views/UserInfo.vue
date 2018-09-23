<template>
  <div class="user-info">
    <Header title="个人信息"></Header>
    <yd-cell-group>
        <yd-cell-item class="avatar" arrow type="link" href="#">
            <span slot="left">头像</span>
            <span slot="right"><img :src="user.avatar" alt=""></span>
        </yd-cell-item>
           <yd-cell-item arrow type="link" href="#">
            <span slot="left">昵称</span>
            <span slot="right">{{user.name}}</span>
        </yd-cell-item>
           <yd-cell-item arrow type="link" href="#">
            <span slot="left">会员等级</span>
            <span slot="right">LV{{user.level}}</span>
        </yd-cell-item>
           <yd-cell-item arrow type="link" href="#">
            <span slot="left">背景图片</span>
            <span slot="right"></span>
        </yd-cell-item>
           <yd-cell-item arrow type="link" href="#">
            <span slot="left">性别</span>
            <span slot="right">{{user.gender}}</span>
        </yd-cell-item>
    </yd-cell-group>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name:'Userinfo',
  computed:{
    ...mapState({
      user:state=>state.userInfo
    })
  }
}
</script>

