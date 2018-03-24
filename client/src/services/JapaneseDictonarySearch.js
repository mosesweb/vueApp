import Api from '@/services/Api'

export default {
  getResult (searchString) {
    return Api().get(`getJishoSearchResult/${searchString}`)
  }
}
