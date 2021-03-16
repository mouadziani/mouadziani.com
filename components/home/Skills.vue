<template>
  <section
    class="text-gray-600 border-b dark:border-gray-700 bg-gray-50 dark:bg-dark"
  >
    <div class="container max-w-screen-lg mx-auto py-12 px-5">
      <div class="md:items-start items-center flex w-full mb-4 flex-col">
        <h1
          class="text-3xl font-medium leading-none title-font dark:text-gray-200 text-gray-900"
        >
          Teck Stack
        </h1>
        <span class="mt-1 mb-4 w-10 h-1 bg-green-700"></span>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-6 gap-4">
        <div
          v-for="(skill, index) in skills"
          :key="index"
          class="flex items-center justify-center flex-col bg-white shadow rounded-xl p-4 transition duration-200 ease-in-out transform hover:-translate-y-2"
        >
          <div class="flex items-center justify-center rounded-xl">
            <img class="h-14 w-14" :src="skill.icon" :alt="skill.title" />
          </div>
          <div class="font-semibold mt-3">{{ skill.title }}</div>
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
          title: 'Laravel',
          icon: '/techs/laravel.svg',
        },
        {
          title: 'Symfony',
          icon: '/techs/symfony.svg',
        },
        {
          title: 'JaveEE/Spring',
          icon: '/techs/spring.svg',
        },
        {
          title: 'Python',
          icon: '/techs/python.svg',
        },
        {
          title: 'Angular 4+',
          icon: '/techs/angular.svg',
        },
        {
          title: 'Vue.js',
          icon: '/techs/vuejs.svg',
        },
        {
          title: 'Tailwind Css',
          icon: '/techs/tailwind.svg',
        },
        {
          title: 'Ionic 2+',
          icon: '/techs/ionic.svg',
        },
        {
          title: 'Flutter',
          icon: '/techs/flutter.svg',
        },
        {
          title: 'Microservices',
          icon: '/techs/microservices.svg',
        },
        {
          title: 'Docker',
          icon: '/techs/docker.svg',
        },
        {
          title: 'Selenuim',
          icon: '/techs/selenuim.svg',
        },
      ],
    }
  },
}
</script>
