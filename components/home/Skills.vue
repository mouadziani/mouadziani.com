<template>
    <section class="text-gray-600 border-b bg-gray-50">
      <div class="container max-w-screen-lg mx-auto py-16">
        <div
          class="flex flex-wrap w-full mb-4 flex-col"
        >
          <h1 class="text-left text-3xl font-medium title-font text-gray-900">
            My Skills
          </h1>
          <span class="mt-1 mb-4 w-10 h-1 bg-green-700"></span>
        </div>
        <div class="grid grid-cols-3 gap-6">
            <div 
              class="block bg-white p-6 shadow rounded-lg mt-10 lg:mt-0 w-full"
              v-for="(skill, index) in skills"
              :key="index"
            >
              <div>
                <h5 class="text-lg leading-6 font-medium text-gray-900">{{ skill.title }}</h5>
                <p class="mt-2 mb-4 text-base leading-6 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <nav
                  class="flex flex-col sm:text-left space-y-2"
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
        <!-- <div class="mt-6 relative w-full lg:grid lg:grid-cols-3 lg:gap-4">
          <div
            class="block bg-white rounded-lg shadow-md hover:shadow-lg w-full py-6 px-5"
            v-for="(skill, index) in skills"
            :key="index"
          >
            <h5 class="text-md leading-6 font-medium text-gray-900">
              {{ skill.title }}
            </h5>
            <span class="block my-1 mb-4 w-10 h-0.5 bg-green-700"></span>
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
        </div> -->

      </div>
    </section>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          title: 'BackEnd Developement',
          techs: [
            'Laravel ecosystem',
            'Symfony 3 & 4',
            'JavaEE / Spring Boot',
          ]
        },
        {
          title: 'FrontEnd Developement',
          techs: [
            'Vue.js 2 & 3',
            'Angular 2+',
            'TailwindCss',
            'Bootstrap Css'
          ]
        },
        // {
        //   title: ' Scrapping & Automation',
        //   techs: [
        //     'Python Scripting',
        //     'Scrapping',
        //     'Selenuim'
        //   ]
        // },
        {
          title: 'Mobile Apps Developement',
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

<style>
  .commas {
    left: -.3em;
    width: 45px;
    height: 45px;
    top: .1em;
    font-size: 6em;
    position: absolute;
    padding: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    line-height: 1;
    background-color: #fff;
    border-radius: 9999px;
}
</style>