import { computed, ref } from 'vue'
import { useStore } from 'vuex'

export function recoverPassword() {
    const store = useStore()
    const pass = ref()
    const isValidate = computed(() => pass.value == '' || pass.value == undefined)

    const recoverPassword = () => {
        store.commit('switchModal')
        store.dispatch('recover/recoverPass' ,{'email': pass.value})
    }
    return { isValidate, pass, recoverPassword }
}