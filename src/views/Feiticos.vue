<script setup>
import { ref } from "vue";
import heroBg from "../assets/mata-2.png";
import ScrollDownArrow from "../components/ScrollDownArrow.vue";

const spells = [
  {
    title: "Abertura de Caminhos",
    description:
      "Para quem sente a vida estagnada. Remove bloqueios e atrai novas oportunidades no trabalho e finanças.",
  },
  {
    title: "Limpeza Espiritual",
    description:
      "Remove energias negativas, inveja e peso espiritual. Restaura seu equilíbrio e vitalidade.",
  },
  {
    title: "Proteção e Blindagem",
    description:
      "Cria um escudo espiritual contra ataques, demandas e energias densas. Para você e sua família.",
  },
  {
    title: "União Amorosa",
    description:
      "Harmoniza relacionamentos, traz de volta o entendimento e fortalece os laços afetivos.",
  },
  {
    title: "Pacto de Prosperidade",
    description:
      "Alinha sua energia com a abundância. Para quem busca crescimento financeiro e sucesso nos negócios.",
  },
  {
    title: "Afastamento de Rivais",
    description:
      "Afasta quem atrapalha seu caminho, seja no amor ou no trabalho, sem causar mal, apenas distanciando.",
  },
];
</script>

<template>
  <div
    class="min-h-screen bg-black text-gray-300 font-['Google_Sans_Flex'] selection:bg-red-900 selection:text-white overflow-x-hidden"
  >
    <!-- Background Effects -->
    <div class="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div
        class="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-red-900/10 rounded-full blur-[120px] opacity-50"
      ></div>

      <!-- Dashed SVG Texture -->
      <div
        class="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style="
          background-image: url('data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M0 40L40 0H20L0 20M40 40V20L20 40\' stroke=\'%23ffffff\' stroke-width=\'1\' stroke-dasharray=\'4 4\' opacity=\'0.5\'/%3E%3C/g%3E%3C/svg%3E');
        "
      ></div>

      <div
        class="absolute bottom-0 right-0 w-[800px] h-[800px] bg-red-900/5 rounded-full blur-[100px] opacity-30"
      ></div>
    </div>

    <!-- Hero Section -->
    <header
      class="min-h-screen flex flex-col items-center justify-center text-center px-4 relative z-10 pt-20 overflow-hidden"
    >
      <!-- Hero Background Image -->
      <div class="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          :src="heroBg"
          alt=""
          class="w-full h-full object-cover opacity-20 mix-blend-luminosity"
        />
        <div
          class="absolute inset-0 bg-linear-to-b from-black/80 via-transparent to-black"
        ></div>
      </div>

      <div class="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
        <h1
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: { duration: 1000, ease: 'easeOut' },
          }"
          class="text-[3rem] md:text-[5rem] font-medium tracking-tight font-['Google_Sans_Flex'] text-white mb-6 group cursor-default"
        >
          FEITIÇOS
        </h1>

        <p
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { delay: 500, duration: 1000 } }"
          class="text-[1rem] md:text-xl text-gray-300 max-w-2xl font-medium tracking-wide mb-12 leading-relaxed"
        >
          “Quando o espiritual pede ação, não teoria.”<br />
          Ferramentas para quem entendeu que sentir não basta, é preciso ajustar
          o que opera por trás da matéria.
        </p>

        <!-- Scroll Down Arrow -->
        <div
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{
            opacity: 1,
            transition: { delay: 1500, duration: 1000 },
          }"
          class="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ScrollDownArrow text="" />
        </div>
      </div>
    </header>

    <!-- Spells Grid -->
    <section class="py-32 px-4 relative z-10">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="(spell, index) in spells"
            :key="index"
            v-motion-slide-visible-bottom
            class="group flex flex-col h-full bg-white/5 backdrop-blur-sm border border-white/5 p-8 hover:border-red-900/30 transition-all duration-500 hover:bg-white/[0.07] rounded-sm relative overflow-hidden"
          >
            <div
              class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-900/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"
            ></div>

            <h3
              class="text-xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors duration-300"
            >
              {{ spell.title }}
            </h3>

            <p class="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
              {{ spell.description }}
            </p>

            <a
              href="#"
              class="mt-auto inline-block w-full py-4 text-center border border-white/10 text-white text-xs uppercase tracking-[0.2em] hover:bg-red-900/20 hover:border-red-900/50 transition-all duration-300"
            >
              → Saiba Mais
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-32 px-4 text-center relative overflow-hidden z-10">
      <div class="relative z-10 max-w-3xl mx-auto">
        <h2
          v-motion-slide-visible-bottom
          class="text-2xl md:text-4xl font-bold text-white mb-8"
        >
          Não encontrou o que precisa?
        </h2>
        <p class="text-gray-400 mb-12 text-lg leading-relaxed">
          Cada caso é único. O Oráculo pode revelar a solução exata para o seu
          momento.
        </p>
        <RouterLink
          to="/oraculo"
          class="inline-block bg-white/5 border border-white/10 text-white text-sm font-bold py-4 px-12 uppercase tracking-[0.2em] hover:border-red-700 transition-all duration-500"
        >
          Consultar o Oráculo
        </RouterLink>
      </div>
    </section>

    <footer
      class="py-12 text-center text-gray-700 text-xs uppercase tracking-widest border-t border-white/5 relative z-10"
    >
      <p>
        &copy; 2025 Guilherme-Oraculista <br />
        Todos os direitos reservados.
      </p>
    </footer>
  </div>
</template>

<style scoped>
/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: #000;
}
::-webkit-scrollbar-thumb {
  background: #222;
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: #444;
}
</style>
