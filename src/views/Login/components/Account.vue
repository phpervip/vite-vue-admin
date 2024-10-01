<template>

  <el-form ref="loginFormRef" :model="login.form" :rules="login.rules" status-icon size="large"
    class="login-content-form" @keyup.enter="submit">
    <el-form-item prop="userName">
      <el-input v-model="login.form.userName" placeholder="admin">
        <template #prefix>
          <ft-icon name="el-icon User" size="20px"></ft-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input v-model="login.form.password" placeholder="123456" show-password>
        <template #prefix>
          <ft-icon name="el-icon Unlock" size="20px"></ft-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-form-item prop="captcha">
        <el-input v-model="login.form.captcha" placeholder="验证码">
          <template #prefix>
            <ft-icon name="el-icon lock" size="20px"></ft-icon>
          </template>
        </el-input>
        <div class="login-captcha" v-html="codeHtml" @click="getCode"></div>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="login.form.rememberMe">记住我</el-checkbox>
      </el-form-item>
      <el-button type="primary" class="login-content-submit" round @click="submit" :loading="login.loading">
        <span>登 录</span>
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { useUserStore } from '@/pinia'
import { onMounted } from 'vue'
const codeHtml = ref()
const login = reactive({
  form: {
    userName: '',
    password: '',
    captcha: '',
    rememberMe: false
  },
  rules: {
    userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
    captcha: [{ required: true, message: '验证码不能为空', trigger: 'change' }]
  },
  loading: false
})
const loginFormRef = ref()
const router = useRouter()
const userStore = useUserStore()
onMounted(() => {
  getCode()
})
const submit = () => {
  login.loading = true
  loginFormRef.value
    .validate()
    .then(() => {
      userStore
        .login(login.form)
        .then(res => {
          router.push({ path: '/welcome' })
        })
        .finally(() => {
          console.log(123)
          login.loading = false
        })
    })
    .catch(() => {
      login.loading = false
    })
}
const getCode = () => {
  codeHtml.value = ''
}
</script>

<style scoped lang="scss">
.login-content-form {
  margin-top: 20px;

  :deep(.el-input) {
    --el-border-color: #8c8c8c;
    --el-input-hover-border-color: #8c8c8c;

    .el-input__wrapper {
      background-color: transparent;
    }
  }

  .login-content-submit {
    width: 100%;
    height: 60px;
    border-radius: 8px;
    letter-spacing: 2px;
    font-weight: 300;
    margin-top: 35px;
    font-size: 22px;
    font-weight: bold;
  }
}

.login-captcha {
  width: 33%;
  height: 38px;
  float: right;
  box-sizing: border-box;
  border: 1px solid #bebebe;

  svg {
    cursor: pointer;
    vertical-align: middle;
    height: 100%;
    width: 100%;
  }
}
</style>