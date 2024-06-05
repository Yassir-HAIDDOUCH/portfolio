<script setup>
import Hero from "./hero.vue";
</script>
<template>
  <Hero title="About Me."></Hero>

  <div
    id="section2"
    class="overflow-hidden bg-orange-50 py-16 px-4 sm:px-6 lg:px-8 lg:py-16 2xl:py-36"
  >
    <div class="relative mx-auto max-w-4xl">
      <svg
        class="absolute -right-64 2xl:left-full translate-x-1/2 transform animate-pulse"
        width="404"
        height="404"
        fill="none"
        viewBox="0 0 404 404"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="85737c0e-0916-41d7-917f-596dc7edfa27"
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
              class="text-gray-200 dark:text-slate-600"
              fill="currentColor"
            ></rect>
          </pattern>
        </defs>
        <rect
          width="404"
          height="404"
          fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
        ></rect>
      </svg>
      <svg
        class="absolute -left-64 2xl:right-full bottom-0 -translate-x-1/2 transform animate-pulse"
        width="404"
        height="404"
        fill="none"
        viewBox="0 0 404 404"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="85737c0e-0916-41d7-917f-596dc7edfa27"
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
              class="text-gray-200 dark:text-slate-800"
              fill="currentColor"
            ></rect>
          </pattern>
        </defs>
        <rect
          width="404"
          height="404"
          fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
        ></rect>
      </svg>

      <div class="text-center lg:text-left bg-orange-400 p-4 rounded-lg my-10">
        <h1 class="text-5xl font-bold text-base-100">Yassir HAIDDOUCH</h1>
        <p class="mt-2 mb-0 ml-2 text-sm text-orange-50">{{ age1 }} year, Agadir</p>
        <p class="pb-6 pt-2 text-base-100 text-lg select-none">
          I am a seasoned software developer with a strong passion for technology and a
          track record of building diverse digital solutions, from basic landing pages to
          sophisticated enterprise websites. My expertise spans full-stack development,
          software architecture, and consulting, with a primary focus on Laravel and
          Vue.js. I specialize in crafting responsive layouts using modern technologies
          like HTML5, CSS3, and JavaScript, always prioritizing scalability and
          algorithmic efficiency. Fluent in both English and French, I maintain open
          communication channels and provide regular updates to ensure project success.
        </p>
      </div>

      <div class="max-w-full py-10">
        <h2 class="text-3xl font-bold text-orange-400 sm:text-4xl select-none">
          Educations & Experience
        </h2>

        <div class="grid lg:grid-cols-3 grid-cols-1 mt-10">
          <div class="hidden lg:flex justify-center items-center">
            <div class="loader">
              <div class="head"></div>

              <div class="flames">
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
              </div>

              <div class="eye"></div>
            </div>
          </div>
          <div class="col-span-2">
            <div class="flex relative pt-1 pb-10 sm:items-center">
              <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-nav/25 pointer-events-none"></div>
              </div>
              <div
                class="flex-shrink-0 absolute top-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-[#fff7ed] text-white title-font font-medium text-sm border-4 border-orange-500"
              ></div>
              <div
                class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row"
              >
                <div class="flex-grow mt-6 sm:mt-0">
                  <p class="text-nav/50">2020 - 2022</p>
                  <h2 class="font-medium title-font text-nav mb-1 text-3xl">
                    College Degree, Computer Science
                  </h2>
                  <p class="leading-relaxed">
                    Higher School of Technology – Guelmim - Ibn Zohr University
                  </p>
                </div>
              </div>
            </div>
            <div class="flex relative pt-1 pb-10 sm:items-center">
              <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-nav/25 pointer-events-none"></div>
              </div>
              <div
                class="flex-shrink-0 absolute top-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-[#fff7ed] text-white title-font font-medium text-sm border-4 border-orange-500"
              ></div>
              <div
                class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row"
              >
                <div class="flex-grow mt-6 sm:mt-0">
                  <p class="text-nav/50">2022 - 2023</p>
                  <h2 class="font-medium title-font text-nav mb-1 text-3xl">
                    Bachelor's degree, Ingénierie informatique
                  </h2>
                  <p class="leading-relaxed">
                    Higher School of Technology - Essaouira - Cadi Ayyad University
                  </p>
                </div>
              </div>
            </div>
            <div class="flex relative pt-1 pb-10 sm:items-center">
              <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-nav/25 pointer-events-none"></div>
              </div>
              <div
                class="flex-shrink-0 absolute top-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-[#fff7ed] text-white title-font font-medium text-sm border-4 border-orange-500"
              ></div>
              <div
                class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row"
              >
                <div class="flex-grow mt-6 sm:mt-0">
                  <p class="text-nav/50">2023 - Now</p>
                  <h2 class="font-medium title-font text-nav mb-1 text-3xl">
                    DESS, Advanced Web Engineering
                  </h2>
                  <p class="leading-relaxed">
                    Faculty of Sciences - Tetouan - Abdelmalek Essadi University
                  </p>
                  <h2 class="font-medium title-font text-nav mb-1 text-3xl mt-5">
                    Full-Stack Developer
                  </h2>
                  <p class="leading-relaxed">Lecourt Consulting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-full py-5">
        <h2 class="text-3xl font-bold text-orange-400 sm:text-4xl select-none">
          What makes me special
        </h2>

        <p class="mt-4 text-nav select-none">
          We excited to collaborate with you on your next project! With a proven track
          record of building outstanding products, features, and websites, We confident
          that I can bring your vision to life. Take a look at some of my previous work
          and experience to get a sense of my capabilities. If you have a project in mind
          that needs expert coding, please don't hesitate to reach out. Let's turn your
          ideas into reality together.
        </p>
      </div>

      <div class="grid grid-cols-2">
        <div class="flex items-center justify-center">
          <h1 class="text-8xl font-semibold">{{ age2 }}+</h1>
          <h6 class="text-xl mt-2">
            Years <br />
            Experience
          </h6>
        </div>

        <div class=" flex items-center">
          <div class="w-full">
            <details class="group [&_summary::-webkit-details-marker]:hidden gap-4 my-4">
              <summary
                class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-orange-300 p-4 text-nav"
              >
                <h2 class="font-medium">websites</h2>

                <svg
                  class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              <p class="mt-4 px-4 leading-relaxed text-nav select-none">
                A coding framework is a pre-established structure or set of tools that
                simplifies and standardizes software development, streamlining the process
                of building applications by providing reusable components, patterns, and
                guidelines.
              </p>
            </details>
            <details class="group [&_summary::-webkit-details-marker]:hidden gap-4 my-4">
              <summary
                class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-orange-300 p-4 text-nav"
              >
                <h2 class="font-medium">Web</h2>

                <svg
                  class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              <p class="mt-4 px-4 leading-relaxed text-nav select-none">
                A coding framework is a pre-established structure or set of tools that
                simplifies and standardizes software development, streamlining the process
                of building applications by providing reusable components, patterns, and
                guidelines.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const birthdate = new Date("2000-07-04"); // Replace with your actual birthdate

    const exp = new Date("2020-09-01");

    // Get the current date
    const currentDate = new Date();

    // Calculate the age
    var age1 = currentDate.getFullYear() - birthdate.getFullYear();
    var age2 = currentDate.getFullYear() - exp.getFullYear();
    // Check if the birthday for this year has occurred or not
    if (
      currentDate.getMonth() < birthdate.getMonth() ||
      (currentDate.getMonth() === birthdate.getMonth() &&
        currentDate.getDate() < birthdate.getDate())
    ) {
      age1--; // If not yet reached, subtract 1 from the age
    }
    return {
      age1: age1,
      age2: age2,
    };
  },
};
</script>
