<template>
<app-message v-if="message" :title="message.title" :text="message.text" :type="message.type"/>
<router-view/>
</template>

<script>
import AppMessage from './../components/ui/AppMessage.vue'
import {useStore} from 'vuex'
import {computed , onUnmounted} from 'vue'
    export default {
        setup(){
            onUnmounted(() => store.dispatch('message/setMessage'))
            const store = useStore()
            const message = computed(() => store.getters['message/getMessage'])
            return { message}
        },
        components: {AppMessage}
    }
</script>

<style>
</style>