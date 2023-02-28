
<template>
  <div class="flex flex-col  justify-between">
    <Navbar />
    <transition name="slither">
      <router-view></router-view>

  </transition>

    <Footer />

  </div>
  </template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "./components/Footer";
export default {
components: {
  Navbar,
  Footer,
},


};
</script>


<style>
.slither-enter-active, .slither-leave-active {
  transition: opacity 0.3s ease-out;
}

.slither-enter-from, .slither-leave-to {
  opacity: 10%;
}


</style>