<template>
    <div class="login-page">
        <n-card class="login-card" :bordered="false">
           
            <div class="header">
                <h1>Welcome Back 👋</h1>
                <p class="subtitle">
                    Login to continue shopping with <span class="brand">Clixo</span>
                </p>
            </div>

            <n-form @submit.prevent="handleLogin" :model="form" :rules="rules" ref="formRef" class="form">
               
                <n-form-item path="username">
                    <n-input v-model:value="form.username" size="large" round placeholder="Username" />
                </n-form-item>

           \
                <n-form-item path="password">
                    <n-input v-model:value="form.password" size="large" round type="password"
                        show-password-on="mousedown" placeholder="Password" />
                </n-form-item>

               
                <n-button type="primary" size="large" block round attr-type="submit" class="login-btn"
                    :loading="loading">
                    🔑 Login
                </n-button>
            </n-form>
        </n-card>
    </div>
</template>

<script setup>
import { reactive, ref } from "vue"
import { useRouter } from "vue-router"
import {
    useMessage,
    NCard,
    NForm,
    NFormItem,
    NInput,
    NButton,
} from "naive-ui"

const router = useRouter()
const message = useMessage()
const loading = ref(false)

const formRef = ref(null)
const form = reactive({
    username: "",
    password: "",
})

const rules = {
    username: { required: true, message: "Username is required", trigger: "blur" },
    password: { required: true, message: "Password is required", trigger: "blur" },
}

async function handleLogin() {
    loading.value = true
    try {
     
        if (form.username && form.password) {
           
            localStorage.setItem("accessToken", "fake-access-token")
            localStorage.setItem("userName", form.username)
            window.dispatchEvent(new Event("storage"))

            message.success(`Welcome, ${form.username}!`)
            router.push("/")
        } else {
            message.error("Invalid credentials")
        }
    } catch (err) {
        console.error(err)
        message.error("Something went wrong")
    } finally {
        loading.value = false
    }
}
</script>

<style scoped>
.login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #e9b3fb 0%, #fff1f1 100%);
    padding: 1rem;
}

.login-card {
    width: 100%;
    max-width: 420px;
    border-radius: 16px;
    padding: 2rem 2.5rem;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    background: #ffffff;
}

.header {
    text-align: center;
    margin-bottom: 1.5rem;
}

.header h1 {
    font-size: 1.8rem;
    font-weight: 700;
    color: #3b0270;
}

.subtitle {
    font-size: 1rem;
    color: #555;
}

.brand {
    color: #6f00ff;
    font-weight: 600;
}

.login-btn {
    margin-top: 1rem;
    background: #6f00ff;
    font-weight: 600;
    transition: background 0.3s ease;
}

.login-btn:hover {
    background: #3b0270;
}
</style>
