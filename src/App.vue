<template>
  <div>
    <appNavbar />
    <router-view />
    <appFooter />
  </div>
</template>

<script>
import AppNavbar from "@/components/layout/AppNavbar.vue";
import AppFooter from "@/components/layout/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppNavbar,
    AppFooter
  }
};
</script>