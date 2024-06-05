<script setup>
import { ref } from "vue";
import Hero from "./hero.vue";

import { Email } from "../utils/smtp";

const form = ref({
  name: "",
  email: "",
  message: "",
});

const errors = ref({
  name: null,
  email: null,
  message: null,
});

function validate() {
  errors.value = {
    name: null,
    email: null,
    message: null,
  };

  // Validate title
  if (!form.value.name) {
    errors.value.name = "Please enter your name";
  }

  // Validate address
  if (!form.value.email || !/\S+@\S+\.\S+/.test(form.value.email)) {
    errors.value.email = "Please enter your real email";
  }

  // Validate message
  if (!form.value.message) {
    errors.value.message = "Please enter your message";
  }

  // Log errors to the console if there are any
  if (errors.value.name || errors.value.email || errors.value.message) {
    console.error("Validation Errors:", errors.value);
  }

  // Return true if there are no errors
  return !errors.value.name && !errors.value.email && !errors.value.message;
}

function SendEmail() {
  if (validate()) {
    console.log(form.value);
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "haiddouchy5@gmail.com",
      Password: "195F612D14395B4708BADA57D9B842B0DD44",
      To: "haiddouchyassirpx@gmail.com",
      From: "haiddouchy5@gmail.com",
      Subject: form.value.name,
      Body: form.value.message,
    });
  }
}
</script>
<template>
  <Hero title="Contact Me."></Hero>
  <div
    id="section2"
    class="overflow-hidden bg-orange-50 py-16 px-4 sm:px-6 lg:px-8 lg:py-16 2xl:py-36"
  >
    <div class="relative mx-auto max-w-xl">
      <svg
        class="absolute left-full translate-x-1/2 transform animate-pulse"
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
        class="absolute right-full bottom-0 -translate-x-1/2 transform animate-pulse"
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
      <div class="text-center">
        <p class="my-4 text-lg leading-6 text-gray-500">
          Get in touch or shoot me an email directly on haiddouchyassirpx@gmail.com.
          <br />
          Thank you!
        </p>
      </div>
      <div class="mt-5">
        <form
          action=""
          class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          @submit.prevent="SendEmail"
        >
          <div class="sm:col-span-2">
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <div class="mt-1">
              <input
                name="name"
                type="text"
                id="name"
                v-model="form.name"
                class="block w-full rounded-md py-3 px-4 shadow-sm ring-1"
                :class="{
                  'ring-red-500': errors.name,
                  'ring-nav': !errors.name,
                }"
              />

              <span v-if="errors.name" class="text-sm" style="color: red">{{
                errors.name
              }}</span>
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="email" class="block text-sm font-medium text-gray-700"
              >Email</label
            >
            <div class="mt-1">
              <input
                name="email"
                id="email"
              
                v-model="form.email"
                class="block w-full rounded-md py-3 px-4 shadow-sm ring-1"
                :class="{
                  'ring-red-500': errors.email,
                  'ring-nav': !errors.email,
                }"
              />

              <span v-if="errors.email" class="text-sm" style="color: red">{{
                errors.email
              }}</span>
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block text-sm font-medium text-gray-700"
              >Message</label
            >
            <div class="mt-1">
              <textarea
                name="message"
                id="message"
                rows="4"
                v-model="form.message"
                class="block w-full rounded-md py-3 px-4 shadow-sm ring-1"
                :class="{
                  'ring-red-500': errors.message,
                  'ring-nav': !errors.message,
                }"
              ></textarea>

              <span v-if="errors.message" class="text-sm" style="color: red">{{
                errors.message
              }}</span>
            </div>
          </div>
          <div class="flex justify-end sm:col-span-2">
            <button
              type="submit"
              class="border text-gray-50 duration-300 relative group cursor-pointer overflow-hidden h-14 w-52 shadow-lg rounded-md bg-nav p-2 font-extrabold hover:bg-nav/80"
            >
              <div
                class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150 duration-700 right-12 top-12 bg-orange-100"
              ></div>
              <div
                class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150 duration-700 right-20 -top-6 bg-orange-300"
              ></div>
              <div
                class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8 rounded-full group-hover:scale-150 duration-700 right-2 top-12 bg-orange-500"
              ></div>
              <p class="z-10 absolute bottom-2 left-2">Send Message</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

</template>
