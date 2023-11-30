const router = require("express").Router()

const Disco = require('./../models/Disco.model')

// OBTENER TODAS LAS DISCOS REGISTRADAS
router.get("/getAllDisco", (req, res) => {

    Disco


})

//OBTENER DISCO INDIVIDUAL
router.get("getOneDisco/:disco_id", (req, res, next) => {

    const { disco_id } = req.params

    Disco
        .findById(disco_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})


// GUARDAR DISCO
router.post("/saveDisco", (req, res, next) => {

    const { name, email, image, description } = req.body

    Disco
        .create({ name, description, image, email })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))

})

module.exports = router