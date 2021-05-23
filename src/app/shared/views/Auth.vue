<template>
  <teleport to="body">
    <app-modal v-if="modalVisible" @closeModal="changeModal"></app-modal>
  </teleport>
  <div class="container center pt-5">
    <div class="form-card center">
      <form @submit.prevent="login">
        <h1>Войдите в аккаунт</h1>
        <div :class="['form-control', 'pt-2', { invalid: eError }]">
          <label for="email">Ваш email</label>
          <input type="email" id="email" v-model="email" @blur="eBlur" />
          <small v-if="eError">{{ eError }}</small>
        </div>
        <div :class="['form-control', { invalid: pasError }]">
          <label for="password">Ваш пароль</label>
          <input
            type="password"
            id="password"
            @blur="pasBlur"
            v-model="password"
          />
          <small v-if="pasError">{{ pasError }}</small>
        </div>
        <button class="btn submit" :disabled="isSubmitting || ManyAttempts">
          Вход
        </button>
      </form>
      <div class="column">
      <a @click.prevent="changeModal" class="password">Забыли пароль?</a>
      <router-link :to="{name: 'chats'}" class="password">Вернуться на главную</router-link>
      </div>
      <hr />
      <p class="login">Если у вас нет аккаунта создайте новый</p>
      <router-link :to="{ name: 'registration' }" v-slot="navigate">
        <button class="btn registered" @click="navigate">
          Создать аккаунт
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { useLoginForm } from "./../use/login-form.js";
import AppModal from "./../components/ui/AppModal.vue";
export default {
  setup() {
    return {
      ...useLoginForm(),
    };
  },
  components: { AppModal },
};
</script>

<style scoped>
.password:hover {
  cursor: pointer;
}
.password:nth-child(1) {
  margin-bottom: 10px;
}
</style>