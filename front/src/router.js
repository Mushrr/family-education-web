import * as VueRouter from 'vue-router';
import LoginRegistryPage from './components/page/login-registry-page.vue'
import MainPage from './components/page/main-page.vue'
import StudentDetail from './components/student-detail.vue'
import RequireDetail from './components/require-detail.vue'

const routes = [
    { path: '/login', component: LoginRegistryPage }, // 登录
    { path: '/', component:  MainPage}, // 主界面
    { path: '/studetail:sid', component: StudentDetail }, // 学生详情
    { path: '/request:rid', component: RequireDetail } // 需求详情
]

const router = VueRouter.createRouter({
    routes: routes,
    history: VueRouter.createWebHistory()
})

export default router
