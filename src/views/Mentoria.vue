<script setup>
import { ref } from "vue";
import heroBg from "../assets/knife.png";
import ScrollDownArrow from "../components/ScrollDownArrow.vue";

const learningPoints = [
  "Como cultuar Exu e Pombogira em casa, com segurança e respeito.",
  "Como montar uma firmeza sem abrir porta errada.",
  "Como ouvir a própria intuição mediúnica sem se assustar com ela.",
  "Como diferenciar força espiritual de emoção, fantasia ou obsessão.",
  "Como se proteger de manipulação, abuso e dependência espiritual.",
  "Como construir relação REAL com Exu — não teatral, não inventada.",
  "Como organizar sua vida espiritual sem depender de nenhum terreiro.",
];

const credentials = [
  "7 anos de culto direto a Exu e Pombogira.",
  "4 anos de atuação como oraculista de Exu.",
  "Médium desde criança, sentindo o que o mundo finge não ver.",
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
      class="min-h-screen flex flex-col items-center justify-center text-center px-4 relative z-10 pt-20 pb-32 overflow-hidden"
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
          class="text-[2rem] md:text-[3.5rem] font-medium tracking-tight font-['Google_Sans_Flex'] text-white mb-8 leading-tight uppercase"
        >
          Mentoria
        </h1>

        <p
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { delay: 500, duration: 1000 } }"
          class="text-[1rem] md:text-xl text-gray-300 max-w-2xl font-medium tracking-wide mb-12 leading-relaxed"
        >
          O CAMINHO PARA CULTUAR EXU SEM SER CONTROLADO POR NINGUÉM
        </p>

        <div
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { delay: 800, duration: 1000 } }"
          class="text-sm md:text-base text-gray-400 font-light mb-12 max-w-2xl space-y-6"
        >
          <p>
            Para quem sente Exu chamar — mas tem medo de cair nas mãos
            erradas.<br />
            Para quem já ouviu a força bater na alma — mas não sabe como
            responder.<br />
            Para quem sabe que foi escolhido — mas não quer ser manipulado.
          </p>
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
        >
      </div>
    </div>
    <ScrollDownArrow text="" />
    </header>

    <!-- Introduction -->
    <section class="py-32 px-4 relative z-10 text-center overflow-hidden">
      <div class="max-w-4xl mx-auto">
        <div v-motion-slide-visible-bottom class="text-center mb-20">
          <p class="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
            Você não está buscando um “curso”.<br />
            Você está buscando liberdade espiritual com segurança.
          </p>
          <p class="text-lg text-gray-400 leading-relaxed mb-12">
            Orientação real, ética, firme —<br />
            sem virar mão de obra de terreiro, sem virar ferramenta dos
            outros,<br />
            e sem colocar sua vida nas mãos de quem usa a fé alheia como moeda.
          </p>
          <div class="h-px w-24 bg-red-900/50 mx-auto mb-12"></div>
          <p class="text-lg text-white font-bold leading-relaxed">
            Essa mentoria existe por um motivo simples:<br />
            Exu chamou — e você precisa aprender a caminhar sem coleira.
          </p>
        </div>
      </div>
      <div class="mt-12 flex justify-center">
        <ScrollDownArrow text="" />
      </div>
    </section>

    <!-- Target Audience -->
    <section
      class="py-32 relative z-10 border-y border-white/5 bg-black/20 backdrop-blur-sm"
    >
      <div class="max-w-6xl mx-auto px-4">
        <h2
          v-motion-slide-visible-bottom
          class="text-3xl font-bold text-center mb-20 text-white tracking-tight"
        >
          PARA QUEM É ESSA MENTORIA
        </h2>

        <div class="grid md:grid-cols-2 gap-16">
          <!-- Group 1 -->
          <div v-motion-slide-visible-left class="space-y-8">
            <div
              class="group bg-white/5 backdrop-blur-sm border border-white/5 p-8 hover:border-red-900/30 transition-all duration-500 hover:bg-white/[0.07] rounded-sm h-full"
            >
              <h3
                class="text-xl font-bold text-white mb-6 group-hover:text-red-500 transition-colors duration-300"
              >
                1 — Iniciantes que sentem Exu e Pombogira… mas não sabem por
                onde começar
              </h3>
              <div class="space-y-4 text-gray-400 text-sm leading-relaxed">
                <p>
                  Gente que sente arrepio, intuição, sonho, presença… mas não
                  tem referência segura.
                </p>
                <p>
                  Gente curiosa, sensível, que ama Exu — mas tem medo real de
                  cair em terreiro errado, de se submeter a pai de santo
                  manipulador, de entregar sua energia a quem só quer mais um
                  soldado.
                </p>
                <p class="text-white font-medium pt-4">
                  Essa mentoria dá o que nenhum terreiro te dá: caminho sem
                  cobrança, sem hierarquia abusiva, sem “faz porque eu mandei”.
                </p>
                <p class="italic">
                  Aqui você cultua no seu tempo. Na sua casa. Com ética. Com
                  proteção.
                </p>
              </div>
            </div>
          </div>

          <!-- Group 2 -->
          <div v-motion-slide-visible-right class="space-y-8">
            <div
              class="group bg-white/5 backdrop-blur-sm border border-white/5 p-8 hover:border-red-900/30 transition-all duration-500 hover:bg-white/[0.07] rounded-sm h-full"
            >
              <h3
                class="text-xl font-bold text-white mb-6 group-hover:text-red-500 transition-colors duration-300"
              >
                2 — Pessoas que já tiveram contato com Exu… mas querem
                aprofundar o culto
              </h3>
              <div class="space-y-4 text-gray-400 text-sm leading-relaxed">
                <p>
                  Gente que já sentiu a força, já acendeu vela, já ouviu um
                  chamado… mas não sabe se pode seguir sozinha.
                </p>
                <p>
                  Gente que quer fazer firmeza, ofertar, tocar o dia a dia
                  espiritual — sem risco, sem erro, sem se expor ao astral de
                  qualquer jeito.
                </p>
                <p class="text-white font-medium pt-4">
                  Aqui você aprende o que ninguém explica: a linha, a ética, o
                  fundamento e a postura.
                </p>
                <p class="italic">
                  Sem teatro. Sem fantasia. Sem charlatanismo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What You Will Learn -->
    <section class="py-32 px-4 relative z-10">
      <div class="max-w-4xl mx-auto">
        <h2
          v-motion-slide-visible-bottom
          class="text-3xl font-bold text-center mb-16 text-white"
        >
          O QUE VOCÊ VAI APRENDER (DE VERDADE)
        </h2>

        <div
          class="bg-white/5 backdrop-blur-md border border-white/5 p-8 md:p-12 rounded-sm"
        >
          <ul class="space-y-6">
            <li
              v-for="(point, index) in learningPoints"
              :key="index"
              v-motion-slide-visible-bottom
              class="flex gap-4 items-start group"
            >
              <span class="text-red-500 font-bold text-xl">•</span>
              <p
                class="text-gray-300 group-hover:text-white transition-colors duration-300"
              >
                {{ point }}
              </p>
            </li>
          </ul>

          <div class="mt-12 text-center border-t border-white/10 pt-8">
            <p class="text-xl font-bold text-white">
              Nada disso é “teoria”.<br />
              <span class="text-red-500"
                >É prática. É fundamento. É caminho real.</span
              >
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why You Can Teach This -->
    <section
      class="py-32 relative z-10 border-y border-white/5 bg-black/20 backdrop-blur-sm"
    >
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2
          v-motion-slide-visible-bottom
          class="text-3xl font-bold mb-12 text-white"
        >
          POR QUE EU POSSO ENSINAR ISSO?
        </h2>

        <p class="text-xl text-gray-300 mb-12">
          Porque eu não estudei Exu.<br />
          <span class="font-bold text-white">Eu vivo Exu.</span>
        </p>

        <div class="grid md:grid-cols-3 gap-6 mb-12">
          <div
            v-for="(cred, index) in credentials"
            :key="index"
            v-motion-pop-visible
            class="bg-white/5 p-6 rounded-sm text-center border border-white/5"
          >
            <p class="text-gray-400 text-center align-center text-sm">
              {{ cred }}
            </p>
          </div>
        </div>

        <p class="text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Eu não falo “sobre espiritualidade”. Eu falo a partir dela.<br /><br />
          Eu já abri caminhos para dezenas de pessoas que não sabiam como lidar
          com a própria força. Agora eu ensino essa mesma liberdade — sem os
          abusos, sem as manipulações, sem as correntes invisíveis que prendem
          tanta gente.
        </p>
      </div>
    </section>

    <!-- How It Works -->
    <section class="py-32 px-4 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <h2
          v-motion-slide-visible-bottom
          class="text-3xl font-bold mb-16 text-white"
        >
          COMO A MENTORIA FUNCIONA
        </h2>

        <div class="grid gap-6 text-left max-w-2xl mx-auto">
          <div
            v-motion-slide-visible-bottom
            class="flex gap-4 items-center bg-white/5 p-6 rounded-sm border border-white/5 hover:border-red-900/30 transition-all duration-300"
          >
            <span class="text-2xl">🎯</span>
            <p class="text-gray-300">
              Encontros individuais, profundos, diretos.
            </p>
          </div>
          <div
            v-motion-slide-visible-bottom
            class="flex gap-4 items-center bg-white/5 p-6 rounded-sm border border-white/5 hover:border-red-900/30 transition-all duration-300"
          >
            <span class="text-2xl">⚡</span>
            <p class="text-gray-300">
              Orientação prática para seu caso, sua energia, seu ritmo.
            </p>
          </div>
          <div
            v-motion-slide-visible-bottom
            class="flex gap-4 items-center bg-white/5 p-6 rounded-sm border border-white/5 hover:border-red-900/30 transition-all duration-300"
          >
            <span class="text-2xl">📝</span>
            <p class="text-gray-300">
              Passo a passo para estruturar seu próprio culto em casa.
            </p>
          </div>
          <div
            v-motion-slide-visible-bottom
            class="flex gap-4 items-center bg-white/5 p-6 rounded-sm border border-white/5 hover:border-red-900/30 transition-all duration-300"
          >
            <span class="text-2xl">🧭</span>
            <p class="text-gray-300">
              Direção espiritual personalizada, sem dogma.
            </p>
          </div>
          <div
            v-motion-slide-visible-bottom
            class="flex gap-4 items-center bg-white/5 p-6 rounded-sm border border-white/5 hover:border-red-900/30 transition-all duration-300"
          >
            <span class="text-2xl">🛡️</span>
            <p class="text-gray-300">
              Acompanhamento real, para que você não abra porta errada.
            </p>
          </div>
        </div>

        <p class="mt-12 text-xl text-white font-bold uppercase tracking-widest">
          Não há pressa. Não há obrigação. Há caminho.
        </p>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-40 px-4 text-center relative overflow-hidden z-10">
      <div class="relative z-10 max-w-3xl mx-auto">
        <p class="text-xl text-gray-400 mb-12 leading-relaxed">
          Você sente Exu. Exu sente você.<br />
          E entre essas duas forças existe um espaço enorme —<br />
          o espaço onde alguém pode te guiar… ou te manipular.
        </p>

        <p class="text-white font-bold text-lg mb-16">
          Essa mentoria existe para garantir que ninguém nunca mais coloque a
          mão na sua fé.
        </p>

        <button
          class="bg-white/5 border border-white/10 text-white text-[1rem] font-bold py-6 px-12 uppercase tracking-[0.2em] hover:border-red-700 transition-all duration-500"
        >
          Quero Caminhar com Segurança
        </button>

        <p class="mt-12 text-gray-500 text-sm uppercase tracking-widest">
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
