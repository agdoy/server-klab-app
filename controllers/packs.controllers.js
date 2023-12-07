const Packs = require("../models/Packs.model")

const savePacks = (req, res, next) => {
    const { name, description, image, capacity, price, disco } = req.body

    Packs
        .create({ name, description, image, capacity, price, disco })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
}

const updatePack = (req, res, next) => {
    const { packId } = req.params;
    const { name, description, image, capacity, price } = req.body;

    Packs
        .findByIdAndUpdate(
            packId,
            { name, description, image, capacity, price },
            { new: true }
        )
        .then(updatedPack => res.json(updatedPack))
        .catch(err => next(err));
};

module.exports = {
    savePacks,
    updatePack,
};