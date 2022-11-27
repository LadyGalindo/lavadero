console.log("Hola Server, Grupo EGDA");

const { default: userEvent } = require('@testing-library/user-event');
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
router.post('/createUser',  (req , res) => { //1.sycn antes del req
    //desestructuramos el Body
    const { body } = req //es una forma

    const newUser = new User({
        firstname: body.firstname,
        lastname:  body.lastname,
        // en el email vamos a hacer una validación 
        email:     body.email.toLowerCase(),
        password:  body.password

    })

    // 1. otra opción opcion con async y await  
    /* const result = await newUser.save();
    console.log(result)
 */
     //2. guardar el usuario creado, con parametro tipo promesa
     // Es lo mismo que el codigo de abajo
    /*  newUser.save()
     .then((result)=>res.send({message: 'Usuario guardado con exito', resp: result}))
     .catch((err) => res.send({message:err }) )*/

    //  3. guardando un usuario con el formato undefined
    // newUser.save()

    User.findOne({ email: newUser.email}, (err, userFinded) =>{
        if (userFinded) {
            res.send({ message: 'El usuario ya existe '})
        }else{
                //4. guardar el usuario creado, con parametro tipo callback
            newUser.save((err, userStore )=>{
            if (userStore) {
                res.send ({
                    message: 'Usuario Creado con exito',
                } )
                }
                if (err) {
                res.send({message: 'Error del Servidor'})
            } 
        }) 
        }
        if (err) {
                res.send({message: 'Error del servidor'})
            }
    })
})

//Leer Usuario - Read -R
//Editar Usuario - Update - U
//Eliminar Usuario - Delete - D

// por medio de la cost app activamos la escucha de nuestro server 
//Por medio de la const app activamos la escucha par
app.listen(port, () => {
    console.log(`Server Port: ${port}`)
}) 


