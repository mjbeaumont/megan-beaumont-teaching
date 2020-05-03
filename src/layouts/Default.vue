<template>
  <div class="layout">
    <header class="header flex justify-between w-full px-16 fixed transition-all duration-300 bg-primary-100 z-10" :class="headerClass">
      <strong>
        <g-link to="/">&nbsp;</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header>
    <slot/>
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
  font-family: "Cabin", sans-serif;
  font-size: 16px;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  margin: 0 auto;
}

.header {
  justify-items: flex-end;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;

  &.shrink {
    height: 55px;
    @apply shadow-lg bg-white;

    .nav__link {
      @apply text-gray-600 text-lg;
      &:hover, &.active {
        @apply text-gray-800;
      }
    }
  }
}

.nav__link {
  @apply text-xl text-gray-400 transition-colors duration-300 font-semibold ml-10;
  &:hover, &.active {
    @apply text-white;
  }
}
</style>

<script>
  export default {
    computed: {
      headerClass() {
        return this.lastScrollPosition >= 80 ? 'shrink' : '';
      }
    },
    data() {
      return {
        lastScrollPosition: 0
      }
    },
    methods: {
      onScroll () {
        // Get the current scroll position
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
        // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
        if (currentScrollPosition < 0) {
          return
        }
        // Stop executing this function if the difference between
        // current scroll position and last scroll position is less than some offset
        if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 80) {
          return
        }
        this.lastScrollPosition = currentScrollPosition
      }
    },
    mounted() {
      window.addEventListener('scroll', this.onScroll);
    }
  }
</script>
