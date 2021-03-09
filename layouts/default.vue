<template>
  <div>
    <Navigation />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

export default {
  components: {
    Navigation,
    Footer,
  },
}
</script>
