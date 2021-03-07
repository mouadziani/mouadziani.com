<template>
  <div>  
    <Navigation />
    <Hero />
    <Skills />
  </div>
</template>

<script>
import Navigation from "../components/layout/Navigation.vue";
import Hero from "../components/home/Hero.vue";
import Skills from "../components/home/Skills.vue";
export default {
  components: { 
    Navigation,
    Hero,
    Skills,
  },
};
</script>
