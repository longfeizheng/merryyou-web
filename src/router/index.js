import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test/test'
import NewContact from '@/components/NewContact'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/newcontact', //  和router-link to相呼应，导航到/newcontact
      name: 'NewContact',
      component: NewContact
    }
  ]
})
