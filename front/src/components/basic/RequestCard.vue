<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: String,
  grade: String,
  price: String,
  describe: String,
  // requirement: String,
  address: String,
  requireId: String,
});
</script>

<template>
  <div
    class="
      grid
      p-5
      ml-auto
      mr-auto
      w-80%
      b-rd-5
      bg-gray-200
      ring
      grid-cols-5 grid-rows-4
      transition-all
      duration-300
      hover:transition-all
      hover:ease-in-out
      hover:shadow-xl
      hover:duration-300
      select-none
    "
  >
    <div
      class="
        grid-col-start-1 grid-col-end-4 grid-row-start-1 grid-row-end-2
        text-xl
        underline
      "
    >
      {{ title }}
    </div>
    <div
      class="
        grid-col-start-4 grid-col-end-6 grid-row-start-1 grid-row-end-2
        text-sm 
      "
    >
      <div class="pt-1 flex flex-row items-center justify-center">
        <div class="i-twemoji-student text-size-5"></div>
        {{ grade }}
      </div>
    </div>
    <div
      class="
        grid-col-start-5 grid-col-end-6 grid-row-start-4 grid-row-end-5
        text-center
      "
    >
      <div class="flex flex-row items-center">
        <div class="i-ic-round-currency-yuan"></div>
        {{ price }}
      </div>
    </div>
    <div
      class="
        grid-col-start-1 grid-col-end-4 grid-row-start-3 grid-row-end-4
        pt-2
      "
    >
      {{ describe }}
    </div>
    <div
      class="grid-col-start-1 grid-col-end-4 grid-row-start-4 grid-row-end-5"
    >
      <div class="flex flex-row items-center text-gray-500">
        <div class="i-ic-baseline-location-on text-black"></div>
        {{ address }}
      </div>
    </div>
  </div>
</template>

<style>
</style>
