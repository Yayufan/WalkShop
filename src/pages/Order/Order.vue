<template>
    <!--訂單-->
    <div>
      <section class="order">
        <HeaderTop title="訂單列表"></HeaderTop>
        
        <section class="order_no_login">
          <img src="./images/order/person.png">
          <h3>登錄後查看外賣訂單</h3>
          <button>立即登陸</button>
        </section>
      </section>
    </div>
</template>

<script>
import HeaderTop from "@/components/HeaderTop/HeaderTop.vue"
export default {
  components:{
    HeaderTop
  }

}
</script>

<style >

/* #region 訂單 */

.order {
  width: 100%;
}

.order header {
	background-color: #02a774;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 45px;
}
.order header .header_search {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 10%;
    height: 50%;
}
.order header .header_search .icon-sousuo {
    font-size: 25px;
    color: #fff;
}
.order header .header_title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    color: #fff;
    text-align: center;
    margin-left: -5%;
}
.order header .header_title .header_title_text {
    font-size: 20px;
    color: #fff;
    display: block;
}
.order header .header_login {
    font-size: 14px;
    color: #fff;
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
}
.order header .header_login .header_login_text {
    color: #fff;
}

.order .order_no_login {
  padding-top: 140px;
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
.order .order_no_login >img {
  display: block;
  width: 100%;
  height: 30%;
}
.order .order_no_login >h3 {
  padding: 10px 0;
  font-size: 17px;
  color: #6a6a6a;
}
.order .order_no_login >button {
  display: inline-block;
  background: #02a774;
  font-size: 14px;
  color: #fff;
  border: 0;
  outline: none;
  border-radius: 5px;
  padding: 10px 20px;
}
/* #endregion 訂單結尾 */

    /* @import "@/assets/stylus/mixins.styl"
    .order  //訂單
        width 100%
        .header
        background-color #02a774
        position fixed
        z-index 100
        left 0
        top 0
        width 100%
        height 45px
        .header_search
            position absolute
            left 15px
            top 50%
            transform translateY(-50%)
            width 10%
            height 50%
            .icon-sousuo
                font-size 25px
                color #fff
        .header_title
            position absolute
            top 50%
            left 50%
            transform translate(-50%, -50%)
            width 50%
            color #fff
            text-align center
            .header_title_text
                font-size 20px
                color #fff
                display block
        .header_login
            font-size 14px
            color #fff
            position absolute
            right 15px
            top 50%
            transform translateY(-50%)
            .header_login_text
                color #fff
        .order_no_login
            padding-top 140px
            width 60%
            margin 0 auto
            text-align center
            >img
                display block
                width 100%
                height 30%
            >h3
                padding 10px 0
                font-size 17px
                color #6a6a6a
            >button
                display inline-block
                background #02a774
                font-size 14px
                color #fff
                border 0
                outline none
                border-radius 5px
                padding 10px 20px */

</style>