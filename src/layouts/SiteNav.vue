<template>
  <nav
    class="font-montserrat transform transition-transform duration-300 origin-top lg:pr-10"
    :class="navClass"
  >
    <a href="#" class="nav__link">Home</a>
    <a href="#lessons" class="nav__link">Lessons</a>
    <a href="#about" class="nav__link">About</a>
    <a href="#contact" class="nav__link">Contact</a>
  </nav>
</template>
<script>
export default {
  computed: {
    navClass() {
      return this.menuOpen ? "open" : "";
    },
  },
  name: "SiteNav",
  props: { menuOpen: {} },
};
</script>
<style lang="scss" scoped>
nav {
  @apply scale-y-0;

  a {
    @apply block w-full py-6 text-xl text-center border-b border-gray-300 tracking-wide transition-colors duration-300;
    &:hover,
    &.active {
      @apply text-gray-400;
    }
  }

  &.open {
    @apply scale-y-100 bg-white;
    a {
      @apply text-black;
    }
  }

  @media screen and (min-width: 767px) {
    @apply scale-y-100 inline-block;
    a {
      @apply border-b-0 py-6 inline-block w-1/4 pr-8 text-base uppercase font-semibold text-right;
    }
  }
}
</style>
