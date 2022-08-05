require('./database/db')

const express = require('express')
const app = express()

const User = require('./models/usuario')

const port = 8000

app.use(express.json())
app.use(express.urlencoded())

app.post('/crear-usuario', async(req, res) => {

  const {name, apellido, edad} = req.body

  const nuevoUsuario = new User({
    name,
    apellido,
    edad
  })

  nuevoUsuario.save()

  res.json({
    message: `usuario ${name} ${apellido} creado exitosamente`,
    response
  })
})

app.get('/', (req, res) => {
  res.send('Mensaje enviado')
})

app.delete('/delete', (req, res) => {
  res.status(404).json({
    message: "Creación de usuario exitosa",
    id: 404
  })
})


app.patch('/editar-usuario/:name/:apellido', (req,res) =>{
  const {name, apellido} = req.params

  res.json({
    message: `Usuario ${name} ${apellido} modificado exitosamente`
  })
})

app.put('/editar-partes-usuario/:name/:apellido', (req,res) =>{
  const {name, apellido} = req.params
  const {edad} = req.body

  res.json({
    name,
    apellido,
    edad
  })
})

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${8000}`)
})