const router = require("express").Router()
const {
    findDiscos,
    oneDisco,
    saveDisco,
    filterDisco,

} = require("../controllers/disco.controllers")

const { verifyToken } = require("../middlewares/verifyToken")

router.get("/getAllDisco", findDiscos)

router.get("/getOneDisco/:disco_id", oneDisco)

router.post("/saveDisco", verifyToken, saveDisco)

router.get("/search/:filter", filterDisco)

module.exports = router;
