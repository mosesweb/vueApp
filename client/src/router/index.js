import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Songs from '@/components/Songs'
import VocabularyLists from '@/components/VocabularyLists'
import MyVocabularyLists from '@/components/MyVocabularyLists'
import CreateSong from '@/components/CreateSong'
import CreateVocabularyList from '@/components/CreateVocabularyList/CreateVocabularyList'
import ViewSong from '@/components/ViewSong'
import ViewVocabularyList from '@/components/ViewVocabularyList/'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: Index
    },
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/songs',
      name: 'songs',
      component: Songs
    },
    {
      path: '/songs/:songId',
      name: 'song',
      component: ViewSong
    },
    {
      path: '/lists/:vocabularyListId',
      name: 'vocabularylist',
      component: ViewVocabularyList
    },
    {
      path: '/songs/create',
      name: 'songs-create',
      component: CreateSong
    },
    {
      path: '/lists/create',
      name: 'vocabularylist-create',
      component: CreateVocabularyList
    },
    {
      path: '/lists',
      name: 'vocabularylists',
      component: VocabularyLists
    },
    {
      path: '/my-lists',
      name: 'my-lists',
      component: MyVocabularyLists
    }
  ]
})
