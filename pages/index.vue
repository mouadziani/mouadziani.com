<template>
  <div>
    <header
      class="w-full bg-white dark:bg-dark border-t-4 border-green-800 text-gray-600 dark:text-gray-300 body-font fixed shadow"
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
    <section class="text-gray-600 border-b bg-white" id="home">
      <div
        class="container max-w-screen-lg mx-auto flex pt-36 pb-20 md:flex-row flex-col items-center justify-bteween"
      >
        <div
          class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
        >
          <h3 class="mb-1 text-sm font-semibold text-green-800">
            <span class="text-xl mr-1">👋</span> Hi, Welcome There!
          </h3>
          <h1 class="font-bold leading-none text-5xl text-gray-900">
            I'm Mouad ZIANI
          </h1>
          <span class="mt-2 mb-4 w-10 h-1 bg-green-800"></span>
          <p class="text-sm mb-6 leading-relaxed text-gray-600">
            Fullstack Engineer at
            <a
              class="text-green-700 font-bold underline"
              href="https://www.promy.fr/"
              >Promy.fr</a
            >
            & Final year Master degree student specialized in Computer System
            Engineering.
            <br class="block mt-2" />
            Experienced in Web & Mobile Development to provide a robust web
            application for high-level overviews.
          </p>
          <div class="flex justify-center">
            <button
              class="inline-flex text-white bg-green-800 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded"
            >
              Get In Touch
            </button>
            <button
              class="ml-4 inline-flex text-green-800 border border-green-800 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded"
            >
              View resume
            </button>
          </div>
        </div>
        <div>
          <img class="object-cover h-64" alt="hero" src="hero.svg" />
        </div>
      </div>
    </section>
    <section class="text-gray-600 bg-gray-50">
      <div class="container max-w-screen-lg mx-auto py-12">
        <div
          class="flex flex-wrap w-full mb-10 flex-col items-center text-center"
        >
          <h1 class="text-4xl font-medium uppercase title-font text-gray-900">
            My Skills
          </h1>
          <span class="mt-2 w-10 h-1 bg-green-800"></span>
        </div>
        <div class="relative w-full lg:grid lg:grid-cols-3 lg:gap-8">
          <div
            class="block mt-10 lg:mt-0 p-4 bg-white rounded-lg shadow-md hover:shadow-lg w-full md:p-6"
            href="/forum"
          >
            <div
              class="flex items-center justify-center h-10 w-10 rounded-md bg-green-800 text-white"
            >
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                ></path>
              </svg>
            </div>
            <div class="mt-4">
              <h5 class="text-lg mb-4 leading-6 font-medium text-gray-900">
                Backend Development
              </h5>
              <nav
                class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5"
              >
                <a>
                  <span
                    class="bg-green-100 text-green-600 w-4 h-4 mr-3 rounded-full inline-flex items-center justify-center"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg> </span
                  >Laravel ecosystem
                </a>
                <a>
                  <span
                    class="bg-green-100 text-green-600 w-4 h-4 mr-3 rounded-full inline-flex items-center justify-center"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg> </span
                  >Symfony 3 & 4
                </a>
                <a>
                  <span
                    class="bg-green-100 text-green-600 w-4 h-4 mr-3 rounded-full inline-flex items-center justify-center"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg> </span
                  >JavaEE / Spring Boot
                </a>
                <a>
                  <span
                    class="bg-green-100 text-green-600 w-4 h-4 mr-3 rounded-full inline-flex items-center justify-center"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg> </span
                  >Nodejs / Expressjs
                </a>
              </nav>
            </div>
          </div>
          <div
            class="block mt-10 lg:mt-0 p-4 bg-white rounded-lg shadow-md hover:shadow-lg w-full md:p-6"
            href="/forum"
          >
            <div
              class="flex items-center justify-center h-10 w-10 rounded-md bg-green-800 text-white"
            >
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                ></path>
              </svg>
            </div>
            <div class="mt-4">
              <h5 class="text-lg mb-4 leading-6 font-medium text-gray-900">
                Front End Development
              </h5>
              <nav
                class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5"
              >
                <a>
                  <span
                    class="bg-green-100 text-green-600 w-4 h-4 mr-3 rounded-full inline-flex items-center justify-center"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg> </span
                  >Vue.js 2 & 3
                </a>
                <a>
                  <span
                    class="bg-green-100 text-green-600 w-4 h-4 mr-3 rounded-full inline-flex items-center justify-center"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg> </span
                  >Angular 4+
                </a>
                <a>
                  <span
                    class="bg-green-100 text-green-600 w-4 h-4 mr-3 rounded-full inline-flex items-center justify-center"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg> </span
                  >TailwindCss
                </a>
                <a>
                  <span
                    class="bg-green-100 text-green-600 w-4 h-4 mr-3 rounded-full inline-flex items-center justify-center"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg> </span
                  >Bootstrap Css
                </a>
              </nav>
            </div>
          </div>
          <div
            class="block mt-10 lg:mt-0 p-4 bg-white rounded-lg shadow-md hover:shadow-lg w-full md:p-6"
            href="/forum"
          >
            <div
              class="flex items-center justify-center h-10 w-10 rounded-md bg-green-800 text-white"
            >
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                ></path>
              </svg>
            </div>
            <div class="mt-4">
              <h5 class="text-lg mb-4 leading-6 font-medium text-gray-900">
                Mobile Apps Development
              </h5>
              <nav
                class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5"
              >
                <a>
                  <span
                    class="bg-green-100 text-green-600 w-4 h-4 mr-3 rounded-full inline-flex items-center justify-center"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg> </span
                  >Ionic 4+
                </a>
                <a>
                  <span
                    class="bg-green-100 text-green-600 w-4 h-4 mr-3 rounded-full inline-flex items-center justify-center"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg> </span
                  >Flutter
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ThemeSwitcher from "../components/Shared/ThemeSwitcher.vue";
export default {
  components: { ThemeSwitcher },
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
