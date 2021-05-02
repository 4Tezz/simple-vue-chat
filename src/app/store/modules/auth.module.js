import axios from 'axios'
import {err} from '../../shared/utils/error.js'
export default {
    namespaced: true ,
    state(){
        return {
            authToken : localStorage.getItem('jwt-token')
        }
    },
    getters: {
        isAuntification(state) {
            return !!state.authToken
        },
        token(state) {
            return state.authToken
        }
    },
    mutations: {
        logout(state) {
            state.authToken = null
            localStorage.removeItem('jwt-token')
        },
        setToken(state , token) {
            state.authToken = token
            localStorage.setItem('jwt-token' , token)
        }
    },
    actions: {
        async login({commit , dispatch} , payload) {
            try{
                const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FB_KEY}`
                const {data}  = await axios.post( url , {...payload , returnSecureToken: true})
                commit('setToken' , data.idToken)
                dispatch('alias/setAlias' , data.email , {root: true})
            } catch(e) {
                dispatch('message/setMessage' , {
                  title: 'Ошибка аутентификации!' , 
                  text: err(e.response.data.error.message),
                  type: 'danger'
                }, {root: true})
                throw Error('Error Auntification')
            }
        }
    }
}