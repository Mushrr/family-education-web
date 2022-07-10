<script setup>
// data 
import { useRequestStore } from '../../stores/RequestStore';
import RequestCard from '../basic/RequestCard.vue'
import { storeToRefs } from 'pinia';

const requestStore = useRequestStore(); // 存储

console.log(requestStore.requestList.requests);
</script>


<template>
  <div class="w-70vw">
    <div class="flex flex-row text-2xl text-center pt-1 shadow-xl">
      <div class="flex-1 flex-grow bg-#dbfee9 mr-10px ml-10 b-rd-5
                 font-sans ring">需求</div>
      <div class="flex-1 flex-grow bg-#fefcdb b-rd-5 ring
                  ">家教</div>
      <div class="flex-1 flex-grow ml-10 mr-10 flex-grow-0 b-rd-50% shadow
                  hover:rotate-180 hover:transition-all transition-all
                  duration-300 ease-in-out hover:ease-in-out hover:duration-300
                  mb-1">
        <div class="i-carbon-add text-size-10"></div>
      </div>
    </div>
    <div class="b-dashed b-gray b-1 mt-1 w-95% ml-auto mr-auto"></div>
    <div class="grid grid-cols-2 gap-10 overflow-y-auto h-90vh scrollbar">
        <!-- 使用组件切换 -->
        <template v-for="req of requestStore.requestList.requests" :key="req">
            <RequestCard
              :title="req.title" 
              :grade="req.grade"
              :price="req.price"
              :address="req.address"
              :describe="req.describe"
              :requireId="req.reqId"
            >
            </RequestCard>
        </template>
    </div>
  </div>
</template>


<style>
</style>
