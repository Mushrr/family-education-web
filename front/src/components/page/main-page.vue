<script setup>
import { useRouter } from 'vue-router';
import { useUserStore } from '../../stores/UserStore';

const userStore = useUserStore();
const router = useRouter();

if (!userStore.isAuth) {
    router.push('/login')
}

console.log(userStore);
</script>


<template>
    
</template>

<style>
</style>
