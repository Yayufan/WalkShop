<template>
    <footer class="footer_guide border-1px">
    <!--動態綁定class,對象寫法,在確定class名字,不確定誰要使用class的樣式時使用, -->
    <router-link to="/home" class="guide_item" :class="{on:'/home'===$route.path}">
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>外賣</span>
    </router-link>
    <router-link to="/search" class="guide_item" :class="{on:'/search'===$route.path}">
      <span class="item_icon">
        <i class="iconfont icon-search"></i>
      </span>
      <span>搜索</span>
    </router-link>
    
    <router-link to="/order" class="guide_item" :class="{on:'/order'===$route.path}">
      <span class="item_icon">
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>訂單</span>
    </router-link>
    <router-link to="/profile" class="guide_item" :class="{on:'/profile'===$route.path}">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>我的</span>
    </router-link>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "@/assets/stylus/mixins.styl"
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>