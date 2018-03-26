import axios from 'axios'

export default () => {
  return axios.create({
<<<<<<< HEAD
    baseURL: 'http://localhost:8081' // https://server-wxuaqvgrwi.now.sh
=======
    baseURL: 'https://server-web-app.now.sh/' //'https://server-wxuaqvgrwi.now.sh'
>>>>>>> 22bcebba188087f1dce853e6b1b70a3aaa2d98cf
  })
}
