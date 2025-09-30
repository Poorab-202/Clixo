<script setup>
import { NConfigProvider, NMessageProvider } from "naive-ui"
import Navbar from "./components/Navbar.vue"
import Footer from './components/Footer.vue';

const themeOverrides = {
  common: {
    primaryColor: "#6F00FF",
    primaryColorHover: "#E9B3FB",
    primaryColorPressed: "#3B0270",
    primaryColorSuppl: "#FFF1F1",
    textColorBase: "#FFF1F1",
  },
  Menu: {

    itemTextColor: "#FFF1F1",
    itemTextColorHover: "#E9B3FB",
    itemTextColorActive: "#6F00FF",
    itemTextColorSelected: "#6F00FF",
    itemTextColorChildActive: "#6F00FF",
    itemTextColorChildSelected: "#6F00FF",


    itemColor: "transparent",
    itemColorHover: "#3B0270",
    itemColorActive: "transparent",
    itemColorActiveHover: "#3B0270",
    itemColorSelected: "transparent",
    itemColorChildActive: "transparent",
    itemColorChildHover: "#3B0270",
    itemColorChildSelected: "transparent",


    borderColorHorizontal: "#E9B3FB",
  },
  Drawer: {
    color: "#3B0270",
    textColor: "#FFF1F1",
    titleTextColor: "#E9B3FB",
    headerColor: "#3B0270",
    footerColor: "#3B0270",
  },
  Button: {
    textColor: "#FFF1F1",
    colorPrimary: "#6F00FF",
    colorHoverPrimary: "#3B0270",
    colorPressedPrimary: "#E9B3FB",
    borderRadius: "8px",
    fontWeight: "600"
  }
}


</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-message-provider>
      <Navbar />
      <router-view />
      <Footer></Footer>
    </n-message-provider>
  </n-config-provider>
</template>
