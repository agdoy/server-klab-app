const User = require("../models/User.model");

const getUserProfile = (req, res, next) => {
    console.log("llego al backend---------------------------", req.payload)

    const { _id } = req.payload
    console.log('--------------------------', _id)
    User
        .findById(_id)
        .then(response => res.json(response))
        .catch(err => next(err))

}


module.exports = {
    getUserProfile
}