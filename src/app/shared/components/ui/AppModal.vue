<template>
    <div class="modal-backdrop" @click="$emit('closeModal')"></div>
    <div class="modal">

        <form class="recovery-password" @submit.prevent='recoverPassword'>

            <div :class="['form-control']">
                <label for="recovery">Введите email от своего аккаунта</label>
                <input type="email" id="recovery" v-model="pass">
            </div>

            <button type="submit" class="btn submit" :disabled="isValidate">Восстановить</button>
        </form>

    </div>
</template>

<script>
import {recoverPassword} from './../../use/recovery-password-form.js'
    export default {
        emits: ['closeModal'],
        setup(props, { emit }) {

            return {...recoverPassword()}
        }
     }
</script>

<style scoped>

</style>