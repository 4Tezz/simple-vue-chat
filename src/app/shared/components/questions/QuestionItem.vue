<template>
      <div class="help-card">
      <h4 @click="questionVisible = !questionVisible">{{title}}</h4>
      <div class="help-text" v-if="questionVisible">
        <p >{{text}}</p>
      </div>
    </div>
</template>

<script>
import {ref} from 'vue'
    export default {
        setup(){
           const questionVisible = ref(false)
           return{
               questionVisible
           }
        },
        props: ['title' , 'text']
    }
</script>

<style scoped>
.help-card h4 {
    cursor: pointer;
}
</style>