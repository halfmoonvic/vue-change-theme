<template>
  <div data-comp="theme-component">
    <button @click.stop="controlShow">更换主题</button>
    <ul class="theme" v-show="isShow">
      <li
        v-for="item in themeList"
        :class="item"
        @click="changeTheme(item)"
      ></li>
    </ul>
  </div>
</template>

<script type="text/javascript">
  /******* 第三方 组件库 *****/
  import { mapMutations } from 'vuex'
  /**** 本地公用变量 公用函数 **/
  /******* 本地 公用组件 *****/
  /**** 当前组件的 子组件等 ***/

  export default {
    name: 'theme',
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        isShow: false,
        themeList: ['red', 'blue', 'yellow']
      }
    },
    mounted() {
      document.addEventListener('click', this.hide)
    },
    methods: {
      controlShow() {
        this.isShow = !this.isShow
      },
      hide() {
        this.isShow = false
      },
      changeTheme(theme) {
        // 存取 localStorage 以防页面刷新 丢失主题
        localStorage.setItem('theme', theme)
        this.setTheme(theme)
      },
      ...mapMutations({
        setTheme: 'SET_THEME'
      })
    },
    beforeDestroy() {
      document.removeEventListener('click', this.hide)
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/variable";
  @import "~assets/css/mixin";

  .theme {
    > li {
      width: 50px;
      height: 30px;
      border-radius: 5px;
    }
    .red {
      background: #f00;
    }
    .blue {
      background: #00f;
    }
    .yellow {
      background: #ff0;
    }
  }
</style>
