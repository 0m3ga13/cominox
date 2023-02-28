const express = require('express');
const router = express.Router();
const API = require('../controllers/API')

router.post('/demandeDevis', API.demandeDevis);
router.post('/demandeCiterneIsotherme', API.demandeCiterneIsotherme);
router.post('/demandeCuveHorizentale', API.demandeCuveHorizentale);
router.post('/demandeCuveVerticale', API.demandeCuveVerticale);
router.post('/demandeFondoir', API.demandeFondoir);
router.post('/demandeMelangeurVerticale', API.demandeMelangeurVerticale);
router.post('/demandeMelangeurLait', API.demandeMelangeurLait);
router.post('/message', API.message);
module.exports = router;