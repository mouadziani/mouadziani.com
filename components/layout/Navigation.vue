<template>
    <header
      class="w-full bg-white dark:bg-dark border-t-4 border-green-800 text-gray-600 dark:text-gray-300 body-font fixed z-50 shadow"
    >
      <div
        class="container max-w-screen-lg mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center"
      >
        <a
          v-scroll-to="'#home'"
          class="flex title-font font-medium items-center cursor-pointer text-gray-900 mb-4 md:mb-0"
        >
          <span class="text-xl font-semibold">Mouad ZIANI</span>
        </a>
        <nav
          class="md:mr-auto md:ml-4 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center"
        >
          <a class="mr-5 cursor-pointer hover:text-gray-900">About</a>
          <a class="mr-5 cursor-pointer hover:text-gray-900">Projects</a>
          <a class="mr-5 cursor-pointer hover:text-gray-900">OSS</a>
          <a class="mr-5 cursor-pointer hover:text-gray-900">Blog</a>
          <a class="mr-5 cursor-pointer hover:text-gray-900">Contact</a>
        </nav>
        <theme-switcher
          class="px-3 mr-4 border-r border-gray-400"
        ></theme-switcher>
        <button
          class="inline-flex items-center text-green-800 border-green-800 border py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
        >
          Hire me !
        </button>
      </div>
    </header>
</template>

<script>
import ThemeSwitcher from "./ThemeSwitcher.vue";

export default {
    components: {
        ThemeSwitcher
    }
}
</script>