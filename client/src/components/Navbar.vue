<template>
    <div>
      <nav
      :class="headerClass"
        class="  rounded-md w-full
            fixed top-0 left-0 right-0  z-10  px-4 py-2 bg-blue-200/90  sm:bg-blue-200/0  md:flex md:justify-between md:items-center"
>
        <div class="flex items-center justify-between">
          <router-link
            to="/"
            class="
              text-xl
              font-bold
              sm:px-20

              text-cyan-900	
              md:text-2xl
             hover:text-gray-500            "
            >COMINOX
          </router-link>
          <!-- Mobile menu button -->
          <div @click="toggleNav" class="flex md:hidden">
            <button
              type="button"
              class="
                text-gray-900
                hover:text-gray-400
                focus:outline-none focus:text-gray-400
              "
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
  
        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="
            flex-col
            space-y-4
            text-sm
            text-gray-900 antialiased 
            md:flex md:space-y-0 md:flex-row md:items-center md:space-x-2 md:mt-0
          "
        >
          <router-link  @click="toggleNav" to="/" class="rounded-md text-gray-900 p-2  hover:bg-cyan-900 hover:text-white"  >Acceuil</router-link>
          <router-link   @click="toggleNav" to="products" class= " rounded-md text-gray-900  p-2 hover:bg-cyan-900 hover:text-white" :class="{ 'bg-cyan-900': $route.path === '/products', 'text-white': $route.path === '/products' }">Nos Produits</router-link>
        

          <li>
            <div class="relative">
              <!-- Dropdown toggle button -->
              <button
                @click="show = !show"
                 @mouseleave="delayHide"

                class="
        
                  flex
                  items-center
                  text-gray-900
                  hover:bg-cyan-900 hover:text-white
                  p-2
                  rounded-md
                  focus:outline-none
                "

                :class="{ 'bg-cyan-900': $route.path === '/Devis' || $route.path === '/Offers', 'text-white': $route.path === '/Devis'|| $route.path === '/Offers'}"
              >
                <span class=" ">Nos Services</span>
                <svg
                  class="w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
  
              <!-- Dropdown menu -->
                <transition
        enter-active-class="transition-opacity ease-out duration-100"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity ease-in duration-75"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
      >
              <div
                v-show="show"
                class="
                  mt-2
                  bg-slate-900
                  rounded-sm
                  shadow-xl
                  lg:absolute lg:right-0
                  w-40
                "
              >
                <router-link
                @click="toggleNav"
                  to="Offers"
                  class="
                    flex
                    px-4
                    py-2
                    text-sm text-gray-900 bg-blue-100
                    hover:bg-cyan-900 hover:text-white
                  "
                >
               Demande d'offre
                </router-link>
                <router-link
                @click="toggleNav"
                  to="Devis"
                  class="
                    flex
                    px-4
                    py-2
                    text-sm text-gray-900  bg-blue-100
                    hover:bg-cyan-900 hover:text-white
                  "
                  
                >
                Demande de devis
                </router-link>
                
              </div>
            </transition>

            </div>
          </li>
          <router-link  @click="toggleNav" to="about" class="rounded-md p-2 text-gray-900   hover:bg-cyan-900 hover:text-white" :class="{ 'bg-cyan-900': $route.path === '/about', 'text-white': $route.path === '/about' }">A propos de Nous</router-link>
          <router-link  @click="toggleNav" to="Secteurs" :class="{ 'bg-cyan-900': $route.path === '/Secteurs', 'text-white': $route.path === '/Secteurs' }" class="rounded-md p-2 text-gray-900   hover:bg-cyan-900 hover:text-white" >Secteur d'Activités</router-link>

          <router-link   @click="toggleNav" to="Contact"><button class=" bg-transparent hover:bg-cyan-900 text-gray-900 font-semibold hover:text-white py-2 px-4 border border-gray-900 hover:border-transparent rounded">
  Contactez-Nous
</button></router-link>
        </ul>
      </nav>
    </div>
  </template>

  
  <script>
    import { ref } from 'vue';
 
    export default {
      setup() {
        let showMenu = ref(false);
        let show = ref(false);
        const toggleNav = () => (showMenu.value = !showMenu.value);
        return { showMenu, show, toggleNav
};

      },
      data() {
    return {
      scrolled: false
    };
  },
  computed: {
    headerClass() {
      return {
        'bg-gray-200': this.scrolled,
        'sm:bg-indigo-100/90': this.scrolled,
      }
    }
  },
  methods: {
    onScroll() {
      this.scrolled = window.scrollY > 0;
    },
    delayHide() {
      setTimeout(() => {
        this.show = false;
      }, 1000); // 500ms delay
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  }
    };
  </script>

