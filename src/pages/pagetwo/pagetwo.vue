<template>
  <div data-comp="pagetwo-component">
    <theme></theme>
    <span>pagetwo组件</span>
    <router-link to='/pageone' tag='button'>go pageone</router-link>
  </div>
</template>

<script type="text/javascript">
  /******* 第三方 组件库 *****/
  /**** 本地公用变量 公用函数 **/
  /******* 本地 公用组件 *****/
  import Theme from 'components/theme/theme'
  /**** 当前组件的 子组件等 ***/

  export default {
    name: 'pagetwo',
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    data() {
      return {

      }
    },
    components: {
      Theme
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/variable";
  @import "~assets/css/mixin";
</style>
