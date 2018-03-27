import axios from 'axios'

export default () => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return axios.create({
        baseURL: 'http://localhost:8081'
      })

    case 'production':
      return axios.create({
        baseURL: 'https://server-web-app.now.sh' // https://server-wxuaqvgrwi.now.sh
      })

    default:
      console.log('error...')
  }
}
