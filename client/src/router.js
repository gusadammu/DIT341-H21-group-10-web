import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import WelcomePage from './views/WelcomePage.vue'
import SignUp from './views/SignUp.vue'
import SignIn from './views/SignIn'
import MyProfile from './views/MyProfile.vue'
import Garden from './views/Garden.vue'
import Gardens from './views/Gardens.vue'
import Plants from './views/Plants.vue'
import ShoppingList from './views/ShoppingList.vue'
import Profile from './views/Profile'
import User from './views/User.vue'
import Costumers from './views/Costumers.vue'
import About from './views/About.vue'
import Farmer from './views/Farmer.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/welcomePage',
      name: 'welocomePage',
      component: WelcomePage
    },

    {
      path: '/sign-up',
      name: 'signUp',
      component: SignUp
    },
    {
      path: '/sign-in',
      name: 'signIn',
      component: SignIn
    },
    {
      path: '/my-profile',
      name: 'myProfile',
      component: MyProfile
    },

    {
      path: '/gardens/:id',
      name: 'garden',
      component: Garden
    },
    {
      path: '/gardens/',
      name: '/gardens',
      component: Gardens
    },
    {
      path: '/shoppinglist',
      name: 'shoppinglist',
      component: ShoppingList
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/users',
      name: 'users',
      component: User
    },
    {
      path: '/farmers',
      name: 'farmers',
      component: Farmer
    },
    {
      path: '/costumers',
      name: 'costumers',
      component: Costumers
    },
    {
      path: '/plants',
      name: 'plants',
      component: Plants
    },
    {
      path: '/About',
      name: 'home',
      component: About
    }
  ]
})
