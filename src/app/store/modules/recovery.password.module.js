import axios from 'axios'
import {err} from '../../shared/utils/error.js'
export default {
    namespaced: true , 
    actions : {
        async recoverPass({dispatch} , payload){
            try{
                console.log(payload);
                const url = `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${process.env.VUE_APP_FB_KEY}`
                await axios.post(url , {"requestType":"PASSWORD_RESET", ...payload})
                dispatch('message/setMessage' , {title: 'Письмо отправлено на вашу почту' , type: 'primary'} , {root: true})
            }catch(e) {
                dispatch('message/setMessage' , {
                    title: err(e.response.data.error.message),
                    type: 'danger'
                    } , {root: true})
            }
        }
    }
}