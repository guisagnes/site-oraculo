<script setup>
import { ref } from "vue";
import heroBg from "../assets/jogofaca.webp";
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

    <!-- Navigation -->

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

      <div class="relative z-10 flex flex-col items-center">
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
          ORÁCULO DE EXU
        </h1>

        <p
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { delay: 500, duration: 1000 } }"
          class="text-[1rem] md:text-xl text-grey-500 max-w-xl font-medium tracking-wide mb-12"
        >
          A CONSULTA QUE RASGA O VÉU E MOSTRA POR QUE SUA VIDA TRAVA
        </p>

        <div
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :enter="{
            opacity: 1,
            scale: 1,
            transition: { delay: 1000, duration: 800 },
          }"
        >
          <a
            href="#agendar"
            class="inline-block rounded-sm bg-white/5 backdrop-blur-sm border border-white/10 text-white px-10 py-4 uppercase tracking-[0.15em] text-sm md:text-base md:px-12 md:py-5 font-bold transition-all duration-500 hover:bg-grey-600 hover:border-red-500 hover:text-white"
          >
            Quero Destravar Minha Vida
          </a>
        </div>

        <!-- Scroll Down Arrow -->
        <div
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{
            opacity: 1,
            transition: { delay: 1500, duration: 1000 },
          }"
          class="absolute bottom-10 left-1/2 -translate-x-1/2"
        ></div>
      </div>
      <div>
        <ScrollDownArrow
          class="absolute bottom-10 left-1/2 -translate-x-1/2"
          text=""
        />
      </div>
    </header>

    <!-- The Hook / Problem -->
    <section class="py-32 px-4 relative z-10 text-center overflow-hidden">
      <div class="max-w-5xl mx-auto rounded-sm">
        <div v-motion-slide-visible-bottom class="text-center mb-20 rounded-sm">
          <h2
            class="text-2xl md:text-4xl font-bold text-white mb-8 leading-tight"
          >
            VOCÊ NÃO SAI COM FRASES BONITAS.<br /><br />
            SAI COM
            <span
              class="text-red-500 hover:text-red-600 transition-colors duration-300"
              >DIAGNÓSTICO CRUEL</span
            >
            E
            <span
              class="text-red-500 hover:text-red-600 transition-colors duration-300"
              >SOLUÇÃO REAL</span
            >.
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div
            class="group rounded-sm bg-white/5 backdrop-blur-sm border border-white/5 p-8 hover:border-red-900/30 transition-all duration-500 hover:bg-white/[0.07]"
          >
            <h3 class="text-white font-bold mb-2">Sem mantras</h3>
            <p class="text-sm text-gray-500">
              Ação direta e resultado prático.
            </p>
          </div>
          <div
            class="group rounded-sm bg-white/5 backdrop-blur-sm border border-white/5 p-8 hover:border-red-900/30 transition-all duration-500 hover:bg-white/[0.07]"
          >
            <h3 class="text-white font-bold mb-2">Sem promessas</h3>
            <p class="text-sm text-gray-500">Apenas a verdade nua e crua.</p>
          </div>
          <div
            class="group rounded-sm bg-white/5 backdrop-blur-sm border border-white/5 p-8 hover:border-red-900/30 transition-all duration-500 hover:bg-white/[0.07]"
          >
            <h3 class="text-white font-bold mb-2">Sem espera</h3>
            <p class="text-sm text-gray-500">Respostas imediatas.</p>
          </div>
        </div>
      </div>
      <div>
        <ScrollDownArrow
          class="absolute bottom-10 left-1/2 -translate-x-1/2"
          text=""
        />
      </div>
    </section>

    <!-- What You Discover -->
    <section
      class="py-32 relative z-10 border-y border-white/5 bg-black/20 backdrop-blur-sm"
    >
      <div class="max-w-6xl mx-auto px-4">
        <h2
          v-motion-slide-visible-bottom
          class="text-3xl font-bold text-center mb-20 text-white tracking-tight"
        >
          O QUE VOCÊ VAI DESCOBRIR
        </h2>
        <div class="grid md:grid-cols-2 gap-16">
          <div v-motion-slide-visible-left class="space-y-12">
            <div class="group flex gap-6">
              <div
                class="w-12 h-12 flex items-center justify-center text-gray-600 font-bold border border-white/10 rounded-full group-hover:border-red-600 group-hover:text-red-600 transition-all duration-500 shrink-0"
              >
                01
              </div>
              <div>
                <h3
                  class="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors duration-300"
                >
                  O Pilar que está sangrando
                </h3>
                <p class="text-gray-500 leading-relaxed">
                  Descubra exatamente onde sua energia está vazando e como
                  estancar esse sangramento imediatamente.
                </p>
              </div>
            </div>
            <div class="group flex gap-6">
              <div
                class="w-12 h-12 flex items-center justify-center text-gray-600 font-bold border border-white/10 rounded-full group-hover:border-red-600 group-hover:text-red-600 transition-all duration-500 shrink-0"
              >
                02
              </div>
              <div>
                <h3
                  class="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors duration-300"
                >
                  O Problema Oculto
                </h3>
                <p class="text-gray-500 leading-relaxed">
                  Aquilo que você nunca enxergou, mas que decide sua vida nos
                  bastidores.
                </p>
              </div>
            </div>
          </div>
          <div v-motion-slide-visible-right class="space-y-12">
            <div class="group flex gap-6">
              <div
                class="w-12 h-12 flex items-center justify-center text-gray-600 font-bold border border-white/10 rounded-full group-hover:border-red-600 group-hover:text-red-600 transition-all duration-500 shrink-0"
              >
                03
              </div>
              <div>
                <h3
                  class="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors duration-300"
                >
                  A Verdade dos 13 Exus
                </h3>
                <p class="text-gray-500 leading-relaxed">
                  Sem filtros. A visão espiritual real sobre sua situação atual.
                </p>
              </div>
            </div>
            <div class="group flex gap-6">
              <div
                class="w-12 h-12 flex items-center justify-center text-gray-600 font-bold border border-white/10 rounded-full group-hover:border-red-600 group-hover:text-red-600 transition-all duration-500 shrink-0"
              >
                04
              </div>
              <div>
                <h3
                  class="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors duration-300"
                >
                  Solução Prática
                </h3>
                <p class="text-gray-500 leading-relaxed">
                  O trabalho espiritual exato para cortar a raiz do bloqueio e
                  restaurar sua prosperidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </section>

    <!-- Why Different -->
    <section class="py-32 px-4 relative z-10">
      <div class="max-w-4xl mx-auto">
        <h2
          v-motion-slide-visible-bottom
          class="text-3xl font-bold text-center mb-16 text-white"
        >
          POR QUE É DIFERENTE?
        </h2>
        <div class="space-y-4 text-center">
          <div
            v-motion-slide-visible-bottom
            class="group bg-white/5 backdrop-blur-md border border-white/5 p-8 hover:border-red-900/30 transition-all duration-500 rounded-sm"
          >
            <h3
              class="text-white font-bold mb-2 group-hover:text-red-500 transition-colors duration-300"
            >
              NÃO É TAROT DE PRATELEIRA
            </h3>
            <p class="text-gray-500">
              É um sistema ancestral de Quimbanda transmitido por linhagem
              direta.
            </p>
          </div>
          <div
            v-motion-slide-visible-bottom
            class="group bg-white/5 backdrop-blur-md border border-white/5 p-8 hover:border-red-900/30 transition-all duration-500 rounded-sm"
          >
            <h3
              class="text-white font-bold mb-2 group-hover:text-red-500 transition-colors duration-300"
            >
              NÃO É CONSELHO GENÉRICO
            </h3>
            <p class="text-gray-500">
              É leitura de forças reais que revelam por que você ainda está
              preso.
            </p>
          </div>
          <div
            v-motion-slide-visible-bottom
            class="group bg-white/5 backdrop-blur-md border border-white/5 p-8 hover:border-red-900/30 transition-all duration-500 rounded-sm"
          >
            <h3
              class="text-white font-bold mb-2 group-hover:text-red-500 transition-colors duration-300"
            >
              NÃO É AUTOAJUDA
            </h3>
            <p class="text-gray-500">
              É diagnóstico espiritual cirúrgico + solução prática.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Target Audience -->
    <section
      class="py-32 relative z-10 border-y border-white/5 bg-black/40 backdrop-blur-sm"
    >
      <div class="max-w-5xl mx-auto px-4 text-center">
        <h2
          v-motion-slide-visible-bottom
          class="text-3xl font-bold mb-16 text-white"
        >
          QUEM PROCURA ESSE ORÁCULO?
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-motion-pop-visible
            class="group p-8 border border-transparent hover:border-white/5 rounded-lg transition-all duration-500"
          >
            <div
              class="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500 opacity-50 group-hover:opacity-100"
            >
              🔒
            </div>
            <p
              class="text-gray-400 group-hover:text-white transition-colors duration-300"
            >
              Quem já tentou tudo — mas ainda sente a vida travada.
            </p>
          </div>
          <div
            v-motion-pop-visible
            class="group p-8 border border-transparent hover:border-white/5 rounded-lg transition-all duration-500"
          >
            <div
              class="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500 opacity-50 group-hover:opacity-100"
            >
              👻
            </div>
            <p
              class="text-gray-400 group-hover:text-white transition-colors duration-300"
            >
              Quem desconfia que o problema não é externo, e sim espiritual.
            </p>
          </div>
          <div
            v-motion-pop-visible
            class="group p-8 border border-transparent hover:border-white/5 rounded-lg transition-all duration-500"
          >
            <div
              class="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500 opacity-50 group-hover:opacity-100"
            >
              ⚡
            </div>
            <p
              class="text-gray-400 group-hover:text-white transition-colors duration-300"
            >
              Quem precisa de respostas agora — antes que o próximo ciclo repita
              a mesma dor.
            </p>
          </div>
        </div>
      </div>
      <div>
        <ScrollDownArrow
          class="absolute bottom-10 left-1/2 -translate-x-1/2"
          text=""
        />
      </div>
    </section>

    <!-- The Risk -->
    <section class="py-32 px-4 text-center relative z-10">
      <div
        v-motion-slide-visible-bottom
        class="max-w-3xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 p-12 md:p-16 hover:border-red-900/30 transition-all duration-500 group"
      >
        <h2
          class="text-[1.6rem] font-bold text-white mb-8 uppercase tracking-widest group-hover:text-red-500 transition-colors duration-300"
        >
          O Risco de Não Fazer Nada
        </h2>
        <p class="text-gray-400 mb-8 text-lg leading-relaxed">
          Cada dia que você adia essa consulta é um dia a mais alimentando os
          mesmos bloqueios. É continuar preso ao ciclo de fracasso, confusão e
          perda.
        </p>
        <p class="text-white font-bold text-xl">
          A escolha é simples: Encarar a verdade agora — ou continuar sangrando
          em silêncio.
        </p>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-32 relative z-10 bg-black/20 backdrop-blur-sm">
      <div class="max-w-5xl mx-auto px-4">
        <div class="relative">
          <h2
            v-motion-slide-visible-bottom
            class="text-3xl font-bold text-center tracking-normal mb-20 text-white"
          >
            DEPOIMENTOS DE QUEM JÁ JOGOU
          </h2>
          <ScrollDownArrow
            class="absolute -bottom-15 left-1/2 -translate-x-1/2"
            text=""
          />
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div
            v-motion-slide-visible-bottom
            class="bg-white/5 backdrop-blur-sm p-12 border border-white/5 hover:border-white/10 transition-all duration-500"
          >
            <p class="text-gray-400 italic mb-8 leading-relaxed">
              "Saí da consulta entendendo por que estava falindo e como mudar.
              Fiz o trabalho indicado e em 15 dias consegui contrato novo."
            </p>
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 bg-gray-800 rounded-full"></div>
              <p class="text-white font-bold text-sm">Carlos, 34</p>
            </div>
          </div>
          <div
            v-motion-slide-visible-bottom
            class="bg-white/5 backdrop-blur-sm p-10 border border-white/5 hover:border-white/10 transition-all duration-500"
          >
            <p class="text-gray-400 italic mb-8 leading-relaxed">
              "Não era ansiedade. Era bloqueio espiritual. O Oráculo mostrou o
              vilão e a solução. Saí mais leve e com direção."
            </p>
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 bg-gray-800 rounded-full"></div>
              <p class="text-white font-bold text-sm">Ana, 28</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section class="py-32 px-4 relative z-10">
      <div class="max-w-3xl mx-auto">
        <h2
          v-motion-slide-visible-bottom
          class="text-[1.6rem] md:text-[2.5rem] font-bold text-center relative mb-16 text-white"
        >
          COMO FUNCIONA
          <span
            ><ScrollDownArrow
              class="absolute -bottom-15 left-1/2 -translate-x-1/2"
              text=""
          /></span>
        </h2>
        <div class="grid md:grid-cols-2 gap-6 pt-8">
          <div
            v-motion-slide-visible-right
            class="group bg-white/5 backdrop-blur-sm border border-white/5 p-8 hover:border-red-900/30 transition-all duration-500 hover:bg-white/[0.07] rounded-sm"
          >
            <span
              class="text-gray-600 group-hover:text-red-500 text-xl font-bold block mb-4 transition-colors duration-300"
              >01.</span
            >
            <h3
              class="text-lg font-bold text-white mb-2 group-hover:text-red-500 transition-colors duration-300"
            >
              Agendamento
            </h3>
            <p class="text-gray-500">Você agenda sua sessão exclusiva.</p>
          </div>

          <div
            v-motion-slide-visible-right
            class="group bg-white/5 backdrop-blur-sm border border-white/5 p-8 hover:border-red-900/30 transition-all duration-500 hover:bg-white/[0.07] rounded-sm"
          >
            <span
              class="text-gray-600 group-hover:text-red-500 text-xl font-bold block mb-4 transition-colors duration-300"
              >02.</span
            >
            <h3
              class="text-lg font-bold text-white mb-2 group-hover:text-red-500 transition-colors duration-300"
            >
              Abertura
            </h3>
            <p class="text-gray-500">Na hora marcada, o Oráculo é aberto.</p>
          </div>

          <div
            v-motion-slide-visible-right
            class="group bg-white/5 backdrop-blur-sm border border-white/5 p-8 hover:border-red-900/30 transition-all duration-500 hover:bg-white/[0.07] rounded-sm"
          >
            <span
              class="text-gray-600 group-hover:text-red-500 text-xl font-bold block mb-4 transition-colors duration-300"
              >03.</span
            >
            <h3
              class="text-lg font-bold text-white mb-2 group-hover:text-red-500 transition-colors duration-300"
            >
              Revelação
            </h3>
            <p class="text-gray-500">
              Os 13 Exus mostram onde seus pilares estão desequilibrados.
            </p>
          </div>

          <div
            v-motion-slide-visible-right
            class="group bg-white/5 backdrop-blur-sm border border-white/5 p-8 hover:border-red-900/30 transition-all duration-500 hover:bg-white/[0.07] rounded-sm"
          >
            <span
              class="text-gray-600 group-hover:text-red-500 text-xl font-bold block mb-4 transition-colors duration-300"
              >04.</span
            >
            <h3
              class="text-lg font-bold text-white mb-2 group-hover:text-red-500 transition-colors duration-300"
            >
              Solução
            </h3>
            <p class="text-gray-500">
              Você recebe diagnóstico + solução prática.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA / Ultimatum -->
    <section
      id="agendar"
      class="py-40 px-4 text-center relative overflow-hidden z-10"
    >
      <div class="relative z-10 max-w-4xl mx-auto">
        <h2
          v-motion-pop-visible
          class="text-[2.125rem] mb-6 md:text-7xl p-12 font-bold text-white tracking-normal bg-black border-white/10"
        >
          CHAMADA FINAL

          <ScrollDownArrow
            class="absolute -bottom-15 left-1/2 -translate-x-1/2"
            text=""
          />
        </h2>

        <p
          class="text-xl mt-40 text-gray-400 mb-16 max-w-2xl mx-auto font-light"
        >
          A cada dia que você adia essa consulta, o problema cresce.
          <span class="text-white font-bold block mt-10"
            >Exu abre caminhos — mas só para quem tem coragem de olhar a
            verdade.</span
          >
        </p>

        <div>
          <button
            class="bg-white/5 border rounded-l-sm border-white/10 text-white text-[1rem] md:text-[1rem] font-bold py-8 px-16 uppercase tracking-[0.2em] hover:border-red-700 transition-all duration-500]"
          >
            Agendar Minha Consulta
          </button>
        </div>

        <p class="mt-12 text-[1rem] text-gray-600 uppercase tracking-[0.3em]">
          Vagas limitadas.
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
