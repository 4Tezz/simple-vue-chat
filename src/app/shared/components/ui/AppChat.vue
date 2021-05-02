<template>
 <div class="chat-container">
     <div class="chat-header">
       <div class="chat-header-img">
         <img :src="chats.avatar" alt="avatar">
       </div>
       <div class="active-chat">
         <h4> {{chats.name}} </h4>
       </div>
     </div>
     <div class="chat-page">
       <div class="msg-inbox">
         <div class="chats">
           <div class="msg-page"> 
                <outgoing-chats v-for="el in messages" :key="el" :chat="el" :id="chats.id"></outgoing-chats>
                <app-print v-if="print" :avatar="chats.ourAvatar"></app-print>
           </div>
         </div>
       </div>
         <div class="msg-bottom">
             <form class="input-group" @submit.prevent="addMessage">
               <div class="form-control">
                   <textarea type="text" placeholder="Написать сообщение..." v-model="text" ></textarea>
               </div>
               <button class="btn send">Отправить</button>
             </form>
         </div>
     </div>
   </div>
</template>

<script>
import OutgoingChats from './../complement/OutgoingChats.vue'
import { computed , ref , watch , onUnmounted} from '@vue/runtime-core';
import { useStore } from 'vuex';
import AppPrint from './AppPrint.vue';
    export default {
        props: ['chats'],
        setup(props) {
            const store = useStore()
           
            const validate = computed(() => text.value !== '' && text.value !== null)
  
            const text = ref('')

            const addMessage = () => {
              if(validate.value) {
                store.commit('chatMessages/addMessage' , { id: props.chats.id, avatar: props.chats.avatar , text: text.value, name: props.chats.name })
                text.value = null
              }
            }
            watch( validate , () =>  store.commit('chatMessages/changePrints' , props.chats.id))
            onUnmounted(() => store.commit('chatMessages/unmountedPrints' , props.chats.id))
            const print = computed(() => store.getters['chatMessages/getPrints'][props.chats.ourId])
            const messages = computed(() => store.getters['chatMessages/getMessages'])
            return {messages , text , addMessage , print}
        },
        components : { OutgoingChats, AppPrint}
    }
</script>

<style scoped>

</style>