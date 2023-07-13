import axios from 'axios'

const api = axios.create({
  // baseURL: process.env.BASE_URL,
  baseURL: 'http://localhost:4000',
  timeout: 5000,
})

export default api
