export default {
    namespaced: true , 
    state() {
        return {
            messages: [ 
                {id: 'chat1' , avatar: 'https://shapka-youtube.ru/wp-content/uploads/2020/12/man-ava4.jpg' , text: 'Привет , чат работает' , name: 'Alex'},
                {id: 'chat2' , avatar: 'https://klike.net/uploads/posts/2019-03/1551514041_16.jpg' , text: 'Да , ты можешь отправлять мне сообщения ' , name: 'Other users'},
                {id: 'chat1' , avatar: 'https://shapka-youtube.ru/wp-content/uploads/2020/12/man-ava4.jpg' , text: 'Это круто' , name: 'Alex'},
            ],
            prints : {
                chat1: false, 
                chat2: false
            }
        } 
    },
    getters: {
        getMessages(state) {
            return state.messages
        },
        getPrints(state) {
            return state.prints
        }
    },
    mutations: {
        addMessage(state, value) {
            state.messages.push(value)
        },
        changePrints(state, value) {
            state.prints[value] = !state.prints[value]
            console.log(state.prints);
        },
        unmountedPrints(state, value) {
            state.prints[value] = false
        }
    }
}