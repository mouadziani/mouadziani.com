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

<style>
.category_title::after {
  content: "";
  order: 1;
  height: 2px;
  margin-left: 1rem;
  flex: 1 1 0%;
  background-color: #e5e7ebb6;
}
</style>
