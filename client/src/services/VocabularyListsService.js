/* eslint-disable */
import Api from '@/services/Api'

export default {
  index () {
    return Api().get('vocabularylists')
  },
  getUserLists (UserId) {
    return Api().get(`getUserLists/${UserId}`)
  },
  show (vocabularyListId) {
    return Api().get(`vocabularylists/${vocabularyListId}`)
  },
  post (vocabularyList) {
    return Api().post('vocabularylists', vocabularyList)
  }
}
