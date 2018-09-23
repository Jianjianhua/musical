import Header from '../components/Header.vue'
import Tabbar from '../components/Tabbar.vue'


export default {
  install(Vue){
    Vue.component('Header',Header)
    Vue.component('Tabbar',Tabbar)

  }
}