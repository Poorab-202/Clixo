<script setup>
import { NConfigProvider } from "naive-ui"
import Navbar from "./components/Navbar.vue"
import Footer from './components/Footer.vue';

const themeOverrides = {
  common: {
    primaryColor: "#6F00FF",        // Bright Purple
    primaryColorHover: "#E9B3FB",   // Light Purple
    primaryColorPressed: "#3B0270", // Dark Purple
    primaryColorSuppl: "#FFF1F1",   // Soft Pink
    textColorBase: "#FFF1F1",       // Base text color = Soft Pink
  },
  Menu: {
    itemTextColor: "#FFF1F1",          // default
    itemTextColorHover: "#E9B3FB",     // hover
    itemTextColorActive: "#6F00FF",    // active
    itemTextColorSelected: "#6F00FF",  // selected
    itemColorHover: "transparent",     // remove gray hover background
    itemColorActive: "transparent",
    itemColorActiveHover: "transparent",
  },
  Button: {
    textColor: "#FFF1F1",
    colorPrimary: "#6F00FF",          // Order Now button bg
    colorHoverPrimary: "#3B0270",     // hover = dark purple
    colorPressedPrimary: "#E9B3FB",   // pressed = light purple
    borderRadius: "8px",
    fontWeight: "600"
  }
}
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <Navbar />
    <router-view />
    <Footer></Footer>
  </n-config-provider>
</template>
