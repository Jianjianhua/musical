<template>
  <footer class="footer">
    <div class="tab">
       <router-link v-for="(item,index) in list" :key="index" :to=item.link>
        <div class="pic">
          <i v-if="$route.name.toLowerCase() !==item.key" class="icon" :class="`icon-${item.key}`"></i>
          <i v-else class="icon" :class="`icon-${item.key}-active`"></i>
        </div>
        <span>{{ item.text }}</span>
    </router-link>
    </div>
  </footer>
</template>

<script>
export default {
  name:'Tabbar',
  data(){
    return {
      list:[
        {
          key:'home',
          link:'/home',
          text:'首页'
        },
        {
          key:'category',
          link:'/category',
          text:'分类'
        },
        {
          key:'group',
          link:'/group',
          text:'圈子'
        },
        {
          key:'cart',
          link:'/cart',
          text:'购物车'
        },
        {
          key:'user',
          link:'/user',
          text:'我'
        },
      ]
    }
  }
}
</script>

