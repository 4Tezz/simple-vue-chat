import { computed, watch } from '@vue/runtime-core';
import * as yup from 'yup'
import { useForm, useField } from 'vee-validate'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export function registeredForm() {
    const router = useRouter()
    const store = useStore()
    const { handleSubmit, isSubmitting, submitCount } = useForm()
    const { value: email, errorMessage: emailError, handleBlur: emailBlur } = useField('email', yup.string().trim().required('Пожалуйста введите email').email('Введите коректный email'))
    const { value: password, errorMessage: passError, handleBlur: passBlur } = useField('password', yup.string().trim().required('Пожалуйста введите пароль').min(6, 'Пароль должен содержать минимум 6 символов'))
    const { value: alias, errorMessage: aliasError, handleBlur: aliasBlur } = useField('alias', yup.string().required('Придумайте себе псевдоним'))


    const ManyAttempts = computed(() => submitCount.value >= 3)

    watch(ManyAttempts, (val) => {
        if (val) {
            setTimeout(() => {
                submitCount.value = 0
            }, 3 * 1000);
        }
    })

    const registered = handleSubmit( async (val) => {
       await store.dispatch('registr/createAccount',val)
       router.push('/auth')
    })
    return { aliasBlur, aliasError, alias, passBlur, passError, password, registered, isSubmitting, ManyAttempts, email, emailError, emailBlur }
}