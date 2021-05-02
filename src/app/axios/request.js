import axios from 'axios'
import store from './../store/index.js'
const requestAxios = axios.create({
    baseURL: 'https://vue-with-base-default-rtdb.firebaseio.com/',
})

requestAxios.interceptors.response.use(null , function(error) {
    if(error.response.status === 401){
     store.commit('auth/logout')
    }
  return  Promise.reject(error)
})

export default requestAxios
