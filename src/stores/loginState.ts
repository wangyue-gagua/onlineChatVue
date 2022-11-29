import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLoginStateStore = defineStore('loginState', () => {
  const isLoggedIn = ref(false)
  const login = () => {
    isLoggedIn.value = true
  }
  const logout = () => {
    isLoggedIn.value = false
  }
  return { isLoggedIn, login, logout }
})