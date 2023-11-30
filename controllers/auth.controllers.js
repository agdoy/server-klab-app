const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const saltRounds = 10

const User = require("./../models/User.model")
// const middleware uploader photo

const getRegister = (req, res, next) => {

    User

        .save()
        .then()
        .catch(err => res.status(400).send({ err }))

    res.status(201).send({ test: "ok" })
}

