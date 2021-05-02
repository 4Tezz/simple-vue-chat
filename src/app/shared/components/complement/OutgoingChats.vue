<template>
             <div :class="chat.id !== id ? 'received-chats' : 'outgoing-chats'">

                <div class="outgoing-chats-msg" v-if="chat.id == id">
                    <p> {{ chat.text }} </p>
                </div>

                <div :class="chat.id !== id ? 'received-chats-img'  : 'outgoing-chats-img'">
                 <img :src="chat.avatar">
               </div>
               
                 <div class="received-msg" v-if="chat.id !== id">
                  <div class="received-msg-inbox">
                    <p> {{ chat.text }} </p>
                  </div>
                </div>
             </div>
</template>

<script>
    export default {
        props: ['chat' , 'id'],
        state(props) {
            return {}
        }
    }
</script>

<style lang="scss" scoped>

</style>