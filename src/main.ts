import './style.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory} from 'vue-router'
import HomePage from './components/HomePage.vue';
import CreateScript from './components/CreateScript.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: HomePage,
            meta: {
              title: "Welcome",
            },
        },
        {
            path: "/create-snippet",
            name: "Create",
            component: CreateScript,
            meta: {
                title: "Create Snippet"
            }
        },
    ],
});

createApp(App).use(router).mount('#app')
