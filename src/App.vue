<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 p-4 md:p-4 flex justify-center gap-2 md:gap-4 text-[0.9rem] md:text-xs uppercase tracking-[0.2em] text-gray-500 bg-black/50 backdrop-blur-md border-b border-white/5"
  >
    <RouterLink
      to="/home"
      class="transition-colors duration-300 text-[0.7rem] md:text-[0.9rem] px-3 py-1 rounded-md font-normal"
      active-class="text-white"
    >
      Home
    </RouterLink>
    <RouterLink
      to="/oraculo"
      class="transition-colors duration-300 text-[0.7rem] md:text-[0.9rem] px-3 py-1 rounded-md font-normal"
      active-class="text-white "
    >
      Oráculo
    </RouterLink>
    <RouterLink
      to="/feitiços"
      class="transition-colors duration-300 text-[0.7rem] md:text-[0.9rem] px-3 py-1 rounded-md font-normal"
      active-class="text-white"
    >
      Feitiços
    </RouterLink>
    <RouterLink
      to="/mentoria"
      class="transition-colors duration-300 text-[0.7rem] md:text-[0.9rem] px-3 py-1 rounded-md font-normal"
      active-class="text-white"
    >
      Mentoria
    </RouterLink>
  </nav>

  <main>
    <RouterView />
  </main>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<style scoped></style>
