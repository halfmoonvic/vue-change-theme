import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/home/home'
import PageOne from 'pages/pageone/pageone'
import PageTwo from 'pages/pagetwo/pagetwo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'pageone'
    }, {
      path: '/pageone',
      name: 'pageone',
      component: PageOne
    }, {
      path: '/pagetwo',
      name: 'pagetwo',
      component: PageTwo
    }
  ]
})
