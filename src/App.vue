<template>
  <div id="app">
    <NavBar
      v-if="this.$router.currentRoute.name != 'Login'"
      :showBack="this.$router.currentRoute.name != 'Orders'"
    />
    <transition name="routes">
      <router-view />
    </transition>
  </div>
</template>

<script>
import NavBar from "@/components/menu/navbar/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.routes-enter,
.routes-leave {
  transition: transform 0.35s ease-out, opacity 0.28s ease-out;
}
</style>
