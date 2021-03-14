<template>
  <div>
    <Intro />
    <Experience />
  </div>
</template>

<script>
import Intro from '../components/about/Intro.vue'
import Experience from '../components/about/Experience.vue'

export default {
  layout: 'default',
  components: {
    Intro,
    Experience,
  },
}
</script>
