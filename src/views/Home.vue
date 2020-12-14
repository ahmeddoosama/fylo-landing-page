<template>
  <div class="home">
    <!-- import Header Component -->
    <appHeader />
  </div>
</template>

<script>
// Import Components
import appHeader from "../components/layout/AppHeader";

export default {
  name: "Home",
  components: {
    appHeader
  }
};
</script>
