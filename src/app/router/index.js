import { createRouter , createWebHistory } from 'vue-router'
import store from './../store/index.js'

const routes = [
    {path: '/' , name: "chats" , component: () => import('./../shared/views/Chats.vue') , meta : {
        layout: 'main',
        auth: false
    }},
    {path: '/information' , name: 'information' , component: () => import('./../shared/views/Information.vue') , meta : {
        layout: 'main',
        auth: false
    }},
    {path: '/auth' , name: 'auntification' , component: () => import('./../shared/views/Auth.vue') , meta : {
        layout: 'auth',
        auth: false
    }},
    {path: '/registration' , name: 'registration' , component: () => import('./../shared/views/Registration.vue') , meta: {
        layout: 'auth',
        auth: false
    }},
    {path: '/help' , name: 'help', component: () => import('./../shared/views/Help.vue') , meta: {
        layout: 'main', 
        auth: false
    }},
    {path: '/comments' , name: 'comments' , component: () => import('./../shared/views/Comments.vue'), meta: {
        layout: 'main' , 
        auth: true
    }}
]


const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active' , 
    linkExactActiveClass: 'active'
})

router.beforeEach( (to , _,next) => {
const requestAuth = to.meta.auth
if(requestAuth && store.getters['auth/isAuntification']){
    next()
} else if(requestAuth && !store.getters['auth/isAuntification']){
    store.dispatch('message/setMessage' , {
        type: 'danger' , 
        title: 'Для начала войдите в cвой аккаунт'
    })
    next({
        path: '/auth' , 
        query: {
            message : 'auth'
        }
    })
} else {
next()
}
})
export default router 