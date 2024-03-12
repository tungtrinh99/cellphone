<template>
  <el-form ref="formRef" :model="dynamicValidateForm" label-width="120px" class="login-form" :rules="rules">
    <el-form-item prop="username" label="Username">
      <el-input v-model="dynamicValidateForm.username" />
    </el-form-item>
    <el-form-item prop="password" label="Password" type="password">
      <el-input v-model="dynamicValidateForm.password" />
    </el-form-item>
    <el-form-item>
      <el-checkbox v-model="isSaveLogin" label="Keep" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(formRef)">
        Submit
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref, Ref, watch } from "vue"
import { useAuth } from "@/composables/useAuth"
import type { FormInstance, FormRules } from 'element-plus'
import { useRouter, useRoute } from "vue-router"

interface RuleForm {
  username: string
  password: string
}

const { useLogin } = useAuth()
const router = useRouter()
const route = useRoute()
const redirect: Ref<string> = ref("")

watch(
  route,
  async (to) => {
    redirect.value = (to?.query?.redirect || "/") as string
  },
  { immediate: true }
)

const formRef = ref<FormInstance>()
const dynamicValidateForm = reactive<RuleForm>({
  password: '',
  username: '',
})
const rules = reactive<FormRules<RuleForm>>({
  username: [
    {
      required: true,
      message: 'Please input username',
      trigger: 'blur',
    }
  ],
  password: [
    {
      required: true,
      message: 'Please input password',
      trigger: 'blur',
    },
  ],
})
const isSaveLogin = ref<boolean>(false)
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      login()
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const login = async () => {
  try {
    await useLogin(dynamicValidateForm, isSaveLogin.value)
    router.push({
      path: redirect.value ?? "/",
    })
  } catch (e) {
    console.log(e)
  }
}

</script>
<style lang="scss" scoped>
.login-form {
  width: 300px;
  margin: 100px auto;
}
</style>
