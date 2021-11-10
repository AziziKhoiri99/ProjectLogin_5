<template>
  <div id="app">
    <Navbar />
    <HelloWorld />
    <Product />
    <Beli />
    <Beli2 />
    <Peduli />
    <Profile />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import HelloWorld from "./components/HelloWorld.vue";
import Product from "./views/Product.vue";
import Beli from './views/Kalkulasi.vue';
import Beli2 from './views/Infomotor.vue';
import Peduli from "./views/Peduli.vue";
import Profile from "./views/Profile.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    HelloWorld,
    Product,
    Beli,
    Beli2,
    Peduli,
    Profile,
    Footer,
  },
};
</script>
