<template>
  <div id="app" class="theme-red" ref="app">
    <v-header></v-header>
    <router-view/>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import Header from 'components/header/header'

export default {
  name: 'app',
  mounted() {
    this.setTheme()
  },
  computed: {
    ...mapGetters(['themeCls'])
  },
  methods: {
    setTheme(theme) {
      const target = this.$refs.app
      if (theme) {
        target.className = `theme-${theme}`
      } else {
        // 如果刷新页面，则读取 localStorage的值来设置主题
        target.className = `theme-${localStorage.getItem('theme')}`
      }
    }
  },
  components: {
    VHeader: Header
  },
  watch: {
    themeCls(theme) {
      this.setTheme(theme)
    }
  }
}
</script>

<style>
</style>
