<template>
  <div>  
    <Navigation />
    <Hero />
    <Skills />
    <Testimonials />
  </div>
</template>

<script>
import Navigation from "../components/layout/Navigation.vue";
import Hero from "../components/home/Hero.vue";
import Skills from "../components/home/Skills.vue";
import Testimonials from "../components/home/Testimonials.vue";
export default {
  components: { 
    Navigation,
    Hero,
    Skills,
    Testimonials,
  },
};
</script>
