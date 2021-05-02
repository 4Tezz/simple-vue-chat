<template>
  <div class="content-window">
    <div :class="['card-message' , type]">
      <h3>{{ title }}</h3>
      <p v-if="text">{{text}}</p>
    </div>
  </div>
</template>

<script>
export default {
    props: ['title' , 'text' , 'type']
}
</script>

<style scoped>
</style>