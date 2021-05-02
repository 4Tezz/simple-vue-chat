import axios from 'axios'
import {err} from '../../shared/utils/error.js'
export default {
    namespaced: true , 
    actions :  {
        async createAccount({dispatch}, payload){
            try{
                const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.VUE_APP_FB_KEY}`
                await axios.post(url, payload)
                await axios.post(`https://vue-with-alias-default-rtdb.firebaseio.com/alias.json` , {email: payload.email , alias: payload.alias})
                dispatch('message/setMessage' , {
                    type: 'primary',
                    title: 'Заявка на создание аккаунта',
                    text: "Аккаунт успешно создан!"
                },{root: true})
            }catch(e) {
                dispatch('message/setMessage' , {
                    type: 'danger',
                    title: err(e.response.data.error.message)
                },{root: true})
               throw Error('Error Create Account')
            }
        }
    }
}