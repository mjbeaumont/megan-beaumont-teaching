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
body {
  font-size: 16px;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  background: #000;
  height: 100vh;
}

.mobile-toggle {
  width: 40px;
  height: 30px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;

  &.open {
    span {
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
    display: block;
    position: absolute;
    height: 5px;
    width: 100%;
    background: #fff;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;

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
