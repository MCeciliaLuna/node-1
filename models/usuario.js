const { Schema, model } = require('mongoose');

const user = new Schema({
  name: String,
  apellido: String,
  edad: Number
})

module.exports = model('User', user)