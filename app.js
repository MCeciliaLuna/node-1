const express = require('express') // llamar express
const app = express() //guardar en una constante toda la funcionalidad importada arriba | esta constante puedo usar para generar rutas
const port = 8000 // puerto donde vamos a alojar nuestro servidor del backend

app.get('/', (req, res) => { //app . (este punto puede llamar a GET, PATCH, PUT, POST, DELETE)
  res.send('Hola mundo!')
})

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${8000}`)
})