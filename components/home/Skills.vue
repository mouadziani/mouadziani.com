<template>
    <section class="text-gray-600 bg-gray-100">
      <div class="container max-w-screen-lg mx-auto py-12">
        <div
          class="flex flex-wrap w-full mb-10 flex-col items-center text-center"
        >
          <h1 class="text-3xl font-medium uppercase title-font text-gray-900">
            My Skills
          </h1>
          <span class="mt-1 w-16 h-1 bg-green-800"></span>
        </div>
        <div class="relative w-full lg:grid lg:grid-cols-4 lg:gap-4">
          <div
            class="block bg-white rounded-lg shadow-md hover:shadow-lg w-full py-6 px-5"
            v-for="(skill, index) in skills"
            :key="index"
          >
            <h5 class="text-md leading-6 font-medium text-gray-900">
              {{ skill.title }}
            </h5>
            <span class="block my-1 mb-4 w-10 h-0.5 bg-green-800"></span>
            <nav
              class="flex flex-col sm:items-start sm:text-left text-center items-center space-y-2.5"
            >
              <a 
                v-for="(tech, index) in skill.techs"
                :key="index"
              >
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
                  </svg> </span
                >
                {{ tech }}
              </a>
            </nav>
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
          title: ' Back End Development',
          techs: [
            'Laravel ecosystem',
            'Symfony 3 & 4',
            'JavaEE / Spring Boot',
            'Nodejs / Expressjs'
          ]
        },
        {
          title: ' Front End Development',
          techs: [
            'Vue.js 2 & 3',
            'Angular 2+',
            'TailwindCss',
            'Bootstrap Css'
          ]
        },
        {
          title: ' Scrapping and Automation',
          techs: [
            'Python Scripting',
            'Scrapping',
            'Selenuim'
          ]
        },
        {
          title: ' Mobile Apps Development',
          techs: [
            'Ionic 4+',
            'Flutter'
          ]
        }
      ]
    }
  }
}
</script>