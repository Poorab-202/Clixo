<template>
    <div class="contact-page">
        <h1 class="title">Contact Us</h1>
        <p class="subtitle">We’d love to hear from you! Fill out the form below 👇</p>

        <n-form ref="formRef" :model="form" :rules="rules" label-placement="top" class="contact-form">

            <n-form-item label="Your Name" path="name">
                <n-input v-model:value="form.name" placeholder="Enter your full name" />
            </n-form-item>

            <n-form-item label="Email Address" path="email">
                <n-input v-model:value="form.email" placeholder="Enter your email" />
            </n-form-item>

            <n-form-item label="Message" path="message">
                <n-input v-model:value="form.message" type="textarea" placeholder="Write your message here"
                    :autosize="{ minRows: 4 }" />
            </n-form-item>

            <n-form-item>
                <n-button type="primary" @click="handleSubmit" :loading="loading">
                    Send Message
                </n-button>
            </n-form-item>
        </n-form>
    </div>
</template>

<script setup>
import { ref } from "vue"
import {
    NForm,
    NFormItem,
    NInput,
    NButton,
    useMessage
} from "naive-ui"

const formRef = ref(null)
const loading = ref(false)
const message = useMessage()

const form = ref({
    name: "",
    email: "",
    message: ""
})

const rules = {
    name: {
        required: true,
        message: "Please enter your name",
        trigger: "blur"
    },
    email: {
        required: true,
        message: "Please enter your email",
        trigger: ["blur", "input"]
    },
    message: {
        required: true,
        message: "Please enter your message",
        trigger: "blur"
    }
}

function handleSubmit() {
    formRef.value?.validate((errors) => {
        if (!errors) {
            loading.value = true
            setTimeout(() => {
                loading.value = false
                message.success("Message sent successfully! We’ll get back to you soon.")
                form.value = { name: "", email: "", message: "" }
            }, 1200)
        } else {
            message.error("Please fill all required fields correctly.")
        }
    })
}
</script>

<style scoped>
.contact-page {
    max-width: 700px;
    margin: 3rem auto;
    padding: 2rem;
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
}

.title {
    font-size: 2rem;
    font-weight: 700;
    color: #3B0270;
    text-align: center;
    margin-bottom: 0.5rem;
}

.subtitle {
    text-align: center;
    color: #666;
    margin-bottom: 2rem;
}

.contact-form {
    margin-top: 1rem;
}
</style>
