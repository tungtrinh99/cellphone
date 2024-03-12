import { useLoginApi } from "~/apis/user"
import { useAuthStore } from "~/stores/auth"
import { ElMessage } from "element-plus"
import { navigateTo, useCookie } from "nuxt/app"

export const useAuth = () => {
  const useLogin = async (body: any, isSaveLogin?: boolean) => {
    try {
      const data: any = (await useLoginApi(body))?.data
      if (data) {
        const token = useCookie("token", isSaveLogin ? { maxAge: 60 * 60 * 24 * 7, secure: true } : { secure: true })
        token.value = data.value?.token
        const user = {
          id: data.value?.id,
          username: data.value?.username,
          email: data.value?.email,
          firstName: data.value?.firstName,
          lastName: data.value?.lastName,
          avatarUrl: data.value?.image,
        }
        localStorage.setItem("user", JSON.stringify(user))
        useAuthStore().setUser(user)
        return data
      }
    } catch (e) {
      console.error(e)
      throw new Error("Login failed")
    }
  }

  const useLogout = async () => {
    try {
      const token = useCookie("token")
      token.value = null
      useAuthStore().resetState()
      localStorage.removeItem("user")
      navigateTo("/login")
      ElMessage.success("Logout success")
    } catch (e) {
      console.error(e)
      throw new Error("Logout failed")
    }
  }

  return {
    useLogin,
    useLogout,
  }
}
