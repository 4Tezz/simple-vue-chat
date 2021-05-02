import { ref , computed, onUnmounted , onMounted} from "vue";
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

export function sendComment() {
    const store = useStore()
    const router = useRouter()
    const comment = ref('')
    const comments = computed(() => store.getters['comments/getComments'])
    const loader = ref(false)
    onMounted( async () => {
      loader.value = true
      await store.dispatch('comments/load')
      loader.value = false
    })
    onUnmounted(() => store.dispatch('message/setMessage'))
    const message = computed(() => store.getters['message/getMessage'])
    const validate = computed(() => comment.value !== '')
    const name = computed(() => store.getters['alias/getAlias'])
    const sendComment = () => {
      if(validate.value) {
        store.dispatch('comments/sendComment' , {name: name.value , text: comment.value})
        comment.value = ''
      }
    }
    const isAuth = store.getters['auth/isAuntification']
    return { comments , isAuth , login:  () => router.push('/auth') , comment , sendComment , message , loader };
}