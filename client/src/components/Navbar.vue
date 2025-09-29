<template>
    <header class="bg-[#3B0270] shadow-md">
        <div class="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
           
            <div class="flex items-center gap-2 cursor-pointer" @click="goHome">
                <img src="/logo.png" alt="Clixo Logo" class="h-26 w-26 object-contain" />
            </div>

            
            <div class="flex items-center gap-4">
                
                <n-menu class="site-menu hidden md:flex" mode="horizontal" :value="activeKey" :options="menuOptions"
                    @update:value="handleMenuClick" />

               
                <n-button quaternary circle class="hidden md:flex text-[#E9B3FB]">
                    <n-icon size="22">
                        <UserOutlined />
                    </n-icon>
                </n-button>

                <n-button quaternary circle class="md:hidden text-[#E9B3FB]" @click="isOpen = true">
                    <n-icon size="22">
                        <MenuOutlined />
                    </n-icon>
                </n-button>
            </div>
        </div>

        <n-drawer v-model:show="isOpen" placement="right" width="240">
            <n-drawer-content title="Menu">
                <n-menu class="site-menu" mode="vertical" :value="activeKey" :options="menuOptions"
                    @update:value="handleMenuClick" />
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
import { ref } from "vue"
import { useRouter, useRoute } from "vue-router"
import { NMenu, NDrawer, NDrawerContent, NButton, NIcon } from "naive-ui"
import { MenuOutlined, UserOutlined } from "@vicons/antd"

const router = useRouter()
const route = useRoute()

const isOpen = ref(false)
const activeKey = ref(route.path)

const menuOptions = [
    { label: "Home", key: "/" },
    { label: "About Us", key: "/about" },
    { label: "Products", key: "/products" },
    { label: "Contact Us", key: "/contact" }
]

function handleMenuClick(key) {
    activeKey.value = key
    router.push(key)
    isOpen.value = false
}

function goHome() {
    router.push("/")
    activeKey.value = "/"
}
</script>


