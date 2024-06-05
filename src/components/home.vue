<template>
  <section
    class="bg-homebg w-full bg-no-repeat pr-0 bg-cover bg-center min-h-screen flex justify-center md:grid md:grid-cols-6 md:gap-4 items-center"
  >
    <div
      class="mx-auto max-w-screen-xl md:pl-12 px-3 py-32 lg:flex lg:h-screen lg:justify-start lg:items-center md:col-end-7 md:col-span-3"
    >
      <div class="mx-auto max-w-xl text-center md:text-left bg-nav/25">
        <h1 class="text-5xl font-extrabold text-stone-300 sm:text-5xl">
          Welcome
          <strong class="font-extrabold text-orange-400 sm:block">
            I'm Yassir HAIDDOUCH
          </strong>
        </h1>

        <p class="mt-4 sm:text-xl/relaxed font-bold text-white">
          Your friendly full-stack developer . I spend my days (and often nights) painting
          the Internet canvas with projects and lines of code, turning zeroes and ones
          into immersive, interactive experiences.
        </p>

        <div class="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
          <router-link
            class="block w-full rounded bg-orange-400 px-6 py-3 text-sm font-medium text-white shadow hover:bg-orange-500 focus:outline-none focus:ring active:bg-orange-500 sm:w-auto"
            to="/AboutMe"
          >
            See More About Me
          </router-link>
         

          <router-link
            class="block w-full rounded px-14 py-3 text-sm font-medium bg-orange-50 text-orange-400 shadow hover:text-orange-500 focus:outline-none focus:ring active:text-orange-500 sm:w-auto"
            to="/ContactMe"
          >
            Contact Me
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
</script>
