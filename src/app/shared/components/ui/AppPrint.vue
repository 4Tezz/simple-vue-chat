<template>
  <div class="received-chats">
    <div class="received-chats-img">
      <img :src="avatar" />
    </div>
    <div class="received-msg">
      <div class="received-msg-inbox">
        <div class="sc-typing-indicator">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['avatar']
};
</script>

<style  scoped>
</style>