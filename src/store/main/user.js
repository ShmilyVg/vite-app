import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'mian',
  state: () => ({
    name: '超级管理员',
  }),
  getters: {
    nameLength: (state) => state.name.length,
  },
  actions: {
    getNameInfo() {
      // 可以做异步
      // await doAjaxRequest(data);
      this.name = '获取中...'
      setTimeout(() => {
        this.name = Math.random() * 1000 + '新名字'
      }, 1000)
    },
  },
})
