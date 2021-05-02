<template>
  <div class="container center pt-5">
    <div class="form-card center">
      <h1>Регистрация</h1>
      <form @submit.prevent="registered">

        <div :class="['form-control', 'pt-2' , {invalid: emailError}]">
          <label for="email">Ваш email</label>
          <input type="email" id="email" v-model="email" @blur="emailBlur"/>
          <small v-if="emailError"> {{emailError}} </small>
        </div>

        <div :class="['form-control' , {invalid: passError}]">
          <label for="password">Придумайте пароль</label>
          <input type="text" id="password" @blur="passBlur" v-model='password'/>
          <small v-if="passError"> {{passError}} </small>
        </div>

        <div :class="['form-control',{invalid: aliasError}]">
          <label for="nickname">Придумайте псевдоним</label>
          <input type="text" id="nickname" @blur="aliasBlur" v-model="alias"/>
          <small v-if="aliasError"> {{aliasError}} </small>
        </div>

        <button class="btn submit" type="submit" :disabled="isSubmitting || ManyAttempts">Создать</button>
      </form>
      <p>
        Если у вас уже есть аккаунт вы можете
        <router-link :to="{name: 'auntification'}" class="create">войти</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import {registeredForm} from './../use/registration-form.js'
export default {
  setup() {
    return {...registeredForm()}
  }
};
</script>

<style lang="scss" scoped>
</style>