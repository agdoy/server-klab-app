const Disco = require("../models/Disco.model")
const Packs = require('../models/Packs.model')

// TODO: GESTIONAR TODOS LOS CATCH CON NEXT
// TODO: REVISAR LAS POSIBILIDADES DE SELECT Y SORT

const findDiscos = (req, res) => {
    Disco.find()
        .then(discos => {
            res.json(discos)
        })
        .catch(error => {
            console.error(error)
            res.status(500).json({ error: 'Error al obtener todas las discotecas.' })
        })
}

const oneDisco = (req, res, next) => {
    const { disco_id } = req.params

    Promise.all([
        Disco.findById(disco_id).populate('owner'),
        Packs.find({ disco: disco_id })
    ])
        .then(response => {
            const [disco, packs] = response
            res.json({ disco, packs })
        })
        .catch(err => next(err))
}

const saveDisco = (req, res, next) => {
    const { name, email, image, description, place, address } = req.body
    const { _id: owner } = req.payload

    Disco
        .create({ name, description, image, owner, email, place, address })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
}

const filterDisco = (req, res, next) => {

    const { filter } = req.params

    const filterTextSearch = new RegExp(filter, "i")

    Disco
        .find({ name: filterTextSearch })
        .then(response => {
            res.status(200).send(response)
        })
        .catch(err => next(err))
}

//}

module.exports = {
    findDiscos,
    oneDisco,
    saveDisco,
    filterDisco
}