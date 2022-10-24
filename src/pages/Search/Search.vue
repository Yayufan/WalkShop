<template>
    <section class="search">
        <HeaderTop title="搜索"></HeaderTop>
        <form class="search_form" action="#">
            <input type="search" name="search" placeholder="請輸入商家或美食名稱" class="search_input">
            <input type="submit" name="submit" class="search_submit">
        </form>
    </section>
</template>

<script>
import HeaderTop from "@/components/HeaderTop/HeaderTop.vue"
export default {
  components:{
    HeaderTop
  }

}
</script>

<style>

/* #region 搜尋*/
.search {
  width: 100%;
}

.search header {
	background-color: #02a774;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 45px;
}
.search header .header_search {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 10%;
    height: 50%;
}
.search header .header_search .icon-sousuo {
    font-size: 25px;
    color: #fff;
}
.search header .header_title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    color: #fff;
    text-align: center;
    margin-left: -5%;
}
.search header .header_title .header_title_text {
    font-size: 20px;
    color: #fff;
    display: block;
}
.search header .header_login {
    font-size: 14px;
    color: #fff;
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
}
.search header .header_login .header_login_text {
    color: #fff;
}


.search .search_form {
  *zoom: 1;
  margin-top: 45px;
  background-color: #fff;
  padding: 12px 8px;
}
.search .search_form::after {
  content: '';
  display: block;
  clear: both;
}
.search .search_form input {
  height: 35px;
  padding: 0 4px;
  border-radius: 2px;
  font-weight: bold;
  outline: none;
}
.search .search_form input.search_input {
  float: left;
  width: 79%;
  border: 4px solid #f2f2f2;
  font-size: 14px;
  color: #333;
  background-color: #f2f2f2;
}
.search .search_form input.search_submit {
  float: right;
  width: 18%;
  border: 4px solid #02a774;
  font-size: 16px;
  color: #fff;
  background-color: #02a774;
}
/* #endregion 搜尋結尾*/

/* #region */
/* // @import "@/assets/stylus/mixins.styl"
// .search 
//     width 100%
//     .header
//         background-color #02a774
//         position fixed
//         z-index 100
//         left 0
//         top 0
//         width 100%
//         height 45px
//         .header_search
//             position absolute
//             left 15px
//             top 50%
//             transform translateY(-50%)
//             width 10%
//             height 50%
//             .icon-sousuo
//                 font-size 25px
//                 color #fff
//         .header_title
//             position absolute
//             top 50%
//             left 50%
//             transform translate(-50%, -50%)
//             width 50%
//             color #fff
//             text-align center
//             .header_title_text
//                 font-size 20px
//                 color #fff
//                 display block
//         .header_login
//             font-size 14px
//             color #fff
//             position absolute
//             right 15px
//             top 50%
//             transform translateY(-50%)
//             .header_login_text
//                 color #fff
//     .search_form
//         clearFix()
//         margin-top 45px
//         background-color #fff
//         padding 12px 8px
//         input
//             height 35px
//             padding 0 4px
//             border-radius 2px
//             font-weight bold
//             outline none
//             &.search_input
//                 float left
//                 width 79%
//                 border 4px solid #f2f2f2
//                 font-size 14px
//                 color #333
//                 background-color #f2f2f2
//             &.search_submit
//                 float right
//                 width 18%
//                 border 4px solid #02a774
//                 font-size 16px
//                 color #fff
//                 background-color #02a774 */
/* #endregion */

   
</style>