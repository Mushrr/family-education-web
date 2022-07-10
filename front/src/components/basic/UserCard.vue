<script setup>
import { defineProps, defineEmits } from "vue";
import gsap from 'gsap';

const props = defineProps({
  username: String,
  descripbe: String,
  email: String,
  phone: String,
  qq: String,
  wechat: String,
  avator: String,
});

const emits = defineEmits(["changeCard"])

function minimizeUserCard() {
    // 最小化用户卡片
    // 此时可以访问最小元素
    const tween = gsap.timeline(); // 创造一个时间线条
    console.log("状态更新")
    tween.to('#userinfo', {
        width: "0vw",
        x: "-50vw",
        duration: 2,
        display: "none",
        ease: 'power2'
    })
}




</script>



<template>
  <div id="close" class="position-absolute i-carbon-close-outline select-none text-xl p-1
                         hover:transition-all transition-all hover:rotate-180 rotate-180"
        @click="[minimizeUserCard, $emit('changeCard')]">aa</div>
  <div id="userinfo">
    <div
      class="
        w-30vw
        h-100vh
        bg-blue-100
        grid
        grid-cols-[20px_minmax(0,_1fr)]
        items-center
        b-rd-rt-5 b-rd-rb-5
        shadow-lg
      "
    >
      <div class="content-center m-auto grid-col-start-1 grid-col-start-2">
        <img :src="avator" class="b-rd-50% h-15vw w-15vw" />
      </div>
      <div
        class="
          text-2xl text-center
          font-mono
          underline
          grid-col-start-1 grid-col-start-2
        "
      >
        {{ username }}
      </div>
      <div
        class="
          text-gray-500 text-center
          font-mono
          underline
          pl-10
          pr-10
          justify-center
          grid-col-start-1 grid-col-start-2
          flex
          items-center
        "
      >
        <span class="i-ic-round-push-pin text-size-5 c-black">a</span
        >{{ descripbe }}
      </div>
      <div
        class="
          text-center
          font-mono
          text-0.1rem
          grid-col-start-1 grid-col-start-2
          justify-center
          flex
          items-center
        "
      >
        <span class="i-ic-round-email text-gray-500 text-size-5">a</span
        >{{ email }}
      </div>
      <div
        class="
          font-mono
          justify-center
          grid-col-start-1 grid-col-start-2
          flex
          items-center
          content-center
        "
      >
        <span class="i-ic-round-wechat c-green text-size-5">a</span>{{ wechat }}
      </div>

      <div
        class="
          font-mono
          justify-center
          grid-col-start-1 grid-col-start-2
          flex
          items-center
          content-center
        "
      >
        <span class="i-twemoji-penguin text-size-5">a</span>{{ qq }}
      </div>
      <div
        class="
          font-mono
          justify-center
          grid-col-start-1 grid-col-start-2
          flex
          items-center
          content-center
        "
      >
        <span class="i-ic-round-phone-android text-size-5">a</span>{{ phone }}
      </div>
    </div>
  </div>
</template>

<style>
</style>
