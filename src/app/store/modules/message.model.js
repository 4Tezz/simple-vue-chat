export default {
    namespaced: true,
    state() {
        return {
            message: null
        }
    },
    getters: {
        getMessage(state) {
            return state.message
        }
    },
    mutations: {
        setMessage(state , value) {
         state.message = value
        },
        clearMessage(state) {
            state.message = null
        }
    },
    actions: {
        setMessage({ commit }, payload) {
            commit('setMessage', payload)
            setTimeout(() => {
                commit('clearMessage')
            }, 6 * 1000)
        }
    }
}