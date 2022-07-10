<script setup>
import { useRouter } from "vue-router";
import { useUserStore } from "../../stores/UserStore";
import { storeToRefs } from "pinia";
import UserCard from "../basic/UserCard.vue";
import MainBoard from "../basic/MainBoard.vue";

const userStore = storeToRefs(useUserStore());
const router = useRouter();

if (!userStore.isAuth.value) {
  console.log("从/ 到 /login");
  router.push("/login");
}

console.log(userStore);


function updata() {
    console.log("检测到变化")
}
</script>


<template>
  <div flex>
    <!-- 左侧固定一个UserCard -->
    <UserCard
      :username="userStore.username.value"
      :descripbe="userStore.describe.value"
      :email="userStore.email.value"
      :qq="userStore.qq.value"
      :wechat="userStore.wechat.value"
      :phone="userStore.phone.value"
      :avator="userStore.avator.value"
      @change-card="updata"
    ></UserCard>
    <MainBoard>

    </MainBoard>
  </div>
</template>

<style>
</style>
