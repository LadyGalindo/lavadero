console.log("Hola Server, Grupo EGDA");

// crear una const de tipo express que manejar los hilos de nuestro archivo server.js
const express = require('express')
const app = express();
const port = 3001
const mongoose = require('mongoose')

// hCEMOS LA CADENA DE CONECCION 
const {stringConn} = require('./db/dbConnection')
mongoose.connect(stringConn);

//Creando el parserBody de las peticiones HTTP
app.use(express.urlencoded( {extended: true} ) )
app.use (express.json())

//Creacion del objeto de ruta para los End Points
// HACE EL LLAMADO DEL FRONT A TAVEZ DE LAS APIS

const router = express.Router();

//ruta de prueba
router.get("/", (req , res) =>{
    res.send({msg: '<h1>Hello World!!! mY FIRST API REST</h1>' })
})
 

//Enviar la constante router para que app la ejecute
app.use('/api/v1',router); //,

//importando el modelo de usuario
const User = require('./models/UserModel')

//Operaciones CRUD........ ToDo
//Crear usuario - Create - create EndPoint - C
router.post('/createUse', (req , res) => {
    //desestructuramos el Body
    // const { body}=req --es una forma

    const newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password

    })
    //guardar el usuario creado
    res.send(
        {
            message: 'Usuario creado con exito',
            user: newUser
        }
    )

    // por consola como respuesta
    // res.send( newUser )

    // console.log(req.body);
    // res.send(req.body)
    // res.send({message: 'EndPoint Create User On'})

})
//Leer Usuario - Read -R
//Editar Usuario - Update - U
//Eliminar Usuario - Delete - D

// por medio de la cost app activamos la escucha de nuestro server 
//Por medio de la const app activamos la escucha par
app.listen(port, () => {
    console.log(`Server Port: ${port}`)
}) 


