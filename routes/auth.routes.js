
const router = require("express").Router()
const { verifyToken } = require("../middlewares/verifyToken");
const {
    signup,
    login,

} = require("../controllers/auth.controllers")




router.post('/signup', signup)

router.post('/login', login)

router.get('/verify', verifyToken, (req, res, next) => {

    const loggedUser = req.payload

    res.json({ loggedUser })

})
module.exports = router

