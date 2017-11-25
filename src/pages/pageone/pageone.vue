<template>
  <div data-comp="pageone-component">
    <theme></theme>
    <span>pageone组件</span>
    <router-link to='/pagetwo' tag='button'>go pagetwo</router-link>
  </div>
</template>

<script type="text/javascript">
  /******* 第三方 组件库 *****/
  /**** 本地公用变量 公用函数 **/
  /******* 本地 公用组件 *****/
  import Theme from 'components/theme/theme'
  /**** 当前组件的 子组件等 ***/

  export default {
    name: 'pageone',
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
