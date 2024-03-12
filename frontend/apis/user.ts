import { useHttpPost } from "@/composables/useApi"

export const useLoginApi = (body: any) => {
  return useHttpPost("login", "/auth/login", {
    body,
  })
}

export const useRegisterApi = (body: any) => {
  return useHttpPost("register", "/auth/register", {
    body,
  })
}

export const useLogoutApi = () => {
  return useHttpPost("logout", "/auth/logout")
}
