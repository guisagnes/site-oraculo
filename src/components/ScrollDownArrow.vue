<script setup>
defineProps({
  text: {
    type: String,
    default: "SCROLL DOWN",
  },
  icon: {
    type: String,
    default: "", // Optional custom icon class or path if needed, but we'll use a slot or default SVG
  },
});

const scrollToNextSection = (event) => {
  const currentElement = event.currentTarget;
  const parentSection = currentElement.closest("section, header");

  if (parentSection && parentSection.nextElementSibling) {
    parentSection.nextElementSibling.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<template>
  <div
    @click="scrollToNextSection"
    class="flex flex-col items-center gap-2 animate-bounce cursor-pointer opacity-80 hover:opacity-100 transition-opacity duration-300 scroll-down-arrow-container"
  >
    <span
      class="text-[0.6rem] uppercase tracking-[0.2em] text-gray-400 font-medium"
    >
      {{ text }}
    </span>
    <div
      class="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white shadow-[0_0_15px_rgba(0,0,0,0.5)]"
    >
      <!-- Default Arrow Icon -->
      <slot name="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </slot>
    </div>
  </div>
</template>

<style scoped>
/* Ensure the bounce animation is smooth */
.animate-bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
</style>
