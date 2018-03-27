import Api from '@/services/Api'

export default {
  index () {
    return Api().get('vocabularylists')
  },
  show (vocabularyListId) {
    return Api().get(`vocabularylists/${vocabularyListId}`)
  },
  post (vocabularyList) {
    return Api().post('vocabularylists', vocabularyList)
  }
}
