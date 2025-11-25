<script setup>
import { ref } from "vue";
import heroBg from "../assets/mata-2.png";
import ScrollDownArrow from "../components/ScrollDownArrow.vue";
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
          class="text-[2rem] md:text-[3.5rem] font-medium tracking-tight font-['Google_Sans_Flex'] text-white mb-8 leading-tight"
        >
          Três caminhos.<br />
          Uma só intenção: ajustar a sua vida onde ela não está mais fluindo.
        </h1>

        <p
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { delay: 500, duration: 1000 } }"
          class="text-[1rem] md:text-xl text-gray-300 max-w-2xl font-medium tracking-wide mb-12 leading-relaxed"
        >
          Escolha o tipo de apoio espiritual que conversa com o que você vive
          agora.
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
      </div>
      <ScrollDownArrow text="" />
      </div>
    </header>

    <!-- The 3 Cards -->
    <section
      class="py-32 relative z-10 border-y border-white/5 bg-black/20 backdrop-blur-sm"
    >
      <div class="max-w-6xl mx-auto px-4">
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Card 1: Oráculo -->
          <div
            v-motion-slide-visible-bottom
            class="group flex flex-col h-full bg-white/5 backdrop-blur-sm border border-white/5 p-8 hover:border-red-900/30 transition-all duration-500 hover:bg-white/[0.07] rounded-sm relative overflow-hidden"
          >
            <div
              class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-900/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"
            ></div>

            <h3
              class="text-2xl text-center tracking-normal font-bold text-white mb-4 group-hover:text-red-500 transition-colors duration-300"
            >
              ORÁCULO
            </h3>
            <p class="text-gray-400 italic mb-6 text-sm">
              “Para quem precisa ENXERGAR o que está por trás do que vive.”
            </p>

            <div
              class="grow space-y-4 text-gray-500 text-sm leading-relaxed mb-8"
            >
              <p>
                Clareza espiritual imediata sobre seus pilares, seus bloqueios e
                o que realmente está por trás do seu momento.
              </p>
            </div>

            <RouterLink
              to="/oraculo"
              class="mt-auto inline-block w-full py-4 text-center border border-white/10 text-white text-xs uppercase tracking-[0.2em] hover:bg-red-900/20 hover:border-red-900/50 transition-all duration-300"
            >
              → Acessar Oráculo
            </RouterLink>
          </div>

          <!-- Card 2: Feitiços -->
          <div
            v-motion-slide-visible-bottom
            class="group flex flex-col h-full bg-white/5 backdrop-blur-sm border border-white/5 p-8 hover:border-red-900/30 transition-all duration-500 hover:bg-white/[0.07] rounded-sm relative overflow-hidden"
          >
            <div
              class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-900/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"
            ></div>

            <h3
              class="text-2xl text-center tracking-normal font-bold text-white mb-4 group-hover:text-red-500 transition-colors duration-300"
            >
              FEITIÇOS
            </h3>
            <p class="text-gray-400 italic mb-6 text-sm">
              “Para quem precisa MOVER o que não responde ao esforço humano.”
            </p>

            <div
              class="grow space-y-4 text-gray-500 text-sm leading-relaxed mb-8"
            >
              <p>
                Trabalhos espirituais específicos para abrir caminhos, proteger,
                atrair e desfazer o que te prende.
              </p>
            </div>

            <RouterLink
              to="/feitiços"
              class="mt-auto inline-block w-full py-4 text-center border border-white/10 text-white text-xs uppercase tracking-[0.2em] hover:bg-red-900/20 hover:border-red-900/50 transition-all duration-300"
            >
              → Ver Feitiços
            </RouterLink>
          </div>

          <!-- Card 3: Mentoria -->
          <div
            v-motion-slide-visible-bottom
            class="group flex flex-col h-full bg-white/5 backdrop-blur-sm border border-white/5 p-8 hover:border-red-900/30 transition-all duration-500 hover:bg-white/[0.07] rounded-sm relative overflow-hidden"
          >
            <div
              class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-900/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"
            ></div>

            <h3
              class="text-2xl tracking-normal text-center font-bold text-white mb-4 group-hover:text-red-500 transition-colors duration-300"
            >
              MENTORIA
            </h3>
            <p class="text-gray-400 italic mb-6 text-sm">
              “Para quem não quer caminhar sozinho — e busca direção contínua.”
            </p>

            <div
              class="grow space-y-4 text-gray-500 text-sm leading-relaxed mb-8"
            >
              <p>
                Acompanhamento espiritual estratégico para evitar ciclos
                repetidos e tomar decisões alinhadas.
              </p>
            </div>

            <RouterLink
              to="/mentoria"
              class="mt-auto inline-block w-full py-4 text-center border border-white/10 text-white text-xs uppercase tracking-[0.2em] hover:bg-red-900/20 hover:border-red-900/50 transition-all duration-300"
            >
              → Entrar na Mentoria
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Final Closing -->
    <section class="py-40 px-4 text-center relative overflow-hidden z-10">
      <div class="relative z-10 max-w-3xl mx-auto">
        <p class="text-[1rem] text-white uppercase tracking-[0.3em] font-bold">
          Cada trilha leva a um ajuste diferente.<br />
          Você já sente qual delas é a sua.
        </p>
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
