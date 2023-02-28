<template>
    <form @submit.prevent="submitForm">
        <section class="max-w-4xl p-6 bg-gray-100 mx-auto rounded-md shadow-md mt-20">
            <h1 class="text-xl font-bold text-gray-700 capitalize mb-4 ">Informations Techniques</h1>

            <div class="grid grid-cols-2">
                <div>
                    <h1 class="text-md font-bold text-gray-700 capitalize mb-4">Capacité</h1>
                    <div class="block">
                        <div>
                            <input id="default-radio-1" type="radio" value="100" name="default-radio"
                                v-model="formData.capacity"
                                class="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 ">
                            <label for="500L" class="p-4"> 100 L </label>
                        </div>
                        <div>
                            <input id="default-radio-1" type="radio" value="200" name="default-radio"
                                v-model="formData.capacity"
                                class="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 ">
                            <label for="1000L" class="p-4"> 200 L</label>
                        </div>
                        <div>
                            <input id="default-radio-1" type="radio" value="500" name="default-radio"
                                v-model="formData.capacity"
                                class="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 ">
                            <label for="1000L" class="p-4"> 500 L</label>
                        </div>
                        <div>
                            <input id="default-radio-1" type="radio" value="checked" name="default-radio"
                                class="peer w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 ">
                            <label for="autres" class="p-4">Autres à préciser</label>
                            <input id="capacites" type="number"
                                class=" invisible peer-checked:visible text-gray-700 bg-white border border-gray-2     00 rounded-md      focus:border-blue-500     focus:outline-none focus:ring"
                                v-model="formData.capacity">
                        </div>
                    </div>
                </div>
            </div>

            <h1 class="text-xl font-bold text-gray-700 capitalize mt-6">Informations du client</h1>

            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <label class="text-gray-900  " for="username">Client:</label>
                    <input id="username" type="text" v-model="formData.client"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md      focus:border-blue-500     focus:outline-none focus:ring"
                        required>
                </div>

                <div>
                    <label class="text-gray-900  " for="emailAddress">Email</label>
                    <input id="emailAddress" type="email" v-model="formData.email"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md      focus:border-blue-500     focus:outline-none focus:ring"
                        required>
                </div>
                <div>
                    <div>
                        <label class="text-gray-900  " for="adress">Adresse:</label>
                        <input id="Address" type="text" v-model="formData.address"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md      focus:border-blue-500     focus:outline-none focus:ring"
                            required>
                    </div>
                    <div>
                        <label class="text-gray-900  " for="adress">Ville:</label>
                        <input id="Address" type="text" v-model="formData.city"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md      focus:border-blue-500     focus:outline-none focus:ring"
                            required>
                    </div>
                </div>
                <div class="w-1/2">
                    <label class="text-gray-900  " for="adress">Code Postale:</label>
                    <input id="Code Postal" type="text" v-model="formData.postalCode"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md      focus:border-blue-500     focus:outline-none focus:ring"
                         required>
                </div>
                <div>
                    <label class="text-gray-900   " for="phone">Tél.:</label>
                    <input id="phone" type="tel" name="phone" placeholder="123-45-678" v-model="formData.Phone"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md      focus:border-blue-500     focus:outline-none focus:ring"
                        required>
                </div>
            </div>
            <div class="flex justify-center mt-6">

                <button
                    class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-cyan-900 rounded-md hover:bg-cyan-700 focus:outline-none focus:bg-cyan-600">Save</button>
            </div>
        </section>
    </form>
</template>




<script>
import API from '../../api.js';
import vueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'
import Swal from 'sweetalert2'
export default {
    data() {
        return {
            formData: {
                capacity: '',
                client: '',
                email: '',
                address: '',
                postalCode: '',
                city: '',
                Phone: ''
            },
        };
    },

    methods: {
        async submitForm() {
            try {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,

                })
                const response = await API.addMelangeurLait(this.formData);
                console.log(this.formData.client);
                Toast.fire({
                    icon: 'success',
                    title: 'Demande offre avec success'
                })
                setTimeout(() => {
                    location.reload();
                }, 3100);

            } catch (error) {
                console.log(error);

            }
        }
    },

}



</script>