import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: () => import('./views/Home.vue')},
        {path: '/loop-timer', component: () => import('./views/LoopTimer.vue')},
        {path: '/:pathMatch(.*)*', component: () => import('./views/NotFound.vue')}
    ]
})

createApp(App).use(router).mount('#app')
