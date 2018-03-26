import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'https://server-web-app.now.sh/' //'https://server-wxuaqvgrwi.now.sh'
  })
}
