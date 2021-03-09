<template>
  <div class="font-body">
    <Hero />
    <!-- <About /> -->
    <Skills />
    <Oss />
    <Testimonials />
  </div>
</template>

<script>
import Hero from '../components/home/Hero.vue'
import Skills from '../components/home/Skills.vue'
import Testimonials from '../components/home/Testimonials.vue'
import Oss from '../components/home/Oss.vue'
export default {
  layout: 'default',
  components: {
    Hero,
    Skills,
    Testimonials,
    Oss,
  },
}
</script>
