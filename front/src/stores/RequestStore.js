import { defineStore } from "pinia";
import jsonData from '../mock/request.json'

export const useRequestStore = defineStore('RequestStore', {
    state: () => {
        return {
            requestList: jsonData
        }
    },
    actions: {
        // fill: () => {
        //     const jsonData = await import('../../mock/request.json');
        //     console.log(jsonData);
        // }
    }
})
