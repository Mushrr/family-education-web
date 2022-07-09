<script setup>
import { useUserStore } from '../../stores/UserStore';
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
// import {md5} from 'md5';
const userStore = useUserStore();
const router = useRouter();
// 

let account = ref(null);
let password = ref(null);

function logins() {
    const useraccount = account.value.value;
    const pwd = password.value.value; 
    const { isAuth } = storeToRefs(userStore);
    // console.log(isAuth);
    isAuth = true;
    console.log({
        useraccount,
        pwd
    })
}

onMounted(() => {
    // 此处可以访问useraccount
    logins();
    // router.push('/');
})


</script>


<template>
    <div class="h-100vh bg-white grid justify-center items-center">
        <div class="md:h-30vh md:w-40vw md:bg-blue md:border-rd-5 h-20vh w-70vw border-rd-5 bg-red p-10 grid
                    grid-rows-3 grid-cols-[1.25rem_minmax(0,_1fr)] gap-4">
            <div class="text-center grid grid-col-start-1 grid-col-end-3 select-none flex items-center justify-center"><span class="i-twemoji-star c-yellow"></span>Family Education</div>
            <div class="i-carbon-account text-size-5"></div>
            <input ref="account" type="text" class="h-6 b-rd-5 pl-4 text-size-1 border-none focus:ring-2 focus:ring-blue-100"/>
            <div class="i-carbon-password text-size-5"></div>
            <input ref="password" type="password" class="h-6 b-rd-5 pl-4 text-size-1 border-none focus:ring-2 focus:ring-blue-100"/>
            <div class="grid-col-start-1 grid-col-end-3 grid grid-cols-2 justify-items-center content-center">
                <button class="select-none w-60% b-rd-5 border-none hover:c-white hover:bg-#13c5ab"
                    @click="registry">注册</button>
                <button class="select-none w-60% b-rd-5 border-none hover:c-white hover:bg-#13c5ab"
                    @click="logins">登录</button>
            </div>
        </div>
    </div>
</template>

<style>
</style>
