<template>
  <div class="font-body">
    <Hero />
    <Skills />
    <Oss :projects="projects" />
    <Testimonials />
  </div>
</template>

<script>
import axios from 'axios'
import Hero from '@/components/home/Hero.vue'
import Skills from '@/components/home/Skills.vue'
import Testimonials from '@/components/home/Testimonials.vue'
import Oss from '@/components/home/Oss.vue'

export default {
  layout: 'default',
  components: {
    Hero,
    Skills,
    Testimonials,
    Oss,
  },
  asyncData({ params, error }) {
    return axios
      .get(
        'https://api.github.com/search/repositories?q=user:mouadziani%20featured%20repository%20in:readme&sort=stars&order=desc&per_page=5'
      )
      .then((response) => {
        return {
          projects: response.data.items,
        }
      })
      .catch((errors) => {
        console.log(errors)
      })
  },
}
</script>
