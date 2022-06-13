<template>
  <header>
    <nav>
      <div v-if="showBack" class="menu-mobile">
        <MenuButton :callback="toggleMenu" :clicked="menuOpened" />
      </div>
      <img
        v-if="showMenu"
        src="@/assets/icons/arrow-left-solid.svg"
        alt="back"
        class="back-button"
        @click="$router.back()"
      />
      <div class="title"><h1>Pedidos</h1></div>
    </nav>
  </header>
</template>

<script>
import MenuButton from "@/components/buttons/menubutton/MenuButton.vue";

export default {
  name: "NavBar",
  props: {
    showBack: { type: Boolean, default: false },
    showMenu: { type: Boolean, default: false },
  },
  data() {
    return {
      selectedPage: { type: String, default: "Dashboard" },
      pages: ["Dashboard", "Enterprises", "Reports", "Tools", "Login"],
      menuOpened: false,
    };
  },
  components: {
    MenuButton,
  },
  methods: {
    goToPage(page) {
      if (this.selectedPage == page) return;

      if (page == "Login") localStorage.removeItem("user");

      this.selectedPage = page;
      this.$router.push({ name: page });
    },
    toggleMenu() {
      // this.menuOpened = !this.menuOpened;
      localStorage.removeItem("user");
      this.$router.push({ name: "Login" });
    },
  },
  mounted() {
    this.selectedPage =
      this.$route.name == "Enterprises" ? this.pages[1] : this.pages[0];
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />
