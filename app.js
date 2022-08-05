const express = require('express') // llamar express
const app = express() //guardar en una constante toda la funcionalidad importada arriba | esta constante puedo usar para generar rutas o acciones
const port = 8000 // puerto donde vamos a alojar nuestro servidor del backend


app.use(express.json()) //convertir datos | parsear
app.use(express.urlencoded())

app.get('/', (req, res) => { //app . (este punto puede llamar a GET, PATCH, PUT, POST, DELETE)
  res.send('Mensaje enviado')
})

app.delete('/delete', (req, res) => {
  res.status(404).json({ //mandar el status
    message: "Eliminación exitosa", //generalmente siempre mandaremos objetos
    id: 404
  })
})

app.post('/crear-usuario/', (req, res) => { //crear algo en la base de datos
  // console.log(req.body) //se requiere del front con esto

  const {name,apellido} = req.body

  res.json({
    message: `usuario ${name} ${apellido} creado exitosamente`
  })
})

app.patch('/editar-usuario/:name/:apellido', (req,res) =>{ //modificar partes del objeto
  const {name, apellido} = req.params

  res.json({
    message: `Usuario ${name} ${apellido} modificado exitosamente`
  })
})

app.put('/editar-partes-usuario/:name/:apellido', (req,res) =>{ //modificar partes del objeto
  const {name, apellido} = req.params
  const {edad} = req.body

  res.json({
    name,
    apellido,
    edad
  })
})

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${8000}`) //ver el resultado del puerto
})