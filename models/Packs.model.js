const { Schema, model } = require("mongoose");

const packSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'El nombre del pack es obligatorio']
        },
        description: {
            type: String,
            required: [true, 'La descripción es obligatoria']
        },
        image: {
            type: String,
            required: [true, 'La URL de la foto es obligatoria']
        },
        capacity: {
            type: Number,
            required: [true, 'El aforo de personas es obligatorio'],
            min: [1, 'El aforo debe ser al menos 1 persona']
        },
        price: {
            type: Number,
            required: [true, 'El precio es obligatorio'],
            min: [1, 'El precio no puede ser negativo']
        },
        disco: {
            type: Schema.Types.ObjectId,
            ref: 'Disco',
        },
    },
    {
        timestamps: true
    }
);

const PackModel = model('Pack', packSchema);

module.exports = PackModel;
