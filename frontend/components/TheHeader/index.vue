<template>
  <div class="header">
    HeaderLogo
    <div class="box-info">
      {{ user?.username }}
      <img v-if="user?.avatarUrl" class="user-avatar" :src="user?.avatarUrl">
    </div>
    <div class="box-button">
      <CButton v-if="!user" class-name="button-logout" type="primary" @on-click="$router.push({ path: '/login' })">
        Login
      </CButton>
      <CButton v-else class-name="button-logout" type="danger" @on-click="logout">
        Logout
      </CButton>
    </div>
  </div>
</template>
<script setup lang="ts">
import CButton from "@/components/atoms/CButton.vue"
import { useAuth } from "~/composables/useAuth"
import { useAuthStore } from "@/stores/auth"
import { storeToRefs } from "pinia"

const { useLogout } = useAuth()
const authStore = useAuthStore()
const { user } = storeToRefs(authStore)
const logout = () => {
  useLogout()
}
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 20px;
  border-bottom: 1px solid #333333;

  .box-info {
    display: flex;
    align-items: center;
    gap: 10px;

    .user-avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 1px solid #333333;
    }
  }

  .box-button {
    display: flex;
    align-items: center;
    gap: 12px;
  }
}
</style>
