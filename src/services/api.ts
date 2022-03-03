import axios from 'axios'

const api = axios.create({
  baseURL: 'http://10.62.16.34:3333/'
})

export default api
