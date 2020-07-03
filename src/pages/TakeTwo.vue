<template
  ><Layout>
    <section id="home"></section>
  </Layout>
</template>

<script>
import Layout from "~/layouts/NewLayout";
export default {
  components: { Layout },
  name: "TakeTwo.vue",
};
</script>

<style lang="scss" scoped>
#home {
  height: 100vh;
  background-image: url("~@/assets/images/megan-hero-brickwall-sm.jpg");
  background-size: cover;
  background-position: top left;
  background-repeat: no-repeat;

  @media screen and (min-width: 1920px) {
    background-image: url("~@/assets/images/megan-hero-brickwall.jpg");
  }

  @media screen and (min-width: 1024px) {
    background-image: url("~@/assets/images/megan-hero-brickwall-lg.jpg");
  }
}
</style>
