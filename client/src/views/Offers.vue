<template>
  <div class="container px-5 mt-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-5">
      <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 title-font text-gray-900">Nos Offres</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Choisissez l'offre qui vous convient</p>
      <div class="flex mx-auto mt-2">
        <button
          class="rounded-md p-2 mx-2 text-white bg-cyan-700  hover:bg-cyan-900 hover:text-white focus:bg-cyan-900 focus:text-white"
          @click="showSection1 = true; showSection2 = false">Récipients de stockage </button>
        <button
          class="rounded-md p-2 mx-2 text-white  bg-cyan-700 hover:bg-cyan-900 hover:text-white focus:bg-cyan-900 focus:text-white"
          @click="showSection1 = false; showSection2 = true">Mélangeurs</button>
      </div>
    </div>
  </div>

  <div v-if="showSection1" class="mb-6">

    <div class="flex flex-wrap justify-center">

      <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
          <h1 class="text-2xl tracking-widest title-font mb-3 font-bold">Citerne isotherme </h1>

          <p class="flex items-center text-gray-600 mb-2">
            <span
              class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-cyan-900 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Fabriquée entièrement en INOX alimentaire
          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span
              class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-cyan-900 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Doubles parois isolées en mousse polyuréthane
          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span
              class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-cyan-900 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Grande capacité de stockage
          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span
              class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-cyan-900 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Équipé d'un système de contrôle de température pour une précision maximale
          </p>
          <p class="flex items-center text-gray-600 mb-6">
            <span
              class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-cyan-900 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Construction robuste pour une utilisation à long terme
          </p>

          <router-link to="CuveIsotherme"
            class="flex items-center mt-auto text-white bg-cyan-900 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Commandez
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </router-link>

          <p class="text-xs text-gray-500 mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, id.</p>
        </div>
      </div>



      <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
          <h1 class="text-2xl tracking-widest title-font mb-3 font-bold"> Cuve de refroidissement horizontale </h1>

          <p class="flex items-center text-gray-600 mb-2">
            <span
              class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-cyan-900 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Refroidissement rapide et efficace

          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span
              class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-cyan-900 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Grande surface de refroidissement pour une meilleure performance
          </p>

          <p class="flex items-center text-gray-600 mb-2">
            <span
              class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-cyan-900 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Construction durable pour une utilisation à long terme
          </p>
          <p class="flex items-center text-gray-600 mb-6">
            <span
              class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-cyan-900 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Équipé d'un système de contrôle de température pour une précision maximale
          </p>

          <router-link to="CuveHorizentale"
            class="flex items-center mt-auto text-white bg-cyan-900 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Commandez
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </router-link>

          <p class="text-xs text-gray-500 mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, id.</p>
        </div>
      </div>


      <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
          <h1 class="text-2xl tracking-widest title-font mb-3 font-bold">Cuve de refroidissement </h1>

          <p class="flex items-center text-gray-600 mb-2">
            <span
              class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-cyan-900 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Refroidissement rapide et efficace pour une meilleure qualité du produit final

          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span
              class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-cyan-900 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Grande capacité de stockage
          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span
              class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-cyan-900 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Construction robuste pour une utilisation à long terme

          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span
              class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-cyan-900 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Équipé d'un système de contrôle de température pour une précision maximale
          </p>

          <router-link to="CuveVerticale"
            class="flex items-center mt-auto text-white bg-cyan-900 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Commandez
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </router-link>

          <p class="text-xs text-gray-500 mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, id.</p>
        </div>
      </div>

    </div>
  </div>

  <div v-if="showSection2">
    <!-- section 2 content here -->


    <div class="flex flex-wrap justify-center ">


      <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
          <h1 class="text-2xl tracking-widest title-font mb-3 font-bold">Fondoir pour graisses végétales </h1>

          <p class="flex items-center text-gray-600 mb-2">
            <span
              class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-cyan-900 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Mélange uniforme pour une qualité constante du produit final
          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span
              class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-cyan-900 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Vitesse de mélange réglable pour une flexibilité maximale

          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span
              class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-cyan-900 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Construction durable pour une utilisation à long terme
          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span
              class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-cyan-900 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Équipé d'un système de contrôle de vitess pour une précision maximale
          </p>


          <router-link to="Fondoir"
            class="flex items-center mt-auto text-white bg-cyan-900 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Commandez
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </router-link>

          <p class="text-xs text-gray-500 mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, id.</p>
        </div>
      </div>



      <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
          <h1 class="text-2xl tracking-widest title-font mb-3 font-bold"> Mélangeur de poudre vertical</h1>

          <p class="flex items-center text-gray-600 mb-2">
            <span
              class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-cyan-900 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Mélange uniforme pour une qualité constante du produit final
          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span
              class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-cyan-900 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Vitesse de mélange réglable pour une flexibilité maximale

          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span
              class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-cyan-900 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Design compact pour un encombrement minimal

          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span
              class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-cyan-900 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Équipé d'un système de contrôle de vitesse pour une précision maximale

          </p>

          <router-link to="MelangeurVerticale"
            class="flex items-center mt-auto text-white bg-cyan-900 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Commandez
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </router-link>

          <p class="text-xs text-gray-500 mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, id.</p>
        </div>
      </div>


      <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
          <h1 class="text-2xl tracking-widest title-font mb-3 font-bold">Mélangeur pour préparation du lait</h1>

        <p class="flex items-center text-gray-600 mb-2">
          <span
            class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-cyan-900 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
              class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>Grande capacité de stockage pour une production maximale
        </p>
        <p class="flex items-center text-gray-600 mb-2">
          <span
            class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-cyan-900 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
              class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>Fonte rapide et efficace des graisses végétales
        </p>
        <p class="flex items-center text-gray-600 mb-2">
          <span
            class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-cyan-900 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
              class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>Construction robuste pour une utilisation à long terme
        </p>
        <p class="flex items-center text-gray-600 mb-2">
          <span
            class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-cyan-900 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
              class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>Équipé d'un système de contrôle de température pour une précision maximale
        </p>

        <router-link to="MelangeurLben"
          class="flex items-center mt-auto text-white bg-cyan-900 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Commandez
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </router-link>

        <p class="text-xs text-gray-500 mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, id.</p>
      </div>
    </div>

  </div>

</div></template>
  
<script>
export default {
  data() {
    return {
      showSection1: true,
      showSection2: false
    };
  }
};
</script>