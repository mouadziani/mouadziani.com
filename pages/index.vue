<template>
  <div>
    <header class="w-full bg-white dark:bg-indigo-800 border-t-4 border-green-800 text-gray-600 dark:text-gray-300 body-font fixed shadow">
      <div class="container max-w-screen-lg mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
        <a v-scroll-to="'#home'" class="flex title-font font-medium items-center cursor-pointer text-gray-900 mb-4 md:mb-0">
          <span class="text-xl font-semibold">Mouad ZIANI</span>
        </a>
        <nav class="md:mr-auto md:ml-4 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <a v-scroll-to="'#about'" class="mr-5 cursor-pointer hover:text-gray-900">About</a>
          <a class="mr-5 cursor-pointer hover:text-gray-900">Skills</a>
          <a class="mr-5 cursor-pointer hover:text-gray-900">Projects</a>
          <a class="mr-5 cursor-pointer hover:text-gray-900">OSS</a>
          <a class="mr-5 cursor-pointer hover:text-gray-900">Blog</a>
          <a class="mr-5 cursor-pointer hover:text-gray-900">Contact</a>
        </nav>
        <theme-switcher class="px-3 mr-4 border-r border-gray-400"></theme-switcher>
        <button class="inline-flex items-center text-green-800 border-green-800 border py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Hire me !
        </button>
      </div>  
    </header>
    <section class="text-gray-600 bg-white" id="home">
      <div class="container max-w-screen-lg mx-auto flex pt-36 pb-20 md:flex-row flex-col items-center justify-bteween">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h3 class="mb-2 text-sm font-semibold text-green-800">👋 Hi, Welcome There!</h3>
          <h1 class="font-bold mb-4 leading-none text-5xl text-gray-900">
            I'm Mouad ZIANI
          </h1>
          <p class="text-sm mb-6 leading-relaxed text-gray-600">
            Fullstack Engineer at 
            <a class="text-green-700 underline" href="https://www.promy.fr/">Promy.fr</a>  
            & Final year Master degree student specialized in Computer System Engineering.
            <br class="block mt-2">
            Experienced in Web & Mobile Development to provide a robust web application for high-level overviews.
          </p>
          <div class="flex justify-center">
            <button class="inline-flex text-white bg-green-800 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">
              Get In Touch
            </button>
            <button class="ml-4 inline-flex text-green-800 border border-green-800 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded ">
              View resume
            </button>
          </div>
        </div>
        <div>
          <img class="object-cover h-64" alt="hero" src="hero.svg">
        </div>
      </div>
    </section>
    <section class="bg-gray-50 py-10 border-t" id="about">
      <div class="container max-w-screen-lg mx-auto w-full">
        <header class="mb-6 flex category_title items-end overflow-hidden">
          <h2 class="text-gray-900 text-2xl font-semibold lg:text-3xl">Services</h2>
        </header>
        <div class="lg:grid lg:grid-cols-3 lg:gap-8">
          <div class="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg w-full md:p-6" >
            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-green-800 text-white">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div class="mt-5">
              <h5 class="text-lg leading-6 font-medium text-gray-900">Frontend Web Developpement</h5>
              <p class="mt-2 text-base leading-6 text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, dignissimos..</p>
            </div>
          </div>
          <div class="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg w-full md:p-6" >
            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-green-800 text-white">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div class="mt-5">
              <h5 class="text-lg leading-6 font-medium text-gray-900">Backend Web Developpement</h5>
              <p class="mt-2 text-base leading-6 text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, dignissimos..</p>
            </div>
          </div>
          <div class="block mt-10 lg:mt-0 p-4 bg-white rounded-lg shadow-md hover:shadow-lg w-full md:p-6" >
            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-green-800 text-white">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
              </svg>
            </div>
            <div class="mt-5">
              <h5 class="text-lg leading-6 font-medium text-gray-900">Mobiel Developpement</h5>
              <p class="mt-2 text-base leading-6 text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, dignissimos..</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ThemeSwitcher from '../components/Shared/ThemeSwitcher.vue'
export default {
  components: { ThemeSwitcher },}
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