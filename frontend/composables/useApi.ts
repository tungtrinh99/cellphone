import { useCookie, useRuntimeConfig, type UseFetchOptions, useFetch } from "nuxt/app"

export function useApi<T>(key: string, url: string, options: UseFetchOptions<T> = {}) {
  const userAuth = useCookie("token")
  const config = useRuntimeConfig()
  const headers = {
    "Content-Type": "application/json",
  }

  const defaults: UseFetchOptions<T> = {
    baseURL: config.public.baseURL as string,

    // cache request
    key: key,

    // set user token if connected
    headers: userAuth.value ? { ...headers, ...{ Authorization: `Bearer ${userAuth.value}` } } : { ...headers },

    onRequest({ request, options }) {
      // Set the request headers
    },
    onRequestError({ request, options, error }) {
      // Handle the request errors
    },
    onResponse({ request, response, options }) {
      // Process the response data
      return response._data
    },
    onResponseError({ request, response, options }) {
      // Handle the response errors
    },
  }

  const params = { ...defaults, ...options }

  return useFetch(url, params)
}

export function useHttpGet<T>(key: string, url: string, options: UseFetchOptions<T> = {}) {
  const params = { ...options, method: "GET" } as UseFetchOptions<T>
  return useApi(key, url, params)
}

export function useHttpPost<T>(key: string, url: string, options: UseFetchOptions<T> = {}) {
  const params = { ...options, method: "POST" } as UseFetchOptions<T>
  return useApi(key, url, params)
}

export function useHttpPut<T>(key: string, url: string, options: UseFetchOptions<T> = {}) {
  const params = { ...options, method: "PUT" } as UseFetchOptions<T>
  return useApi(key, url, params)
}

export function useHttpDelete<T>(key: string, url: string, options: UseFetchOptions<T> = {}) {
  const params = { ...options, method: "DELETE" } as UseFetchOptions<T>
  return useApi(key, url, params)
}
