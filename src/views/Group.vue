<template>
  <div class="circle">
    <Header title="圈子">
      <div slot="left"></div>
    </Header> 
    <div class="speak">
      <input type="text" placeholder="说点什么吧">
    </div>
    <div class="main" 
    v-for="(item,index) in groups" 
    :key="index">
      <Ring 
      :avator="item.avator"
      :username="item.username"
      :time="item.time"
      :groupIndex="index"
      :comments="item.comments"
      :eye="item.eye"
      :msg="item.msg"
      :heart="item.heart"
      :pics=item.pics
      @changeHeart="changeHeart"
      >

      </Ring>
    </div>


    <Tabbar/>
  </div>
</template>

<script>
import Ring from '../components/Ring'
export default {
  name:'Group',
  components:{
    Ring
  },
  data(){
    return{
      groups:[
        {
          id:1,
          avator:require('../assets/img/circle/user1.png'),
          username:'不是好人',
          time:'2018-07-29',
          comments:'乐器啊，你长成这样一定是想红！',
          pics:[
            require('../assets/img/circle/1.jpg'),
            require('../assets/img/circle/2.jpg'),
            require('../assets/img/circle/3.jpg'),
          ],
          eye:603,
          msg:626,
          heart:230
        },
        {
          id:1,
          avator:require('../assets/img/circle/user2.png'),
          username:'似懂非懂',
          time:'2018-07-29',
          comments:'自己改装的乐器好看吗？晒出你家的乐器和我家的乐器比对一下，最牛就在一瞬间。',
          pics:[
            require('../assets/img/circle/4.jpg'),
          ],
          eye:603,
          msg:626,
          heart:230
        }
      ]
    }
  },
  methods:{
    changeHeart(options){
      console.log(options)
      if(options.show){
        this.groups[options.index].heart++
      }else{
        this.groups[options.index].heart--
      }
    }
  }

}
</script>

<style>

</style>
