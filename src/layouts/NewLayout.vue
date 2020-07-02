<template>
  <div class="layout">
    <header class="text-white" :class="headerClass">
      <MenuToggle
        class="md:hidden mt-2 pr-4"
        :menu-open="menuOpen"
        @toggle="toggleMenu"
      />
      <nav class="font-montserrat">
        <a href="#" class="nav__link">Home</a>
        <a href="#lessons" class="nav__link">Lessons</a>
        <a href="#about" class="nav__link">About</a>
        <a href="#contact" class="nav__link">Contact</a>
      </nav>
    </header>
    <slot />
  </div>
</template>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>

<style lang="scss">
body {
  font-size: 16px;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  background: #000;
  height: 100vh;
}
</style>

<script>
import MenuToggle from "~/components/MenuToggle";

export default {
  components: { MenuToggle },
  computed: {
    headerClass() {
      return this.lastScrollPosition >= 80 ? "shrink" : "";
    },
  },
  data() {
    return {
      lastScrollPosition: 0,
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    onScroll() {
      // Get the current scroll position
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
      if (currentScrollPosition < 0) {
        return;
      }
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 80) {
        return;
      }
      this.lastScrollPosition = currentScrollPosition;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
};
</script>
