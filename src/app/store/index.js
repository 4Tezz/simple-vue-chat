import {createStore} from 'vuex'
import auth from './modules/auth.module.js'
import message from './modules/message.model.js'
import registr from './modules/regist.module.js'
import recover from './modules/recovery.password.module.js'
import alias from './modules/alias.module.js'
import comments from './modules/comments.module.js'
import chatMessages from './modules/chat.message.module.js'
const store = createStore({
state(){
    return {
    burgerActive: false,
    modalRecover: false   
    }
},
getters: {
    getBurgerInfo(state){
        return state.burgerActive
    },
    getModal(state) {
        return state.modalRecover
    }
},
mutations: {
    switchBurger(state) {
        state.burgerActive = !state.burgerActive
    },
    switchModal(state) {
        state.modalRecover = !state.modalRecover
    }
},
modules: {
    auth,
    message,
    registr,
    recover,
    alias,
    comments,
    chatMessages
}
})


export default store