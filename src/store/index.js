import Vue from 'vue'
import Vuex from 'vuex'
import {
  resolve
} from 'url';
import {
  rejects
} from 'assert';
import service, {
  Service,
  get
} from '../service'



Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLogin: false,
    userInfo: {},
    coupons: [],
    address: [],
    carts:[]
  },
  getters:{
    cartsLength(state){
      return state.carts.length
    }
  },
  mutations: {
    setIsLogin(state, val) {
      state.isLogin = val
    },
    setUserInfo(state, val) {
      state.userInfo = val
    },
    setCoupons(state, val) {
      state.coupons = val
    },
    setAddress(state, val) {
      state.address = val
    },
    setCarts(state,val){
      state.carts=val
    }
  },
  actions: {
    addCarts({commit ,state},playload){
      const id = playload.id
      if(!id){
        return '添加购物车必须有ID'
      }
      const hasId = state.carts.find(item=>item.id===id)
      if(hasId){
        return
      }
      const carts = [...state.carts,playload]
      commit('setCarts',carts)
      return true
    },
    login({
      commit
    }, data) {
      return new Promise((resolve, reject) => {
        Service.login(data)
          .then(res => {
            commit('setIsLogin', true)
            commit('setUserInfo', {
              avatar: require('../assets/img/user-center/avatar.png'),
              name: '不是好人',
              level: 12,
              gender: '男',
              ingetral: 719
            })
            commit('setCoupons', [{
                status: 0,
                pic: require("../assets/img/coupon/10.png")
              },
              {
                status: 0,
                pic: require("../assets/img/coupon/20.png")
              },
              {
                status: 0,
                pic: require("../assets/img/coupon/30.png")
              },
              {
                status: 0,
                pic: require("../assets/img/coupon/50.png")
              },
              {
                status: 0,
                pic: require("../assets/img/coupon/100.png")
              },
              {
                status: 1,
                pic: require("../assets/img/coupon/101.png")
              },
              {
                status: 1,
                pic: require("../assets/img/coupon/201.png")
              }
            ])
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    setaddress({
      commit
    }, data) {
      return new Promise((resolve, reject) => {
        Service.setAddress(data)
          .then(res => {
            commit('setAddress', [{}])
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    // getAddressLists({
    //   commit
    // }, data) {
    //   return new Promise((resolve, reject) => {
    //     get('/adddress')
    //       .then(res => {
    //         resolve(res.data);
    //       })
    //   })

    // }
  }
})

export default store