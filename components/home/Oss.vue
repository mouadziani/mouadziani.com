<template>
  <section class="text-gray-600 border-b bg-white">
    <div class="container max-w-screen-lg mx-auto py-12 px-5">
      <div
        class="md:items-start items-center flex flex-wrap w-full mb-4 flex-col"
      >
        <h1
          class="text-left text-3xl leading-none font-medium title-font text-gray-900"
        >
          Open Source
        </h1>
        <span class="mt-1 mb-4 w-10 h-1 bg-green-700"></span>
      </div>
      <div class="grid grid-cols-2 gap-6">
        <a
          v-for="(project, index) in projects"
          :key="index"
          class="block bg-white p-6 shadow-full rounded-lg mt-2 lg:mt-0 hover:shadow-lg"
          :href="project.html_url"
        >
          <div>
            <h5 class="text-lg leading-6 font-medium text-gray-900">
              {{ project.name }}
            </h5>
            <p class="mt-4 mb-6 text-base leading-6 text-gray-500">
              {{ project.description }}
            </p>
            <ul class="flex items-center space-x-4 text-black">
              <li class="inline-flex items-center">
                <svg
                  class="h-4 w-4 mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <span>{{ project.stargazers_count }}</span>
              </li>
              <li v-if="project.forks" class="inline-flex items-center">
                <img
                  class="h-4 w-4 mr-1"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDEwIDE2Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04IDFhMS45OTMgMS45OTMgMCAwIDAtMSAzLjcyVjZMNSA4IDMgNlY0LjcyQTEuOTkzIDEuOTkzIDAgMCAwIDIgMWExLjk5MyAxLjk5MyAwIDAgMC0xIDMuNzJWNi41bDMgM3YxLjc4QTEuOTkzIDEuOTkzIDAgMCAwIDUgMTVhMS45OTMgMS45OTMgMCAwIDAgMS0zLjcyVjkuNWwzLTNWNC43MkExLjk5MyAxLjk5MyAwIDAgMCA4IDF6TTIgNC4yQzEuMzQgNC4yLjggMy42NS44IDNjMC0uNjUuNTUtMS4yIDEuMi0xLjIuNjUgMCAxLjIuNTUgMS4yIDEuMiAwIC42NS0uNTUgMS4yLTEuMiAxLjJ6bTMgMTBjLS42NiAwLTEuMi0uNTUtMS4yLTEuMiAwLS42NS41NS0xLjIgMS4yLTEuMi42NSAwIDEuMi41NSAxLjIgMS4yIDAgLjY1LS41NSAxLjItMS4yIDEuMnptMy0xMGMtLjY2IDAtMS4yLS41NS0xLjItMS4yIDAtLjY1LjU1LTEuMiAxLjItMS4yLjY1IDAgMS4yLjU1IDEuMiAxLjIgMCAuNjUtLjU1IDEuMi0xLjIgMS4yeiIvPjwvc3ZnPg=="
                  alt="forks"
                />
                <span>{{ project.forks }}</span>
              </li>
            </ul>
          </div>
        </a>
        <div class="flex items-center justify-center">
          <a
            class="bg-black flex px-10 md:px-24 py-3 shadow-lg hover:bg-gray-700 rounded-lg text-white"
            href="https://github.com/mouadziani"
            target="_blank"
          >
            <svg class="text-white h-6 w-6 mr-3" fill="currentColor">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
              ></path>
            </svg>
            See more
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [],
    }
  },
  mounted() {
    this.getGithubRepositories()
  },
  methods: {
    async getGithubRepositories() {
      console.log(this.$axios)
      let response = await this.$axios.$get(
        'https://api.github.com/search/repositories?q=user:mouadziani%20feautred%20repository%20in:readme&sort=stars&order=desc&per_page=5'
      )
      this.projects = response.items
    },
  },
}
</script>
