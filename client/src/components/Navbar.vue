<template>
    <header class="bg-navy text-beigeLight shadow-md">
        <div class="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">

            <!-- Left: Logo + Brand -->
            <div class="flex items-center gap-2 cursor-pointer" @click="goHome">
                <img src="/logo.png" alt="Clixo Logo" class="h-26 w-26" />
            </div>

            <!-- Right: Nav menu + Profile -->
            <div class="flex items-center gap-4">

                <!-- Desktop Nav -->
                <n-menu v-if="!isMobile" mode="horizontal" :value="activeKey" :options="menuOptions"
                    @update:value="handleMenuClick" class="hidden md:flex text-beigeLight" />

                <!-- Profile Icon (always visible on desktop, inside drawer for mobile) -->
                <n-button quaternary circle class="hidden md:flex">
                    <n-icon size="22">
                        <UserOutlined />
                    </n-icon>
                </n-button>

                <!-- Mobile Hamburger (only show below md) -->
                <n-button quaternary circle class="md:hidden" @click="isOpen = true">
                    <n-icon size="22">
                        <MenuOutlined />
                    </n-icon>
                </n-button>
            </div>
        </div>

        <!-- Mobile Drawer Menu -->
        <n-drawer v-model:show="isOpen" placement="right" width="240">
            <n-drawer-content title="Menu">
                <n-menu mode="vertical" :value="activeKey" :options="menuOptions" @update:value="handleMenuClick" />
                <div class="mt-4 flex justify-center">
                    <n-button quaternary circle>
                        <n-icon size="22">
                            <UserOutlined />
                        </n-icon>
                    </n-button>
                </div>
            </n-drawer-content>
        </n-drawer>
    </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"
import { useRouter, useRoute } from "vue-router"
import { NMenu, NDrawer, NDrawerContent, NButton, NIcon } from "naive-ui"
import { MenuOutlined, UserOutlined } from "@vicons/antd"

const router = useRouter()
const route = useRoute()

const isOpen = ref(false)
const activeKey = ref(route.path)
const isMobile = ref(window.innerWidth < 768)

// Menu Options
const menuOptions = [
    { label: "Home", key: "/" },
    { label: "About Us", key: "/about" },
    { label: "Products", key: "/products" },
    { label: "Contact Us", key: "/contact" }
]

// Handle navigation
function handleMenuClick(key) {
    activeKey.value = key
    router.push(key)
    isOpen.value = false
}

// Update on resize
function checkScreen() {
    isMobile.value = window.innerWidth < 768
}
onMounted(() => window.addEventListener("resize", checkScreen))
onBeforeUnmount(() => window.removeEventListener("resize", checkScreen))

function goHome() {
    router.push("/")
    activeKey.value = "/"
}
</script>

<style scoped>
/* Override menu item colors */
:deep(.n-menu-item-content) {
    color: #F1EFEC !important;
    /* beigeLight */
}

:deep(.n-menu-item-content:hover) {
    color: #D4C9BE !important;
    /* beige */
}
</style>
