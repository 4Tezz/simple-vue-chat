<template>
  <header>
    <nav class="navbar">
      <router-link to="/">
        <h3>Vue chat</h3>
      </router-link>
      <ul :class="['navbar-menu', { active: burger }]">
        <li>
          <router-link :to="{ name: 'information' }">Информация</router-link>
        </li>
        <li>
          <router-link :to="{name: 'comments'}">Комментарии</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'help' }">Помощь</router-link>
        </li>
        <li>
          <router-link :to="{name: 'chats'}">Чаты</router-link>
        </li>
        <li v-if="!isAuth">
          <a @click.prevent="login">Войти</a>
        </li>
        <li v-else>
          <a @click.prevent="logout">Выход</a>
        </li>
      </ul>
      <div :class="['burger', { active: burger }]" @click="switchBurger">
        <span></span>
      </div>
    </nav>
  </header>
</template>

<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    const isAuth = computed(() => store.getters["auth/isAuntification"]);
    const burger = computed(() => store.getters.getBurgerInfo);
    const switchBurger = () => store.commit("switchBurger");
    const logout = () => {
      store.commit('auth/logout');
      store.commit('alias/clearAlias')
      router.push("/auth");
      switchBurger();
    };
    const login = () => router.push("/auth");
    return { logout, login, burger, switchBurger, isAuth };
  },
};
</script>
