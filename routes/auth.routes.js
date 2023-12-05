
const router = require("express").Router()
const {
    signup,
    login,

} = require("../controllers/auth.controllers")

const { verifyToken } = require("../middlewares/verifyToken");



router.post('/signup', signup)

router.post('/login', login)

router.get('/verify', verifyToken, (req, res, next) => {

    const loggedUser = req.payload

    res.json({ loggedUser })

})
module.exports = router

