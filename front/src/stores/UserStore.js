// user store

import { defineStore, storeToRefs } from 'pinia'

export const useUserStore =  defineStore( "UserStore", {
    // statue 中定义了数据
    // 返回的数据直接通过点访问
    // 通过reset
    state: () => {
        // define data
        return {
            username: "",
            password: "",
            isAuth: false,
            avator: "",
            describe: "",
            qq: "",
            wechat: "",
            email: "",
            phone: ""
        }
    },
    actions: {
        async login() {
            const data = (await import('../mock/mushr.json')).default;
            for (let [key, value] of Object.entries(data)) {
                this[key] = value;
            }
        }
    }
})
