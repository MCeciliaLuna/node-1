import mongoose from 'mongoose';

try {
  mongoose.connect('mongodb+srv://Comision24i:Comision24i@comision24i.tix6r3w.mongodb.net/?retryWrites=true&w=majority');
  console.log('db conectada')
} catch (error) {
  console.log(error)
}