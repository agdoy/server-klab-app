const router = require("express").Router()

const {
    getUserProfile
} = require("../controllers/user.controllers")
const { verifyToken } = require("../middlewares/verifyToken")


router.get('/perfil', verifyToken, getUserProfile)


module.exports = router

