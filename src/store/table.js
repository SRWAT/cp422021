import { defineStore } from "pinia";

export const useTableStore = defineStore({
  id: "table",
  state: () => {
    return {
      tables : [
        {
          id: 1,
          name : "โต๊ะที่ 1",
          checkin : "16:00",
          checkout : "",
          total : 699,
          users : 2,
          status : "Ready",
          food : []
        },
        {
          id: 2,
          name : "โต๊ะที่ 2",
          checkin : "",
          checkout : "",
          total : 0,
          users : 0,
          status : "Ready",
          food : []
        },
        {
          id: 3,
          name : "โต๊ะที่ 3",
          checkin : "",
          checkout : "",
          total : 0,
          users : 0,
          status : "Ready",
          food : []
        },
        {
          id: 4,
          name : "โต๊ะที่ 4",
          checkin : "",
          checkout : "",
          total : 0,
          users : 0,
          status : "Ready",
          food : []
        },
        {
          id: 5,
          name : "โต๊ะที่ 5",
          checkin : "",
          checkout : "",
          total : 0,
          users : 0,
          status : "Ready",
          food : []
        },
        {
          id: 6,
          name : "โต๊ะที่ 6",
          checkin : "",
          checkout : "",
          total : 0,
          users : 0,
          status : "Ready",
          food : []
        },
        {
          id: 7,
          name : "โต๊ะที่ 7",
          checkin : "",
          checkout : "",
          total : 0,
          users : 0,
          status : "Ready",
          food : []
        },
        {
          id: 8,
          name : "โต๊ะที่ 8",
          checkin : "",
          checkout : "",
          total : 0,
          users : 0,
          status : "Ready",
          food : []
        },
        {
          id: 9,
          name : "โต๊ะที่ 9",
          checkin : "",
          checkout : "",
          total : 0,
          users : 0,
          status : "Ready",
          food : []
        },
        {
          id: 10,
          name : "โต๊ะที่ 10",
          checkin : "",
          checkout : "",
          total : 0,
          users : 0,
          status : "Ready",
          food : []
        },
        {
          id: 11,
          name : "โต๊ะที่ 11",
          checkin : "",
          checkout : "",
          total : 0,
          users : 0,
          status : "Ready",
          food : []
        },
        {
          id: 12,
          name : "โต๊ะที่ 12",
          checkin : "",
          checkout : "",
          total : 0,
          users : 0,
          status : "Ready",
          food : []
        }
      ]
    }
  },
  actions: {
    
  }
});
