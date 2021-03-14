<template>
  <div>
    <Into />
    <Experience />
  </div>
</template>

<script>
import Into from '../components/about/Into.vue'
import Experience from '../components/about/Experience.vue'

export default {
  layout: 'default',
  components: {
    Into,
    Experience,
  },
}
</script>
