const router = require("express").Router()
const {
    findDiscos,
    oneDisco,
    saveDisco,
    filterDisco,

} = require("../controllers/disco.controllers");

const Disco = require('./../models/Disco.model')

router.get("/getAllDisco", findDiscos);

router.get("/getOneDisco/:disco_id", oneDisco);

router.post("/saveDisco", saveDisco);

router.get("/search/:filter", filterDisco);

module.exports = router;
