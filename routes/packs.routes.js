const router = require("express").Router();
const { verifyToken } = require("./../middlewares/verifyToken");
const { savePacks, updatePack } = require("../controllers/packs.controllers");

router.post("/savePacks", verifyToken, savePacks);
router.put("/editPack/:packId", updatePack)

module.exports = router;