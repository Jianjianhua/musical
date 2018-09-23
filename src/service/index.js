import axios from 'axios';
import moment from 'moment'
import { promises } from 'fs';

axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5b99cad2267dfa0ef98c96b7/api'

export const get = (url, data) => {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: data
    }).then(data => {
      if (data.data.data.length>0) {
        resolve(data.data)
      } else {
        reject(data.data)
      }
    }).catch(err => {
      console.error(`
        [REQUEST] ${moment().format('YYYY年MM月DD日 HH:mm:ss')}
        Method:GET
        url:${url}
        data:${JSON.stringify(data,null,2)}
      `)
    })
  })
}
const post = (url, data) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(data => {
      if (data.data.success) {
        resolve(data.data)
      } else {
        reject(data.data)
      }
    }).catch(err => {
      console.error(`
        [REQUEST] ${moment().format('YYYY年MM月DD日 HH:mm:ss')}
        Method:POST
        url:${url}
        data:${JSON.stringify(data,null,2)}
      `)
    })
  })
}

export const Service = {
  login(data) {
    return Promise.resolve({})
  },
  sendCode(data){
    return Promise.resolve({})
  },
  sendPassword(data){
    return Promise.resolve({})
  },
  Register(data){
    return Promise.resolve({})
  },
  setAddress(date){
    return Promise.resolve({})
  }
}

export default {
  install(Vue) {
    Vue.prototype.$service = Service
  }


}