<template>
  <section
    class="text-gray-600 border-b dark:border-gray-700 bg-white dark:bg-dark"
  >
    <div
      class="container max-w-screen-lg mx-auto flex pt-36 pb-12 md:pb-20 md:flex-row flex-col items-center justify-bteween px-5"
    >
      <div
        class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center"
      >
        <h3
          class="mb-1 text-sm font-semibold text-green-700 dark:text-green-600"
        >
          <span class="text-xl mr-1">👋</span>
          Hi, Welcome There!
        </h3>
        <h1
          class="font-bold leading-none text-4xl lg:text-5xl text-gray-900 dark:text-white"
        >
          I'm Mouad ZIANI
        </h1>
        <span class="mt-1 mb-4 w-10 h-1 bg-green-700"></span>
        <p
          class="text-md mb-8 leading-relaxed text-gray-600 dark:text-gray-300"
        >
          Software Engineer on web ecosystem, graduated with a Master's degree specialised in Computer System Engineering.
          <br class="block mt-2" />
          Experienced in Web Development to provide a robust web application for
          high-level overviews.
        </p>
        <div class="flex justify-center">
          <NuxtLink
            to="/contact"
            class="inline-flex shadow text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded"
          >
            Get In Touch
          </NuxtLink>
          <a
            target="_blank"
            href="/Mouad_ZIANI_Resume_EN.pdf"
            class="ml-4 inline-flex shadow text-green-700 dark:text-green-500 border border-green-700 dark:border-green-500 py-2 px-6 focus:outline-none hover:bg-green-700 hover:text-white hover:border-0 dark:hover:bg-green-700 dark:hover:text-white dark:hover:border-0 rounded"
          >
            View resume
          </a>
        </div>
      </div>
      <div class="hidden md:flex">
        <img class="object-cover h-64" alt="hero" src="hero.svg" />
      </div>
    </div>
  </section>
</template>
