<template>
<div class="message with-nav">
  <div class="wrapper">
     <app-chat :chats="el" v-for="el in chats" :key="el"></app-chat>
  </div>
</div>
</template>

<script>
import AppChat from './../components/ui/AppChat.vue'
import {ref} from 'vue'
    export default { 
      setup() {
        const chats = ref([
          {id: 'chat1' , avatar: 'https://shapka-youtube.ru/wp-content/uploads/2020/12/man-ava4.jpg' , name: 'Alex' , ourId: 'chat2' , ourAvatar: 'https://klike.net/uploads/posts/2019-03/1551514041_16.jpg' },
          {id: 'chat2' , avatar: 'https://klike.net/uploads/posts/2019-03/1551514041_16.jpg' , name: 'Other users' , ourId: 'chat1' , ourAvatar: 'https://shapka-youtube.ru/wp-content/uploads/2020/12/man-ava4.jpg'}
        ])
        return {chats}
      },
      components: {AppChat}
    }
</script>

<style lang="scss" scoped>

</style>