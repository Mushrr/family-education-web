<script setup>
import { useUserStore } from '../../stores/UserStore';
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import userData from '../../mock/mushr.json';
import { objectEntries } from '@antfu/utils';
// import {md5} from 'md5';
const userStore = storeToRefs(useUserStore());
const router = useRouter();
// 

let account = ref(null);
let password = ref(null);

function logins() {
    // const useraccount = account.value.value;
    // const pwd = password.value.value; 
    // // const { isAuth } = storeToRefs(userStore);
    // // // console.log(isAuth);
    // // isAuth.value = true;

    for (let [key, value] of Object.entries(userData)) {
        userStore[key].value = value;
    }

    // console.log({
    //     useraccount,
    //     pwd
    // })
    // console.log(userStore);
    router.push('/');
}

onMounted(() => {
    // 此处可以访问useraccount
    // logins();
    // router.push('/');
})


</script>


<template>
    <div class="h-100vh bg-white bg-center grid justify-center items-center bg-no-repeat bg-cover"
        style="background-image: url('https://pica.zhimg.com/80/v2-573ac3e25de03fad9c32add5a05e5cfc_720w.jpg')">
        <div class="md:h-30vh md:w-40vw md:bg-blue md:border-rd-5 h-20vh w-70vw border-rd-5 bg-red p-10 grid
                    grid-rows-3 grid-cols-[1.25rem_minmax(0,_1fr)] gap-4 text-xl">
            <div class="text-center grid grid-col-start-1 grid-col-end-3 c-white select-none flex items-center justify-center"><span class="i-twemoji-star c-yellow"></span>Family Education</div>
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
