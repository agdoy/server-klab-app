const router = require("express").Router()

const User = require('./../models/Disco.model')


router.get("/getUserProfile", (req, res, next) => {
    const { _id } = req.payload
    User
        .findById(_id)
        .then(response => res.json(response))
        .catch(err => next(err))

})

module.exports = router