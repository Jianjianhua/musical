<template>
  <div class="video">
    <Header title="视频">
      <div class="right" slot="right">
        <i class="icon icon-white-search"></i>
      </div>
    </Header>
    <Videos 
      v-for="(item,index) in items" 
      :key="index"
      :videoIndex="index"
      :icon="item.icon" 
      :title="item.title" 
      :pic="item.pic" 
      :heart="item.heart"
      :comments="item.comments" 
      @changeHeart="changeHeart"
      :share="item.share"></Videos>
  </div>  
</template>

<script>
import Videos from '../components/Videos'
export default {
  components:{
    Videos
  },
  data(){
    return{
       items:[
        {
          id:1,
          icon:'ymhLOGO',
          title:'电吉他怎么调',
          heart:230,
          comments:626,
          share:132,
          pic:require('../assets/img/video/1.jpg'),
          videos:['http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'],
        },
        {
          id:2,
          icon:'zjgqLOGO',
          title:'三角钢琴GP 148',
          heart:230,
          comments:626,
          share:132,
          pic:require('../assets/img/video/2.jpg'),
          videos:['http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'],
        },
      ],
    }
  },
  methods:{
    changeHeart(options){
      if(options.showHeart){
        this.items[options.index].heart++;
      }else{
        this.items[options.index].heart--;
      }
    }
  },
}
</script>

