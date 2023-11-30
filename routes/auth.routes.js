const router = require("express").Router()

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require("../models/User.model")
const { verifyToken } = require("../middlewares/verifyToken")
const saltRounds = 10

router.post('/signup', (req, res, next) => {
    console.log("--------------", req.body)
    const { firstname, lastname, email, password } = req.body

    if (password.length < 2) {
        res.status(400).jsono({ message: 'Tu contraseña requiere de 4 caracters minimos' })
        return
    }

    User
        .findOne({ email })
        .then((foundUser) => {

            if (foundUser) {
                res.status(400).json({ message: 'Correo ya registrado en Klab' })
                return
            }

            const salt = bcrypt.genSaltSync(saltRounds)
            const hashedPassword = bcrypt.hashSync(password, salt)

            return User.create({ firstname, lastname, email, password: hashedPassword })

        })
        .then(() => res.sendStatus(200))

        .catch(err => next(err))
})

router.post('/login', (req, res, next) => {

    const { email, password } = req.body

    if (email === '' || password === '') {
        res.status(400).json({ message: "Porfavor facilita tu username y contraseña" })
        return

    }

    User
        .findOne({ email })
        .then((foundUser) => {

            if (!foundUser) {
                res.status(401).json({ message: "Usuario no encontrado" })
                return
            }

            if (bcrypt.compareSync(password, foundUser.password)) {

                const { _id, email } = foundUser

                const payload = { _id, email }

                const authToken = jwt.sign(
                    payload,
                    process.env.TOKEN_SECRET,
                    { algorithm: 'HS256', expiresIn: "6h" }

                )
                res.json({ authToken })

            }
            else {
                res.status(401).json({ message: "Contraseña incorrecta" })
            }
        })
        .catch(err => next(err))
})

router.get('verify', verifyToken, (req, res, next) => {

    const loggedUser = req.payload

    res.json({ loggedUser })

})
module.exports = router

