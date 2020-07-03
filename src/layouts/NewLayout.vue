<template>
  <div class="layout">
    <header :class="headerClass" class="relative md:flex md:justify-between">
      <h1
        class="text-lg pt-4 tracking-wide text-white logo font-light border-b border-white uppercase inline-block ml-4 md-hidden"
      >
        Megan Shumate Beaumont
      </h1>
      <MenuToggle :menu-open="menuOpen" @toggle="toggleMenu" />
      <SiteNav :menu-open="menuOpen" />
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

header {
  @apply text-white;
  &.open {
    @apply bg-white text-black;
  }
}
</style>

<script>
import MenuToggle from "~/components/MenuToggle";
import SiteNav from "./SiteNav";

export default {
  components: { SiteNav, MenuToggle },
  computed: {
    headerClass() {
      let headerClass = "";
      if (this.menuOpen) {
        headerClass += " open";
      }
      if (this.lastScrollPosition >= 80) {
        headerClass += " shrink";
      }
      return headerClass;
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
