<script setup>
import { ref } from "vue";
import Hero from "./hero.vue";

const data = ref([
  {
    title: "KASBAH SOUSS",
    link: "https://kasbatsouss.net/",
    img: "https://i.ibb.co/cXZ4WKS/screencapture-kasbatsouss-net-2024-06-05-10-32-44.png",
    sub_title: "Connecting Global Markets with Traditional Moroccan Craftsmanship",
    tools: ["WordPress", "Woocommerce"],
  },
  {
    title: "Espace27",
    link: "",
    img: "https://i.ibb.co/FBXc2gZ/screencapture-127-0-0-1-8000-2024-06-05-12-42-15.png",
    sub_title: "Where Your Business Finds Its Perfect Professional Home",
    tools: ["Vue.js", "Laravel","Inertia.js","Tailwind"],
  },
  {
    title: "Annuaire franchise",
    link: "",
    img: "https://i.ibb.co/jDsmbyp/screencapture-localhost-4000-2024-06-05-12-48-31.png",
    sub_title: "The Comprehensive Directory for Aspiring and Established Franchise Owners",
    tools: ["React.js", "Laravel" ,"Tailwind"],
  },
  {
    title: "CréeMonentreprise",
    link: "https://creermonentreprise.net/",
    img: "https://i.ibb.co/2ghW1kR/screencapture-creermonentreprise-net-2024-06-05-12-58-43.png",
    sub_title: "Your Personal Roadmap to Entrepreneurial Success, Providing Insights, Strategies, and Tools for Every Stage of Your Business Journey",
    tools: ["Liveware", "Laravel" ,"Bootstrap"],
  },
]);
</script>
<template>
  <Hero title="Projects."></Hero>
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
     
       <div class="grid grid-cols-1 gap-y-4 lg:grid-cols-2 lg:gap-4 py-5 " >
      <div  v-for="project in data" >
        <a :href="project?.link">
          <div
            class="relative group cursor-pointer overflow-hidden duration-500 h-80 rounded-md shadow-md text-white"
          >
            <div class="">
              <img
                :src="project.img"
                alt=""
                class="animate-to-section"
              />
              <div
                class="absolute w-full left-0 p-5 pt-10 -bottom-24 duration-500 group-hover:-translate-y-24 group-hover:bg-gradient-to-t from-nav"
              >
                <span
                  class="text-xl font-bold text-orange-500/90 group-hover:text-white duration-500 bg-nav/10 rounded-md px-1 group-hover:px-0 group-hover:bg-nav/0"
                  >{{project?.title}}</span
                >
                <p class="group-hover:opacity-100 w-full duration-500 opacity-0 line-clamp-2 lg:h-[48px] ">
                    {{project?.sub_title}}
                </p>
                <div class="flex mt-2">
                  <span
                    class="inline-flex mr-2 items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-nav ring-1 ring-inset ring-nav/70"
                    v-for="tool in project.tools"
                    >{{tool}}</span
                  >
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>

    </div>
  </div>

</template>


