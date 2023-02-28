<template>
    <form ref="form" @submit.prevent="submitForm">
        <section class="max-w-4xl p-6 bg-gray-100 mx-auto rounded-md shadow-md mt-20">
            <h1 class="text-xl font-bold text-gray-700 capitalize ">Informations du client</h1>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <label class="text-gray-900  " for="username">Client:</label>
                    <input id="username" type="text" name="client" v-model="formData.client"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md      focus:border-blue-500      focus:outline-none focus:ring">
                </div>

                <div>
                    <label class="text-gray-900  " for="emailAddress">Email</label>
                    <input id="emailAddress" type="email" name="email" v-model="formData.email"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md      focus:border-blue-500      focus:outline-none focus:ring">
                </div>
                <div>
                    <label class="text-gray-900  " for="adress">Adresse:</label>
                    <input id="address" type="text" name="address" v-model="formData.address"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md      focus:border-blue-500      focus:outline-none focus:ring">
                </div>
                <div>
                    <label class="text-gray-900   " for="phone">Tél.:</label>
                    <input id="phone" type="tel" name="phone" v-model="formData.phone" placeholder="123-45-678"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md      focus:border-blue-500      focus:outline-none focus:ring">
                </div>
            </div>
        </section>

        <section class="max-w-4xl p-6 bg-gray-100 mx-auto rounded-md shadow-md mt-5">
            <h1 class="text-xl font-bold text-gray-700 capitalize ">Informations techniques</h1>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-4">
                <div>
                    <label class="text-gray-900  " for="capacite">Capacité:</label>
                    <div class="block  rounded  mt-2">
                        <input id="capacite" type="''" v-model="formData.Capacity"
                            class="w-2/3 px-4 py-2  text-gray-700 bg-white border border-gray-2    00 rounded-md      focus:border-blue-500      focus:outline-none focus:ring">
                        <select v-model="formData.CapacityUnit"
                            class="  text-start w-1/3  bg-white text-gray-700 py-2 rounded-md select-none">
                            <option value="L">L</option>
                            <option value="KG">Kg</option>
                            <option value="m3">&#13221;</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label class="text-gray-900  " for="username">Matériau: </label>
                    <div class="block  rounded  mt-2">
                        <select v-model="formData.Material"
                            class="w-full bg-white text-gray-700  py-2    rounded-md select-none">
                            <option value="Aisi304">Aisi 304L</option>
                            <option value="Aisi316">Aisi 316L</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label class="text-gray-900  " for="position">Position de la cuve:</label>
                    <div class="block  rounded  mt-2">
                        <select v-model="formData.Position"
                            class="w-full bg-white text-gray-700  py-2  rounded-md select-none">
                            <option value="H">Horizentale</option>
                            <option value="V">Verticale</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label class="text-gray-900  " for="username">Fonction:</label>
                    <div class="block  rounded  mt-2">
                        <select v-model="formData.Function"
                            class="w-full bg-white text-gray-700  py-2   rounded-md select-none">
                            <option value="Stockage">Stockage</option>
                            <option value="Préparation">Préparation</option>
                            <option value="Transport">Transport</option>

                        </select>
                    </div>
                </div>

            </div>

        </section>

        <section class="max-w-4xl p-6 bg-gray-100 mx-auto rounded-md shadow-md mt-5">
            <h1 class="text-xl font-bold text-gray-700 capitalize ">Caractéristique du produit à stocker ou à préparer</h1>

            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                <div>
                    <label class="text-gray-900  " for="type produits">Nom (type ) du (ou des) produit (s)</label>
                    <div class="block  rounded  mt-2">
                        <input id="capacite" type="text" v-model="formData.NameOfProduct"
                            class="px-4 py-2  text-gray-700 bg-white border border-gray-2    00 rounded-md      focus:border-blue-500      focus:outline-none focus:ring">
                    </div>
                </div>
                <div>
                    <label class="text-gray-900  " for="Viscosité (cP)">Viscosité (cP)</label>
                    <div class="block  rounded  mt-2">
                        <input id="capacite" type="''" v-model="formData.Viscosity"
                            class="px-4 py-2  text-gray-700 bg-white border border-gray-2    00 rounded-md      focus:border-blue-500      focus:outline-none focus:ring">
                    </div>
                </div>

                <div>
                    <label class="text-gray-900  " for="Densité">Densité</label>
                    <div class="block  rounded  mt-2">
                        <input id="capacite" type="''" v-model="formData.Density"
                            class=" px-4 py-2  text-gray-700 bg-white border border-gray-2    00 rounded-md      focus:border-blue-500      focus:outline-none focus:ring">
                    </div>
                </div>

            </div>

        </section>
        <section class="max-w-4xl p-6 bg-gray-100 mx-auto rounded-md shadow-md mt-5">
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                <div>
                    <h1 class="text-xl font-bold text-gray-700 capitalize ">Toit</h1>
                    <div class="block  rounded  mt-2">
                        <select v-model="formData.RoofType"
                            class="w-full bg-white text-gray-700  py-2   rounded-md select-none">
                            <option value="Stockage">Couvercle</option>
                            <option value="Préparation"> Demi couvercle rabattable</option>
                            <option value="Transport"> Hérmetique (Toit conique)</option>
                            <option value="Transport"> Hérmetique(Fond bombé ))</option>
                        </select>
                    </div>
                </div>
                <div>
                    <h1 class="text-xl font-bold text-gray-700 capitalize ">Fond</h1>
                    <div class="block  rounded mt-2">
                        <select v-model="formData.BottomType"
                            class="w-full bg-white text-gray-700  py-2   rounded-md select-none">
                            <option value="Stockage"> Conique</option>
                            <option value="Préparation"> Bombé</option>
                            <option value="Transport"> Plat (incliné)</option>
                        </select>
                    </div>
                </div>
                <div>
                    <h1 class="text-xl font-bold text-gray-700 capitalize ">Agitation</h1>
                    <div class="block  rounded mt-2">
                        <select v-model="formData.AgitationType"
                            class="w-full bg-white text-gray-700  py-2   rounded-md select-none">
                            <option value="Stockage"> Lente</option>
                            <option value="Préparation"> Rapide</option>
                            <option value="Transport">Avec variateur de fréquence</option>
                        </select>
                    </div>
                </div>
            </div>
            <h1 class="text-xl font-bold text-gray-700 capitalize mt-6 ">Pression de service</h1>

            <div class="grid grid-cols-1 sm:grid-cols-2 mt-4">
                <div class="block">
                    <div>
                        <input id="default-radio-1" type="radio" value="" name="default-radio" v-model="formData.Pressure"
                            class="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 ">
                        <label for="agree" class="p-4"> Atmosphérique</label>

                    </div>
                    <div>
                        <input id="default-radio-1" type="radio" value="checked" name="default-radio"
                            class="peer w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 ">
                        <label for="agree" class="p-4">Autres à préciser</label>
                        <input id="pression" type="text"
                            class=" invisible peer-checked:visible px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-2    00 rounded-md      focus:border-blue-500      focus:outline-none focus:ring">
                    </div>
                </div>
                <div class="block">
                    <div>
                        <label class="text-gray-900 " for="type produits">Pression entrée produit</label>
                        <input id="capacite" type="''" placeholder="Bars" v-model="formData.PressureIn"
                            class="w-20 h-50 ml-4 px-4 text-gray-700 bg-white border border-gray-2  rounded-md      focus:border-blue-500      focus:outline-none focus:ring">
                    </div>
                    <div class="mt-4">
                        <label class="text-gray-900  " for="type produits">Pression sortie produit</label>
                        <input id="capacite" type="''" placeholder="Bars" v-model="formData.PressureOut"
                            class="w-20 h-50 ml-5 px-4  text-gray-700 bg-white border border-gray-2  rounded-md      focus:border-blue-500     focus:outline-none focus:ring  ">
                    </div>

                </div>
            </div>

            <h1 class="text-xl font-bold text-gray-700 capitalize mt-6 ">Températures</h1>
            <div>
                <div class="block">
                    <div>
                        <input id="default-radio-1" type="radio" value="" name="default-radio"
                            class="peer w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 ">
                        <label class="p-4"> Chauffage </label>
                        <input id="tChauffage" v-model="formData.tempHeat" type="text" placeholder="temperature de depart"
                            class=" ml-4 invisible peer-checked:visible px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-2    00 rounded-md      focus:border-blue-500      focus:outline-none focus:ring">
                    </div>
                    <div>
                        <input id="default-radio-1" type="radio" value="" name="default-radio"
                            class="peer w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 ">
                        <label for="Refroidissement" class="p-4"> Refroidissement </label>
                        <input id="tDepart" type="text" placeholder="temperature de depart"
                            v-model="formData.tempFreezeStart"
                            class="ml-4  invisible peer-checked:visible px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-2    00 rounded-md      focus:border-blue-500      focus:outline-none focus:ring">
                        <input id="tMin" type="text" placeholder="temperature Min" v-model="formData.tempFreeze"
                            class=" ml-4  invisible peer-checked:visible px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-2    00 rounded-md      focus:border-blue-500      focus:outline-none focus:ring">
                    </div>
                    <div>
                        <input id="default-radio-1" type="radio" value="" name="default-radio"
                            class="peer w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 ">
                        <label for="Stockage" class="p-4"> Stockage </label>
                        <input id="tDepart" type="text" placeholder="temperature de depart"
                            v-model="formData.tempStockStart"
                            class=" ml-4  invisible peer-checked:visible px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-2    00 rounded-md      focus:border-blue-500      focus:outline-none focus:ring">
                        <input id="tStockage" type="text" placeholder="temperature de stockage"
                            v-model="formData.tempStockEnd"
                            class=" ml-4  invisible peer-checked:visible px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-2    00 rounded-md      focus:border-blue-500      focus:outline-none focus:ring">
                    </div>

                </div>
            </div>
            <div class="block mt-6 w-full ">
                <label class="text-gray-900 px-4 " for="précisions">Autres précisions</label>
                <input id="précisions" type="text"
                    class="w-2/3 px-4 py-2  text-gray-700 bg-white border border-gray-2    00 rounded-md      focus:border-blue-500      focus:outline-none focus:ring">
            </div>


            <div class="flex justify-center mt-6">

                <button type="submit"
                    class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-cyan-900 rounded-md hover:bg-cyan-700 focus:outline-none focus:bg-cyan-600">Save</button>
            </div>
        </section>
    </form>
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
                address: '',
                phone: '',
                Capacity: '',
                CapacityUnit: '',
                Material: '',
                Position: '',
                Function: '',
                NameOfProduct: '',
                Viscosity: '',
                Density: '',
                RoofType: '',
                BottomType: '',
                AgitationType: '',
                Pressure: '',
                PressureIn: '',
                PressureOut: '',
                tempHeat: '',
                tempFreezeStart: '',
                tempFreeze: '',
                tempStockStart: '',
                tempStockEnd: '',
                OtherCommentary: '',
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
                const response = await API.addDevis(this.formData);
                console.log(this.formData.client)
                Toast.fire({
                    icon: 'success',
                    title: 'Demande devis avec success'
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