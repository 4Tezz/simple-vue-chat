import {useRouter} from 'vue-router'
import * as yup from 'yup'
import { useStore } from "vuex";
import {useForm , useField} from 'vee-validate'
import { watch , computed } from 'vue'
export function useLoginForm() {
    const store = useStore();
    const modalVisible = computed(() => store.getters["getModal"]);
    const { handleSubmit , isSubmitting , submitCount } = useForm()
    const router = useRouter()
    
    const {value: email , errorMessage : eError , handleBlur: eBlur} = useField('email',
        yup
        .string()
        .trim()
        .required('Пожалуйста введите email')
        .email('Введите коректный email')
    )
 
    const {value: password , errorMessage: pasError , handleBlur: pasBlur} = useField('password' , 
        yup
        .string()
        .trim()
        .required('Пожалуйста введите пароль')
        .min(6 , 'Минимальная длина пароля 6 символов')
    )

    const ManyAttempts = computed(() => submitCount.value >= 3)
    watch(ManyAttempts , (value) => {
        if(value) {
            setTimeout(() => {
             submitCount.value = 0
            },5000)
        }
    })
    const changeModal = () => store.commit("switchModal")
    const login = handleSubmit(async (val) =>{
        await store.dispatch('auth/login' , val)
         router.push('/information')
    })
    return {ManyAttempts , login , isSubmitting , email , eError , eBlur , password ,pasError , pasBlur ,  modalVisible, changeModal,}
}