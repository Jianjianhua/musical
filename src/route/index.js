import Vue from 'vue'
import store from '../store'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import SetNewPassword from '../views/SetNewPassword.vue'
import FindPassword from '../views/FindPassword.vue'
import Register from '../views/Register.vue'
import Teach from '../views/Teach.vue'
import Coupon from '../views/Coupon.vue'
import Search from '../views/Search.vue'
import Addaddress from '../views/Addaddress.vue'
import UserInfo from '../views/UserInfo.vue'
import User from '../views/User.vue'
import Order from '../views/Order.vue'
import UserSetting from '../views/UserSetting.vue'
import Category from '../views/Category.vue'
import MusicalMall from '../views/MusicalMall.vue'
import ShippingAddress from '../views/ShippingAddress.vue'
import EditAddress from '../views/EditAddress.vue'
import Video from '../views/Video.vue'
import Cart from '../views/Cart.vue'
import Product from '../views/Product.vue'
import UserCollection from '../views/UserCollection.vue'
import HotList from '../views/HotList.vue'
import List from '../views/List.vue'
import Customer from '../views/Customer.vue'
import Group from '../views/Group.vue'
import {
  Store
} from 'vuex';
Vue.use(Router)

const router = new Router({
  linkActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return {x:0,y:0}
  },
  routes: [
    // 圈子页面
    {
      path: '/group',
      name: 'Group',
      component: Group,
    },
    // 联系客服
    {
      path: '/customer',
      name: 'Customer',
      component: Customer,
    },
    // 商品列表
    {
      path: '/list',
      name: 'List',
      component: List,
    },
    // 热门推荐页面
    {
      path: '/hot-list',
      name: 'HotList',
      component: HotList,
    },
    // 个人收藏页面
    {
      path: '/user-collection',
      name: 'UserCollection',
      component: UserCollection,
      meta: {
        auth: true
      }
    },
    // 购物车页面
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
      meta: {
        auth: true
      }
    },
    // 视频页面
    {
      path: '/video',
      name: 'Video',
      component: Video,
    },
    // 编辑地址页面
    {
      path: '/edit-address',
      name: 'EditAddress',
      component: EditAddress,
      meta: {
        auth: true
      }
    },
    // 收货地址页面
    {
      path: '/shipping-address',
      name: 'ShippingAddress',
      component: ShippingAddress,
      meta: {
        auth: true
      }
    },
    // 乐器商城页面
    {
      path: '/musical-mall',
      name: 'MusicalMall',
      component: MusicalMall,
    },
    // 分类页面
    {
      path: '/category',
      name: 'Category',
      component: Category,
    },
    // 个人设置页面
    {
      path: '/user-setting',
      name: 'UserSetting',
      component: UserSetting,
      meta: {
        auth: true
      }
    },
    // 我的订单页面
    {
      path: '/order',
      name: 'Order',
      component: Order,
      meta: {
        auth: true
      }
    },
    // 我的页面
    {
      path: '/user',
      name: 'User',
      component: User,
      meta: {
        auth: true
      }
    },
    {
      path: '/',
      component: Home,
      redirect: '/home'
    },
    // 首页
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    // 登录页
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    // 设置新密码页
    {
      path: '/setnewpassword',
      name: 'SetNewPassword',
      component: SetNewPassword
    },
    // 忘记密码页
    {
      path: '/findpassword',
      name: 'FindPassword',
      component: FindPassword
    },
    // 注册页
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    // 教材页
    {
      path: '/teach',
      name: 'Teach',
      component: Teach
    },
    // 优惠券页面
    {
      path: '/coupon',
      name: 'Coupon',
      component: Coupon,
    },
    // 搜索页面
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    // 添加收货地址
    {
      path: '/addaddress',
      name: 'Addaddress',
      component: Addaddress
    },
    // 个人信息页面
    {
      path: '/userinfo',
      name: 'UserInfo',
      component: UserInfo,
      meta: {
        auth: true
      }
    },
    // 商品详情页
    {
      name: 'Product',
      path: '/product/:id',
      component: Product
    },
  ]
})

router.beforeEach((from, to, next) => {
  if (from.meta.auth) {
    if (store.state.isLogin) {
      next()
    } else {
      next({
        path:'/login',
        query:{
          redirect:from.path
        }
      })
    }
  }else{
    next()
  }
})

export default router