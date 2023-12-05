const router = require("express").Router()

const uploader = require('../middlewares/uploader')

router.post('/image', uploader.single('imageData'), (req, res) => {
    console.log("estoy en el backenddd REQ.FILE-------------", req.file)
    if (!req.file) {
        res.status(500).json({ errorMessage: 'Error cargando el archivo' })
        return
    }

    res.json({ cloudinary_url: req.file.path })
})


module.exports = router