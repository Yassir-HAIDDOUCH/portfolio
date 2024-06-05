<template>
  <div class="relative bg-hero h-[80vh] lg:h-[90vh] items-center justify-center flex">
    <div class="w-11/12 ">
      <h1 class="text-nav font-bold text-6xl lg:text-8xl" >{{ title }}</h1>  
       <div @click="scrollToSection('section2')" class="absolute right-10 bottom-10 w-32 h-32 border-2 hidden justify-center items-center border-nav rounded-full overflow-hidden cursor-pointer lg:flex">
        <i class="ri-arrow-down-line text-nav"></i>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
</script>
