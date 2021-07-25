<template>
  <div id="app">
    <div class="page">
      <Header />
      <Intro />
      <Service />
      <QuoteBYRBBS />
      <Joinus />
      <Group-intro />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import GroupIntro from './components/GroupIntro.vue';
import Header from "./components/Header.vue";
import Intro from './components/Intro.vue';
import Joinus from './components/Joinus.vue';
import QuoteBYRBBS from './components/QuoteBYRBBS.vue';
import Service from './components/Service.vue';

export default {
  name: "App",
  components: {
    Header,
    Intro,
    Service,
    QuoteBYRBBS,
    Joinus,
    GroupIntro,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 14px;
  color: #2c3e50;
}
.page {
  max-width: 960px;
  margin: 0 auto;
}
</style>
