const { Schema, model } = require("mongoose");

const discoSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'El nombre del establecimiento es obligatorio']
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        email: {
            type: String,
            required: [true, 'El correo electrónico es obligatorio'],
            unique: [true, 'Ya existe una discoteca con este correo electrónico'],
        },
        image: {
            type: String,
            required: [true, 'La URL de la foto es obligatoria']
        },
        description: {
            type: String,
            required: [true, 'La descripción es obligatoria']
        },
        place: {
            type: String,
            required: [true, 'La ciudad es obligatoria']
        },
        address: {
            type: String,
            required: [true, 'La direccion es obligatoria']
        },

    },
    {
        timestamps: true
    }
);

const Disco = model("Disco", discoSchema);

module.exports = Disco;
