const Devis = require('../models/Devis');
const CiterneIsotherme = require('../models/CiterneIsotherme');
const CuveHorizentale = require('../models/CuveHorizentale');
const CuveVerticale = require('../models/CuveVerticale');
const Fondoir = require('../models/Fondoir');
const MelangeurVerticale = require('../models/MelangeurVerticale');
const MelangeurLait = require('../models/MelangeurLait');
const Feedback = require('../models/Feedback')
module.exports = class API {
    // we will only need a create no delete/
    static async demandeDevis(req, res) {
        const devis = req.body;
        try {
            await Devis.create(devis);
            res.status(201).json({
                message: 'Demande devis avec succes'
            })
        } catch (err) {
            res.status(400).json({
                message: err.message
            })
        }
    };
    static async demandeCiterneIsotherme(req, res) {
        const citerneIsotherme = req.body;
        try {
            await CiterneIsotherme.create(citerneIsotherme);
            res.status(201).json({
                message: 'Demande offre avec succes'
            })
        } catch (err) {
            res.status(400).json({
                message: err.message
            })
        }
    };
    static async demandeCuveHorizentale(req, res) {
        const cuveHorizentale = req.body;
        try {
            await CuveHorizentale.create(cuveHorizentale);
            res.status(201).json({
                message: 'Demande offre avec succes'
            })
        } catch (err) {
            res.status(400).json({
                message: err.message
            })
        }
    };
    static async demandeCuveVerticale(req, res) {
        const cuveVerticale = req.body;
        try {
            await CuveVerticale.create(cuveVerticale);
            res.status(201).json({
                message: 'Demande offre avec succes'
            })
        } catch (err) {
            res.status(400).json({
                message: err.message
            })
        }
    };
    static async demandeFondoir(req, res) {
        const fondoir = req.body;
        try {
            await Fondoir.create(fondoir);
            res.status(201).json({
                message: 'Demande offre avec succes'
            })
        } catch (err) {
            res.status(400).json({
                message: err.message
            })
        }
    };
    static async demandeMelangeurVerticale(req, res) {
        const melangeurVerticale = req.body;
        try {
            await MelangeurVerticale.create(melangeurVerticale);
            res.status(201).json({
                message: 'Demande offre avec succes'
            })
        } catch (err) {
            res.status(400).json({
                message: err.message
            })
        }
    };
    static async demandeMelangeurLait(req, res) {
        const melangeurLait = req.body;
        try {
            await MelangeurLait.create(melangeurLait);
            res.status(201).json({
                message: 'Demande offre avec succes'
            })
        } catch (err) {
            res.status(400).json({
                message: err.message
            })
        }
    };
    static async message(req, res) {
        const feedback = req.body;
        try {
            await Feedback.create(feedback);
            res.status(201).json({
                message: 'Feedback received'
            })
        } catch (err) {
            res.status(400).json({
                message: err.message
            })
        }
    };

}