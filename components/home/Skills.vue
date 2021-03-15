<template>
  <section
    class="text-gray-600 border-b dark:border-gray-700 bg-gray-50 dark:bg-dark"
  >
    <div class="container max-w-screen-lg mx-auto py-12 px-5">
      <div class="md:items-start items-center flex w-full mb-4 flex-col">
        <h1
          class="text-3xl font-medium leading-none title-font dark:text-gray-200 text-gray-900"
        >
          My Skills
        </h1>
        <span class="mt-1 mb-4 w-10 h-1 bg-green-700"></span>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
          v-for="(skill, index) in skills"
          :key="index"
          class="block dark:bg-dark-light bg-white p-4 md:p-6 shadow-full rounded-lg mt-2 lg:mt-0 w-full"
        >
          <div>
            <h5
              class="mb-4 text-sm md:text-base leading-6 font-medium text-gray-900 dark:text-gray-200"
            >
              {{ skill.title }}
            </h5>
            <nav class="flex flex-col text-left space-y-2 dark:text-gray-400">
              <div v-for="(tech, indexTech) in skill.techs" :key="indexTech">
                <span
                  class="bg-green-100 text-green-600 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center"
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
                  </svg>
                </span>
                <span class="text-sm md:text-base">{{ tech }}</span>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          title: 'Back-End',
          techs: ['Laravel Stacks', 'Symfony 3 & 4', 'JavaEE / Spring Boot'],
        },
        {
          title: 'Front-End',
          techs: ['Vue.js 2 & 3', 'Angular 2+', 'TailwindCss'],
        },
        {
          title: 'Scrapping & Automation',
          techs: ['Python Scripting', 'Scrapy & Bs4', 'Selenuim'],
        },
        {
          title: 'Mobile Apps',
          techs: ['Ionic 4+', 'Flutter'],
        },
      ],
    }
  },
}
</script>
