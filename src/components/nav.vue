<template>
  <div class="min-h-full min-w-full">
    <Disclosure
      as="nav"
      :class="[
        currentPagePath == '/' ? 'fixed bg-nav-color' : 'sticky bg-orange-300',
        ' min-w-full  top-0 z-10',
      ]"
      v-slot="{ open }"
    >
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div class="flex h-16 items-center justify-between">
          <div class="flex-shrink-0">
            <img class="h-8 w-8 select-none" src="/images/phoenix.svg" />
          </div>
          <div class="flex items-center">
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <router-link
                  :to="item.href"
                  v-for="item in navigation"
                  :class="[
                    item.href == currentPagePath
                      ? 'bg-orange-500 hover:bg-orange-600  text-white'
                      : ' text-nav hover:text-white hover:bg-orange-400 ',
                    'rounded-md select-none px-3 py-2 pb-3 text-md font-medium transition duration-300',
                  ]"
                  :aria-current="item.current ? 'page' : undefined"
                  >{{ item.name }}</router-link
                >
              </div>
            </div>
          </div>
          <div class="hidden md:block"></div>
          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton
              class="relative inline-flex items-center justify-center rounded-md bg-orange-400 p-2 text-white hover:bg-orange-500 focus:outline-none focus:ring-offset-orange-500"
            >
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel class="md:hidden">
        <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <DisclosureButton
            v-for="item in navigation"
            :key="item.name"
            as="a"
            :href="item.href"
            :class="[
              item.href === currentPagePath
                ? 'bg-orange-500 text-white'
                : 'hover:bg-orange-400 text-nav',
              'block rounded-md px-3 py-2 select-none text-base font-medium transition duration-1000',
            ]"
            :aria-current="item.current ? 'page' : undefined"
          >
            {{ item.name }}
          </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
    <main class="bg-orange-50">
      <!-- Your content -->
      <router-view></router-view>
    </main>
    <Footer></Footer>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import Footer from "./footer.vue";
const navigation = [
  { name: "Home", href: "/" },
  { name: "About ", href: "/AboutMe" },
  { name: "Projects", href: "/Projects" },
  { name: "Contact", href: "/ContactMe" },
];
</script>

<script>
export default {
  computed: {
    currentPagePath() {
      return this.$route.path; // Access the current page's path
    },
  },
};
</script>
