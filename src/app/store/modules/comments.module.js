import axios from './../../axios/request.js'
import store from './../index.js'
export default {
    namespaced: true, 
    state() {
        return {
            comments: []
        }
    },
    mutations : {
        setComment(state, comment){
            state.comments = comment
        },
        addComment(state, comment){
            state.comments.push(comment)
        }
    },
    getters: {
      getComments(state) {
          return state.comments
      }
    },
    actions: {
       async sendComment(_, value) {
            try {
                const token = store.getters['auth/token']
                await axios.post(`/comments.json?auth=${token}` , value)
                store.commit('comments/addComment' , value)
                store.dispatch('message/setMessage' , {
                    title: "Комментарий успешно отправлен!",
                    type: 'primary'
                }, {root: true})
            } catch(e) {
                store.dispatch('message/setMessage' , {
                    title: "Ошибка в отправке комментария!",
                    type: 'danger'
                }, {root: true})
                throw Error('Error Comments')
            }
        },
      async load({commit , dispatch}) {
          try {
            const token = store.getters['auth/token']
            const {data} = await axios.get(`/comments.json?auth=${token}`)
            const comment = Object.keys(data).map(el => ({...data[el]}))
            commit('setComment' ,comment)
          }catch(e) {
             dispatch('message/setMessage' , {
                title: e.message,
                type: 'danger'
            }, {root: true})
            throw Error('Error Comments')
          }
      }
    }
}