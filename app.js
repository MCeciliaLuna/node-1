const express = require('express') // llamar express
const app = express() //guardar en una constante toda la funcionalidad importada arriba | esta constante puedo usar para generar rutas o acciones
const port = 8000 // puerto donde vamos a alojar nuestro servidor del backend

app.get('/', (req, res) => { //app . (este punto puede llamar a GET, PATCH, PUT, POST, DELETE)
  res.send('Mensaje enviado')
})

app.delete('/delete', (req, res) => {
  res.status(404).json({ //mandar el status
    message: "Eliminación exitosa", //generalmente siempre mandaremos objetos
    id: 404
  })
})

app.post('/post', (req, res) => {
  console.log(req)
  res.json(body)
})

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${8000}`) //ver el resultado del puerto
})