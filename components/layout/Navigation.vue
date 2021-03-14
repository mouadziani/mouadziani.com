<template>
  <header
    class="w-full bg-white dark:bg-dark border-t-4 border-green-800 text-gray-600 dark:text-gray-300 body-font fixed z-50 shadow"
  >
    <div
      class="container max-w-screen-lg mx-auto flex flex-wrap py-4 md:py-5 lg:py-5 flex-col md:flex-row items-center md:px-5"
    >
      <NuxtLink
        to="/"
        class="flex title-font font-medium items-center cursor-pointer text-gray-900 mb-2 md:mb-0"
      >
        <span class="text-xl font-semibold">Mouad ZIANI</span>
      </NuxtLink>
      <nav
        class="md:mr-auto md:ml-4 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center"
      >
        <NuxtLink to="/about" class="mr-5 cursor-pointer hover:text-gray-900">
          About
        </NuxtLink>
        <a class="mr-5 cursor-pointer hover:text-gray-900">Blog</a>
        <a class="mr-5 cursor-pointer hover:text-gray-900">Contact</a>
        <theme-switcher
          class="md:hidden lg-hidden px-3 md:mr-4 lg:mr-4 md:border-r lg:border-r border-gray-400"
        ></theme-switcher>
      </nav>
      <theme-switcher
        class="hidden md:flex lg:flex px-3 ml-auto md:mr-4 lg:mr-4 md:border-r lg:border-r border-gray-400"
      ></theme-switcher>
      <button
        class="hidden md:inline-flex lg:inline-flex items-center text-green-800 border-green-800 border py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
      >
        Hire me
      </button>
    </div>
  </header>
</template>

<script>
import ThemeSwitcher from './ThemeSwitcher.vue'

export default {
  components: {
    ThemeSwitcher,
  },
}
</script>
