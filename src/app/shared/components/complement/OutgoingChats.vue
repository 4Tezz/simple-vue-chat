<template>
            <div class="wrapper-chat">
                           <div :class="chat.id !== id ? 'received-chats' : 'outgoing-chats'">
                <div class="outgoing-chats-msg" v-if="chat.id == id" v-delete>
                    <div class="delete__group" @click="$emit('deleteMessage', el)">Удалить</div>
                    <p> {{ chat.text }} </p>
                </div>

                <div :class="chat.id !== id ? 'received-chats-img'  : 'outgoing-chats-img'">
                 <img :src="chat.avatar">
               </div>
               
                 <div class="received-msg" v-if="chat.id !== id">
                  <div class="received-msg-inbox">
                    <p> {{ chat.text }} </p>
                  </div>
                </div>
             </div>
            </div>
</template>

<script>
    export default {
        props: ['chat' , 'id' , 'el'],
        emits: {
          deleteMessage:  null
        },
        state(props) {
            return {}
        }
    }
</script>

<style>
.wrapper-chat {
  position: relative;
  margin-top: 30px;
}
.delete__group.active {
	display: flex;
	opacity: 100%;
}

.delete__group {
  bottom: 30px;
  color: #fff;
	position: absolute;
	cursor: 	default;
	background-color: #d56666;
	width: fit-content;
	padding: 5px;
	border-radius: 2px;
	margin: 10px auto;
	opacity: 0;
	display: none;
	z-index: 5;
}
.delete__group:before {
	content: '';
   position:absolute;
   width: 14px;
   height: 14px;
   background: #d56666;
   left: 28px;
   bottom: -5px;
   z-index: -1;
   transform: rotate(45deg);
}
</style>