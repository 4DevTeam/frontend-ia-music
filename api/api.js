import axios from 'axios'

const service = axios.create({
    baseURL: process.env.baseUrl
  })

console.log(process.env.baseUrl)

  // response interceptor
service.interceptors.response.use(
  (res) => {
    return res.data
  },
  (error) => {
    return Promise.reject(error.response)
  }
)
  
export default service
  