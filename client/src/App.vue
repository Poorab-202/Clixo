<script setup>
import { NConfigProvider } from 'naive-ui'
import { themeOverrides } from './assets/theme'
import Navbar from "./components/Navbar.vue"
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <Navbar />
    <router-view />
  </n-config-provider>
</template>

<style scoped></style>
