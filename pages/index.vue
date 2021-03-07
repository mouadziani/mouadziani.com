<template>
  <div class="font-body">  
    <Navigation />
    <Hero />
    <Skills />
    <Testimonials />
    <Footer />
  </div>
</template>

<script>
import Navigation from "../components/layout/Navigation.vue";
import Footer from "../components/layout/Footer.vue";
import Hero from "../components/home/Hero.vue";
import Skills from "../components/home/Skills.vue";
import Testimonials from "../components/home/Testimonials.vue";
export default {
  components: { 
    Navigation,
    Footer,
    Hero,
    Skills,
    Testimonials,
  },
};
</script>
