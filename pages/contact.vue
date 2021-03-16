<template>
  <section
    class="text-gray-600 border-b dark:border-gray-700 bg-white dark:text-gray-300 dark:bg-dark"
  >
    <div
      class="container max-w-screen-lg mx-auto md:items-start md:text-left items-center py-32 pb-12 flex flex-col px-5"
    >
      <h1
        class="dark:text-gray-200 text-left text-3xl font-medium title-font text-gray-900"
      >
        Contact Me
      </h1>
      <span class="block mt-1 w-10 h-1 bg-green-700"></span>

      <h3 class="text-green-600 mt-8 font-semibold mb-6">{{ message }}</h3>

      <form class="w-full" action="post" @submit.prevent="submit($event)">
        <div class="flex flex-wrap -mx-4">
          <div class="w-full md:w-1/2 px-4 mb-5">
            <label for="fullName" class="block mb-2 text-copy-primary">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              required="required"
              class="dark:bg-dark-light dark:border-dark-light block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 dark:focus:border-green-700 mb-2 p-4"
            />
          </div>
          <div class="w-full md:w-1/2 px-4 mb-5">
            <label for="email" class="block mb-2 text-copy-primary">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              required="required"
              class="dark:bg-dark-light dark:border-dark-light block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 dark:focus:border-green-700 mb-2 p-4"
            />
          </div>
          <div class="w-full px-4 mb-5">
            <label for="Message" class="block mb-2 text-copy-primary">
              Message
            </label>
            <textarea
              id="Message"
              rows="6"
              type="text"
              name="Message"
              placeholder="Enter your message"
              required="required"
              class="dark:bg-dark-light dark:border-dark-light block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 dark:focus:border-green-700 mb-2 p-4"
            ></textarea>
          </div>
        </div>
        <div class="flex justify-end w-full">
          <button
            type="submit"
            class="inline-flex shadow text-white bg-green-700 border-0 py-3 px-8 focus:outline-none hover:bg-green-600 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      message: '',
    }
  },
  methods: {
    submit(event) {
      var data = new FormData(event.target)
      this.$axios
        .$post('https://formspree.io/f/meqpyvng', data)
        .then((response) => {
          this.message =
            'Thank you for getting in touch! We appreciate you contacting us'
          event.target.reset()
        })
        .then((response) => {
          console.log(response)
        })
    },
  },
}
</script>
