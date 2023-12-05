const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, 'El nombre es obligatorio']
    },
    lastName: {
      type: String,
      required: [true, 'Los apellidos son obligatorios']
    },
    email: {
      type: String,
      required: [true, 'El correo electrónico es obligatorio'],
      unique: [true, 'Este correo electrónico ya esta en uso'],
    },
    password: {
      type: String,
      required: [true, 'La contraseña es obligatoria'],
      minlength: [4, 'La contraseña debe tener al menos 4 caracteres']

    },
    role: {
      type: String,
      enum: ['ADMIN', 'USER'],
      default: 'USER'
    },
  },
  {
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
