const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const saltRounds = 10

const User = require("./../models/User.model")
// const middleware uploader photo

const signup = (req, res, next) => {
    const { firstName, lastName, email, password } = req.body

    if (password.length < 2) {
        res.status(400).json({ message: 'Tu contraseña requiere de 4 caracters minimos' })
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

            return User.create({ firstName, lastName, email, password: hashedPassword })

        })
        .then(() => res.sendStatus(200))

        .catch(err => next(err))
}

const login = (req, res, next) => {
    console.log("-------------------------------------------", req.body)
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

                const { _id, email, firstName, lastName, role } = foundUser

                const payload = { _id, email, firstName, lastName, role }

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
}



module.exports = {
    signup,
    login
}

