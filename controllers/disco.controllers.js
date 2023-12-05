const Disco = require("../models/Disco.model");

const findDiscos = (req, res) => {
    Disco.find()
        .then(discos => {
            res.json(discos);
        })
        .catch(error => {
            console.error(error)
            res.status(500).json({ error: 'Error al obtener todas las discotecas.' })
        });
}

const oneDisco = (req, res, next) => {
    const { disco_id } = req.params

    Disco
        .findById(disco_id)
        .then(response => res.json(response))
        .catch(err => next(err));
}

const saveDisco = (req, res, next) => {
    const { name, email, image, description } = req.body

    Disco
        .create({ name, description, image, email })
        .then(() => res.sendStatus(200))
        .catch(err => next(err));
}

const filterDisco = (req, res, next) => {

    const { filter } = req.params;


    const filterTextSearch = new RegExp(filter, "i")


    Disco.find({ name: filterTextSearch }).
        then(response => {
            res.status(200).send(response);
        });
}

module.exports = {
    findDiscos,
    oneDisco,
    saveDisco,
    filterDisco,

}