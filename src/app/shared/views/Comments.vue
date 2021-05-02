<template>
<AppMessage v-if="message" :title="message.title" :type="message.type" class="pt-5"/>
  <div class="message with-nav">
    <div class="wrapper">
    <div class="auth-comment" v-if="!isAuth">
      <h3>Прежде чем оставить комментарий войдите в аккаунт</h3>
      <button class="btn submit" @click="login">Войти</button>
    </div>

    <div class="send-comment" v-else>
      <h2>Ваш комментарий</h2>
      <form class="pt-1" @submit.prevent="sendComment">
        <div class="form-control">
          <label for="comment">Оставьте комментарий</label>
          <textarea placeholder="Ваш комментарий" v-model="comment"></textarea>
        </div>
        <button class="btn go_to_chat" type="submit">Отправить</button>
      </form>
    </div>

    <div class="commentaries">
      <h2>Комментарии других пользователей</h2>
       <div class="comments pt-5" v-if="loader">
        <app-loader></app-loader>
       </div>
      <div class="comments" v-else>
        <ul class="list-comment">
          <app-comment :comment="el" v-for="el in comments" :key="el"></app-comment>
        </ul>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import AppLoader from './../components/ui/AppLoader.vue'
import AppMessage from './../components/ui/AppMessage.vue'
import AppComment from "./../components/ui/AppComment.vue"
import {sendComment} from './../use/send-comment.js'
export default {
  setup() {
  return {...sendComment()}
  },
  components: { AppComment , AppMessage , AppLoader },
};
</script>

<style scoped>
.pt-5 {
  margin-top: 80px;
  right: 30%;
}
@media screen and (max-width: 680px){
  .pt-5 {
    right: 0;
  }
}
.comments h3 {
  color: #99a3ff;
  text-align: center;
}
</style>