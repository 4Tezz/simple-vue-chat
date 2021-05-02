<template>
  <component :is="layout + '-layout'" v-cloak></component>
</template>

<script>
import AuthLayout from "./shared/layout/AuthLayout.vue";
import MainLayout from "./shared/layout/MainLayout.vue";
import { useRoute } from "vue-router";
import { computed , watch} from "vue";
export default {
  components: { AuthLayout, MainLayout },
  setup() {
    const route = useRoute();
    const layout = computed(() => route.meta.layout);
    watch(layout, () => layout.value == "main" ? document.querySelector("body").classList.add('main') : document.querySelector("body").classList.remove('main'));
    return {
      layout,
    };
  },
};
</script>

<style>
[v-cloak] {
  display: none;
}
</style>