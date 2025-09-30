<template>
    <header class="bg-[#3B0270] text-[#FFF1F1]">
        <div class="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">

            <div class="flex items-center gap-3 cursor-pointer" @click="goHome">
                <img src="/logo.png" alt="Clixo Logo" class="h-26 w-26 object-contain" />
                
            </div>


            <div class="flex items-center gap-3">
                <div class="nav-desktop">
                    <n-menu class="site-menu" mode="horizontal" :value="activeKey" :options="menuOptions"
                        @update:value="handleMenuClick" />
                </div>


                <div class="auth-area flex items-center gap-2">

                    <n-button v-if="!isLoggedIn" type="primary" size="small"
                        class="bg-[#6F00FF] hover:bg-[#3B0270] border-none" @click="router.push('/login')">
                        Login
                    </n-button>


                    <n-popover v-else trigger="click" placement="bottom-end">
                        <template #trigger>
                            <n-button quaternary circle class="profile-btn">
                                <n-icon size="20">
                                    <UserOutlined />
                                </n-icon>
                            </n-button>
                        </template>

                        <div class="popover-card">
                            <div class="popover-user">
                                <div class="avatar">👤</div>
                                <div class="user-meta">
                                    <div class="name">{{ userName || 'Account' }}</div>
                                    <div class="email small">View account</div>
                                </div>
                            </div>

                            <div class="popover-actions">

                                <n-button text block class="popover-action" @click="logout">Logout</n-button>
                            </div>
                        </div>
                    </n-popover>
                </div>


                <div class="nav-hamburger">
                    <n-button quaternary circle class="hamb-btn" @click="isOpen = true">
                        <n-icon size="22">
                            <MenuOutlined />
                        </n-icon>
                    </n-button>
                </div>
            </div>
        </div>


        <n-drawer v-model:show="isOpen" placement="right" width="300">
            <n-drawer-content class="drawer-content" title="Menu">
                <n-menu class="site-menu-vertical" mode="vertical" :value="activeKey" :options="menuOptions"
                    @update:value="handleMenuClick" />

            </n-drawer-content>
        </n-drawer>
    </header>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { useRouter, useRoute } from "vue-router"
import {
    NMenu,
    NDrawer,
    NDrawerContent,
    NButton,
    NIcon,
    NPopover,
} from "naive-ui"
import { MenuOutlined, UserOutlined } from "@vicons/antd"

const router = useRouter()
const route = useRoute()

const isOpen = ref(false)
const activeKey = ref(route.path || "/")

const menuOptions = [
    { label: "Home", key: "/" },
    { label: "About Us", key: "/about" },
    { label: "Products", key: "/products" },
    { label: "Contact Us", key: "/contact" }
]


const isLoggedIn = ref(false)
const userName = ref(null)



onMounted(() => {

    isLoggedIn.value = !!localStorage.getItem("accessToken")
    userName.value = localStorage.getItem("userName")
})

window.addEventListener("storage", () => {
    isLoggedIn.value = !!localStorage.getItem("accessToken")
    userName.value = localStorage.getItem("userName")
})

function handleMenuClick(key) {
    const path = typeof key === "string" ? key : key?.key ?? "/"
    activeKey.value = path
    router.push(path)
    isOpen.value = false
}

function goHome() {
    router.push("/")
    activeKey.value = "/"
}

function logout() {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("userName")
    window.dispatchEvent(new Event("storage"))
    router.push("/login")
}

</script>

<style>
.nav-desktop {
    display: none !important;
}

.nav-hamburger {
    display: inline-flex !important;
}


@media (min-width: 768px) {
    .nav-desktop {
        display: flex !important;
        align-items: center;
    }

    .nav-hamburger {
        display: none !important;
    }
}


@media (max-width: 767.98px) {
    .nav-desktop {
        display: none !important;
    }

    .nav-hamburger {
        display: inline-flex !important;
    }
}


.auth-area {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}


.login-btn,
.login-btn:hover {
    background: #6F00FF !important;
    border: none !important;
    color: #FFF !important;
}

.hamb-btn {
    color: #E9B3FB !important;
}


.profile-btn {
    color: #E9B3FB !important;
}


.popover-card {
    padding: 0.5rem;
    width: 220px;
    border-radius: 10px;
    background: #FFF1F1;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
    color: #3B0270;
}

.popover-user {
    display: flex;
    gap: 0.6rem;
    padding: 0.6rem;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.popover-user .avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #E9B3FB;
    color: #3B0270;
    font-weight: 700;
}

.popover-user .name {
    font-weight: 700;
}

.popover-user .email {
    font-size: 0.85rem;
    color: rgba(0, 0, 0, 0.6);
}

.popover-actions {
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
}

.popover-action {
    justify-content: flex-start !important;
    text-align: left !important;
    width: 100% !important;

    padding: 0.6rem 0.8rem !important;

    border-radius: 6px !important;
    color: #3B0270 !important;

    background: transparent !important;
    transition: background 0.2s ease, color 0.2s ease;
}

.popover-action:hover {
    background: #E9B3FB !important;

    color: #3B0270 !important;
}



::v-deep(.drawer-content) {
    background: #3B0270 !important;
    color: #FFF1F1 !important;
}

::v-deep(.drawer-content .n-drawer-content__title) {
    color: #E9B3FB !important;
}

::v-deep(.site-menu-vertical .n-menu-item .n-menu-item-content) {
    color: #FFF1F1 !important;
}

::v-deep(.site-menu-vertical .n-menu-item .n-menu-item-content:hover) {
    color: #E9B3FB !important;
}

::v-deep(.site-menu-vertical .n-menu-item.n-menu-item--selected .n-menu-item-content) {
    color: #6F00FF !important;
}


.mobile-auth .mobile-login {
    background: #6F00FF !important;
    color: #FFF !important;
    border: none !important;
}

.mobile-profile .mobile-action {
    justify-content: flex-start !important;
    color: #FFF1F1 !important;
}
</style>
