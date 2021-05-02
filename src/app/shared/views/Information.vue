<template>
  <div class="message with-nav">
    <div class="banner">
      <div class="column">
        <div class="app-text">
          <h1>Приветствую , это мой первый проект на Vue!</h1>
          <p>
            В нем используются Vue3 также такие инструменты как VueX и Vue-router , а
            главным подходом являеться composition api, в любую секунду вы можете протестировать чат и оставить свой комментарий. Весь исходный код вы можете найти по
            сыллке ниже на github.
          </p>
        </div>
        <div class="app-link">
          <a href="https://github.com/4Tezz" target="_blank">Github</a>
          <button class="btn go_to_chat" @click="$router.push('/')">Перейти к чатам</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>