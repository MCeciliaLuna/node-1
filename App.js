const express = require('express') //requerimos o importamos la librería EXPRESS
const app = express() // guardamos todos los métodos de EXPRESS en la función
const port = 8000 // puerto donde vamos a alojar (https)

app.get('/holamundo',(req, res) => { //utilizamos APP en forma de método | genera una respuesta a la persona que pegue a este pad
  //res.send('Hola mundo!') generalmente vamos a mandar objetos, NO TEXTO
  res.json({//enviaremos dentro el objeto como respuesta
    mensaje: 'Salió todo bien',
    número: 777
  })
}) 

app.get('/chaumundo', (req,res) => {
  res.status(201).json({
    mensaje: 'Adiós',
    numero: 102
  }).status(201)
})

// app.post('/crearusuario', (req, res) => { //en vez de enviar info (get), utilizaremos la info que TRAE el post a través del BODY de postman | crear algo en una base de datos
//   console.log(req)
//   res.json(req.body)
// })

app.listen(port,() => { //ver donde esta funcionando / en qué puerto funciona nuestro backend
  console.log('El sercidor está corriendo en el puerto' + port)
})
