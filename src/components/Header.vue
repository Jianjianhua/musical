<template>
  <div class="header">
    <div class="left">
      <slot name="left" >
      <i class="icon icon-arrow-left" @click="$router.back()"></i>
    </slot>
    </div>
    <div class="center">
      <slot name="center"> {{ title }} </slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>

</template>

<script>
export default {
  name:'Header',
  props:{
    title:{
      type:String,
      default:'首页'
    }
  }
}
</script>
