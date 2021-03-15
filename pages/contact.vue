<template>
  <div class="overflow-x-hidden">
    <div class="contact-me bg-background-secondary pt-16">
      <div class="container-inner mx-auto text-xl pb-4 relative">
        <h2 id="contact" class="font-bold mb-6">Contact me:</h2>
        <div
          class="absolute right-0 top-0"
          style="transform: translate(100%) rotate(180deg)"
        >
          <svg width="170px" height="170px">
            <use xlink:href="#dots-triangle"></use>
          </svg>
        </div>
        <p class="mb-12">
          Static sites cannot submit forms on their own. However, services like
          <a href="https://www.netlify.com/docs/form-handling">Netlify Forms</a>
          or
          <a href="https://formspree.io">FormSpree</a>
          can help you do this without a backend.
        </p>
        <div class="text-lg sm:text-lg mb-16">
          <form
            action="https://formspree.io/f/meqpyvng"
            method="post"
            class="mb-12"
          >
            <div class="flex flex-wrap mb-6 -mx-4">
              <div class="w-full md:w-1/2 mb-6 md:mb-0 px-4">
                <label for="name" class="block mb-2 text-copy-primary">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Jon Snow"
                  required="required"
                  class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4"
                />
              </div>
              <div class="w-full px-4 md:w-1/2">
                <label for="email" class="block text-copy-primary mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="email@example.com"
                  required="required"
                  class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4"
                />
              </div>
            </div>
            <div class="w-full mb-12">
              <label for="message" class="block text-copy-primary mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                name="message"
                placeholder="Enter your message here."
                required="required"
                class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none appearance-none focus:border-green-700 mb-2 px-4 py-4"
              ></textarea>
            </div>
            <div class="flex justify-end w-full">
              <input
                type="submit"
                value="Submit"
                class="block bg-green-700 hover:bg-green-800 text-white text-sm font-semibold tracking-wide uppercase shadow rounded cursor-pointer px-6 py-3"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
