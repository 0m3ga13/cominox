import axios from 'axios';

const demandeDevis = '/api/post/demandeDevis';
const demandeCiterneIsotherme = '/api/post/demandeCiterneIsotherme'
const demandeCuveVerticale = '/api/post/demandeCuveVerticale'
const demandeCuveHorizentale = '/api/post/demandeCuveHorizentale'
const demandeFondoir = '/api/post/demandeFondoir'
const demandeMelangeurVerticale = '/api/post/demandeMelangeurVerticale'
const demandeMelangeurLait = '/api/post/demandeMelangeurLait'
const message = '/api/post/message'
export default class API {
    // create a form
    static async addDevis(devis){
        const rest = await axios.post(demandeDevis, devis);
        return rest.data;  
    }
    static async addCiterneIsotherme(citerneIsotherme){
        const rest = await axios.post(demandeCiterneIsotherme, citerneIsotherme);
        return rest.data;  
    }
    static async addCuveVerticale(cuveVerticale){
        const rest = await axios.post(demandeCuveVerticale, cuveVerticale);
        return rest.data;  
    }
    static async addCuveHorizentale(cuveHorizentale){
        const rest = await axios.post(demandeCuveHorizentale, cuveHorizentale);
        return rest.data;  
    }
    static async addFondoir(fondoir){
        const rest = await axios.post(demandeFondoir, fondoir);
        return rest.data;  
    }
    static async addMelangeurVerticale(melangeurVerticale){
        const rest = await axios.post(demandeMelangeurVerticale, melangeurVerticale);
        return rest.data;  
    }
    static async addMelangeurLait(melangeurLait){
        const rest = await axios.post(demandeMelangeurLait, melangeurLait);
        return rest.data;  
    }
    static async sendMessage(feedback){
        const rest = await axios.post(message, feedback);
        return rest.data;  
    }
}