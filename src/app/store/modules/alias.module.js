import axios from 'axios'

export default {
    namespaced: true , 
    state() {
        return {
            alias:  localStorage.getItem('yourName')
        }
    },
    getters: {
        getAlias(state) {
            return state.alias
        }
    },
    mutations: {
        setAlias(state , value) {
            state.alias = value
            localStorage.setItem('yourName' , value)
        },
        clearAlias(state) {
            state.alias = null
            localStorage.removeItem('yourName')
        }
    },
    actions: {
       async setAlias({commit} , value) {
           const {data} = await axios.get('https://vue-with-alias-default-rtdb.firebaseio.com/alias.json')
           const alias = Object.keys(data).filter(el => data[el].email == value)
           commit('setAlias', data[alias[0]].alias)
        }
    }
}