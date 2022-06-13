<template>
  <div id="app">
    <NavBar
      v-if="showNavBar()"
      :showBack="showBackIcon()"
      :showMenu="showMenuIcon()"
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
  methods: {
    showNavBar() {
      return this.$router.currentRoute.name != "Login";
    },
    showBackIcon() {
      return this.$router.currentRoute.name === "Orders";
    },
    showMenuIcon() {
      // return this.$router.currentRoute.name != "Orders";
      return !["Orders", "Order Registration"].includes(
        this.$router.currentRoute.name
      );
    },
  },
};
</script>

<style scoped></style>
