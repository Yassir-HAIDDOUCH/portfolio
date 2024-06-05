import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './assets/css/main.css'
import App from './App.vue'


import Home from './components/home.vue'
import Aboutus from './components/aboutus.vue'
import Projects from './components/projects.vue'
import Contact from './components/contact.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/AboutMe', component: Aboutus },
        { path: '/Projects', component: Projects },
        { path: '/ContactMe', component: Contact },
    ]
});

router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0);
    next();
});

const app = createApp(App);
app.use(router);
app.mount('#app')
