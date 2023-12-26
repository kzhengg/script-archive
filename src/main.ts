import './style.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory} from 'vue-router'
import HomePage from './components/HomePage.vue';
import CreateScript from './components/CreateScript.vue'
import Page404 from './components/Page404.vue';
import ScriptPage from './components/ScriptPage.vue';


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
        {
            path: "/:slug",
            name: "Script",
            component: ScriptPage,
            meta: {
                title: "Script Page"
            }
        },
        {
            path: '/404',
            name: '404',
            component: Page404,
            meta: { title: "Page not found"}
          },
    ],
});

createApp(App).use(router).mount('#app')
