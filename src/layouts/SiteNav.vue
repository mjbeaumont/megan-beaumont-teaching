<template>
  <nav class="font-montserrat transform" :class="navClass">
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

  &.open {
    @apply scale-y-100;
  }
}
</style>
