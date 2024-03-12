import { defineStore } from 'pinia'
import { ref } from 'vue'
interface User {
  id: string,
  email: string,
  username: string,
  firstName: string,
  lastName: string,
  avatarUrl: string
}
export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  // const isLoggedIn = computed(() => !!token.value)

  const setUser = (newUser: User) => {
    user.value = newUser
  }

  const resetState = () => {
    user.value = null
  }

  return {
    user,
    // isLoggedIn,
    setUser,
    resetState
  }
})
