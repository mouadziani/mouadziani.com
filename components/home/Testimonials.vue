<template>
  <section
    class="text-gray-600 dark:text-gray-400 relative bg-white dark:bg-dark-light"
  >
    <svg
      class="hidden md:block absolute top-0 right-0 z-0 transform w-44 h-44 fill-current text-green-700 dark:text-green-500"
      fill="none"
      viewBox="0 0 404 404"
      role="img"
      aria-labelledby="svg-laravelcm"
    >
      <defs>
        <pattern
          id="ad119f34-7694-4c31-947f-5c9d249b21f3"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <rect
            x="0"
            y="0"
            width="4"
            height="4"
            class="text-brand-100"
            fill="currentColor"
          ></rect>
        </pattern>
      </defs>
      <rect
        width="404"
        height="404"
        fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)"
      ></rect>
    </svg>
    <svg
      class="hidden md:block absolute bottom-0 left-0 z-0 transform w-36 h-36 fill-current text-green-700 dark:text-green-500"
      fill="none"
      viewBox="0 0 404 404"
      role="img"
      aria-labelledby="svg-laravelcm"
    >
      <title id="svg-laravelcm">Laravel Cameroon</title>
      <defs>
        <pattern
          id="ad119f34-7694-4c31-947f-5c9d249b21f3"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <rect
            x="0"
            y="0"
            width="4"
            height="4"
            class="text-brand-100"
            fill="currentColor"
          ></rect>
        </pattern>
      </defs>
      <rect
        width="404"
        height="404"
        fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)"
      ></rect>
    </svg>
    <div class="container relative max-w-screen-lg mx-auto py-12 px-5">
      <div
        class="md:items-start items-center flex flex-wrap w-full mb-4 flex-col"
      >
        <h1
          class="text-left text-3xl leading-none font-medium title-font dark:text-gray-200 text-gray-900"
        >
          Testimonials
        </h1>
        <span class="mt-1 w-10 mb-4 h-1 bg-green-600 dark:bg-green-600"></span>
      </div>
      <div class="flex flex-row flex-wrap">
        <div class="w-full md:w-1/2 px-4 mb-4">
          <div
            class="border-2 rounded relative w-full h-min-content p-6 text-base testimonial animated slide-up-active border-green-600 uk-scrollspy-inview animation-position"
          >
            <div
              class="commas bg-white dark:bg-dark-light text-green-700 dark:text-green-500"
            >
              “
            </div>
            <p
              class="mb-4 text-base md:text-lg leading-relaxed md:leading-normal"
            >
              Mouad is a fantastic person to work with. He is a hard worker
              experienced and gifted fullstack developer with a combination of
              productivity and ambition.
              <mark
                class="bg-green-200 px-1 text-gray-600 dark:bg-green-700 dark:text-gray-300"
              >
                He has an in-depth understanding of modern IT technologies with
                a very strong problem solving skills.
              </mark>
              Mouad is always positive and helpful and he never hesitates to
              provide support when needed. Working with Mouad is a fortunate
              opportunity to anyone.
            </p>
            <div
              class="flex flex-col md:flex-row justify-between items-start md:items-center"
            >
              <div class="flex">
                <div>
                  <span
                    class="block w-10 mb-4 h-0.5 bg-green-600 dark:bg-green-600"
                  ></span>
                  <p class="text-base font-bold md:text-md">Houda SLASSI</p>
                  <p
                    class="text-xs font-semibold md:text-md text-green-700 dark:text-green-500"
                  >
                    Backend Software Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 px-4 mb-4">
          <div
            class="border-2 rounded relative w-full h-min-content p-6 text-base testimonial animated slide-up-active border-green-700"
          >
            <div
              class="commas bg-white dark:bg-dark-light text-green-700 dark:text-green-500"
            >
              “
            </div>
            <p
              class="mb-4 text-base md:text-lg leading-relaxed md:leading-normal"
            >
              I know Mouad Ziani at SEOCOM he was under my responsibility, he's
              a Full-Stack Developer,
              <mark
                class="bg-green-200 px-0.5 text-gray-600 dark:bg-green-700 dark:text-gray-300"
              >
                Expert in PHP/ JavaScript on top of that he's a great problems
                solver and analyst.
              </mark>
              <br />
              I strongly recommend him
            </p>
            <div
              class="flex flex-col md:flex-row justify-between items-start md:items-center"
            >
              <div class="flex">
                <div>
                  <span
                    class="block w-10 mb-4 h-0.5 bg-green-600 dark:bg-green-600"
                  ></span>
                  <p class="text-base font-semibold md:text-md">
                    Abdellah OUFFA
                  </p>
                  <p
                    class="text-xs font-semibold md:text-md text-green-700 dark:text-green-500"
                  >
                    Senior GIS Analyst
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.commas {
  left: -0.3em;
  width: 45px;
  height: 45px;
  top: 0.1em;
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
  border-radius: 9999px;
}
</style>
