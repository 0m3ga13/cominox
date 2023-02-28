<template>
  <section class="text-gray-600 body-font relative">
    
    <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
      <div
        class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0"
          marginwidth="0" scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.855952104492!2d3.268655815289844!3d36.79800397994897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e459235f9bca1%3A0xff809e252e1c6ce0!2z2YPZiNmFINin2YrZhtmI2YPYsw!5e0!3m2!1sen!2sdz!4v1675557172064!5m2!1sen!2sdz"
          style="filter: grayscale(0) contrast(1.2) opacity(0.6);"></iframe>
        <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
          <div class="lg:w-1/2 px-6">
            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
            <p class="mt-1">RN n° 24 Ain Taya Alger</p>
          </div>
          <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
            <a class="text-cyan-800 leading-relaxed"> cominox@dz-cominox.com</a>
            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
            <p class="leading-relaxed">023 95 86 24 / 023 95 86 22 / 023 95 86 18</p>
          </div>
        </div>
      </div>
      <form @submit.prevent="submitForm" ref="form"
        class="p-5 lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
        <p class="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
        <div class="relative mb-4">
          <label for="name" class="leading-7 text-sm text-gray-600">Nom Complet</label>
          <input type="text" id="name" name="name" v-model="formData.client"
            class="w-full bg-white rounded border border-gray-300 focus:border-cyan-800 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        </div>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
          <input type="email" id="email" name="email" v-model="formData.email"
            class="w-full bg-white rounded border border-gray-300 focus:border-cyan-800 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        </div>
        <div class="relative mb-4">
          <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
          <textarea id="message" name="message" v-model="formData.message"
            class="w-full bg-white rounded border border-gray-300 focus:border-cyan-800 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
        </div>
        <button
          class="text-white bg-cyan-900 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-800 rounded text-lg">Envoyer
          le Message</button>
        <p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.
        </p>
      </form>

    </div>
  </section>
</template>



<script>
import API from '../api.js';
import vueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'
import Swal from 'sweetalert2'
export default {
  data() {
    return {
      formData: {
        client: '',
        email: '',
        message: ''

      },
    };
  },

  methods: {
    async submitForm() {
      try {

        const response = await API.sendMessage(this.formData);
        console.log(this.formData.client);
        let timerInterval
        Swal.fire({
          title: 'Your Feedback Has been Received :)!',
          html: 'You will be redirected to home in <b></b> milliseconds.',
          timer: 3000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft()
            }, 100)
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        })
        setTimeout(() => {
          this.$router.replace('/')
                }, 3200);
      } catch (error) {
        console.log(error);

      }
    }
  },

}



</script>