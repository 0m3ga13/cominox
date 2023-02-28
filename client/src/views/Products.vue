<template>
   
<!-- Product List -->
<section class="mt-10 py-10">

  <div class="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
    <div v-for="callout in callouts" :key="callout.name" class="group relative">
    <article class=" relative rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
      <a href="#">
        <div class="relative flex items-end overflow-hidden rounded-xl">
          <img class="aspect-square" :src="callout.imageSrc" alt="Hotel Photo" />
        </div>
        <div class="mt-1 p-2">
          <h2 class="text-gray-900 font-bold">{{ callout.name }}</h2>
         <p class="text-gray-500 font-thin">{{ callout.description }}</p>
        </div>
      </a>
    </article>
</div>

    </div>
  
</section>
<div class=" justify-end">
<button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" class="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-200 ease-in-out bottom-5 right-5" id="btn-back-to-top">
  <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-4 h-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path></svg>
</button>
</div>
</template>

<script setup>
const callouts=[
    {
        name: 'Stockage',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, provident',
        imageSrc: 'https://www.dz-cominox.com/media/k2/items/cache/ccb4e23c8aa216f1e96d31ab209c036b_L.jpg',
    },
    {
        name: 'Process et Lignes Complètes',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, provident',
        imageSrc: 'https://www.dz-cominox.com/images/Gammes_de_produits/process.jpg',
    },
    {
        name: 'Lait',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, provident',
        imageSrc: 'https://www.dz-cominox.com/images/Gammes_de_produits/Lait2.jpg',
    },
    {
        name: 'Transport',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, provident',
        imageSrc: 'https://www.dz-cominox.com/images/Gammes_de_produits/transport.jpg',
    },
    {
        name: 'Equipements Auxiliaires',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, provident',
        imageSrc: 'https://www.dz-cominox.com/images/equ_auxiliares/mp%20100%20001.jpg',
    },
    {
        name: 'Ouvrages en Acier Inoxydable Chaudronnés sur Plans',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, provident',
        imageSrc: 'https://www.dz-cominox.com/images/Gammes_de_produits/Ouvrage_acier_naftal.jpg',
    },
]


</script>