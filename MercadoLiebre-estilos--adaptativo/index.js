const express = require('express')
const app = express()
const path = require('path')
let port = 3000

const publicPath = path.resolve(__dirname, 'public')
/* Middleware */
app.use(express.static(publicPath))

/* Routing */
app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname,'/views/home.html'))
})

/* Server */
app.listen(port, () => console.log(`Servidor levantado en el puerto ${port}\n http://localhost:${port}`))