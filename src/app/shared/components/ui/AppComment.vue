<template>
                  <li class="comment-item">
                <div class="main-content-comment">
                 <div class="avatar-comment">
                  <img src="./../../../../assets/avatar_anonim.png" alt="avatar">
                </div>
                <div class="comment-text">
                     <h3> {{comment.name}} </h3>
                 <p> {{comment.text}} </p>
                </div>
                </div>
               </li>
</template>

<script>
    export default {
      props: ['comment']
    }
</script>

<style lang="scss" scoped>

</style>