<template>
  <div class="flex w-full justify-end md:hidden">
    <button @click.prevent="toggle" class="mobile-toggle" :class="toggleClass">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</template>
<script>
export default {
  computed: {
    toggleClass() {
      return this.menuOpen ? "open" : "";
    },
  },
  methods: {
    toggle() {
      this.$emit("toggle");
    },
  },
  name: "MenuToggle",
  props: {
    menuOpen: {},
  },
};
</script>
<style lang="scss">
.mobile-toggle {
  @apply relative rotate-0 cursor-pointer transition-all duration-500 ease-in-out;
  width: 40px;
  height: 30px;

  &.open {
    span {
      @apply bg-black;

      &:nth-child(1) {
        top: 12px;
        transform: rotate(135deg);
      }

      &:nth-child(2) {
        opacity: 0;
        right: 9999px;
      }

      &:nth-child(3) {
        top: 12px;
        transform: rotate(-135deg);
      }
    }
  }

  span {
    @apply block absolute w-full bg-white left-0 transform rotate-0 rounded-lg transition-all ease-in-out duration-300;
    height: 5px;
    opacity: 1;

    &:nth-child(1) {
      top: 0;
    }

    &:nth-child(2) {
      top: 12px;
    }

    &:nth-child(3) {
      top: 24px;
    }
  }
}
</style>
