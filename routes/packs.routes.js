const router = require("express").Router();
const { verifyToken } = require("./../middlewares/verifyToken");
const { savePacks, updatePack, deletePack } = require("../controllers/packs.controllers");

router.post("/savePacks", verifyToken, savePacks);

router.put("/editPack/:packId", updatePack)

router.delete(`/delete/:packId`, deletePack)

module.exports = router;