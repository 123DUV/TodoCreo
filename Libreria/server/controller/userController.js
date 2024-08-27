// const fs = require('fs').promises;
// const path = require('path');

// const userFilePath = path.join(__dirname,'../../src/componentes/usuariosRegistrados.json'
// );

// const controller = {
//     register: async function(req, res){
//         try{
//             const userData = await fs.readFile(userFilePath, 'utf8');
//             const users = JSON.parse(userData);

//             const ultimo =users.length;
//             const usuarioNuevo={
//                 id: ultimo +1,
//                 departamento: req.body.departamento,
//                 ciudad: req.body.ciudad,
//                 identificacion: req.body.identificacion,
//                 nombres: req.body.nombres,
//                 apellidos: req.body.apellidos,
//                 email: req.body.email,
//                 direccion: req.body.direccion,
//                 telefono: req.body.telefono,
//                 fechaNacimiento: req.body.fechaNacimiento,
//                 password: req.body.password,
//                 estado: 'activo',
//                 rol: 'usuario',
//                 fecha_Creacion: new Date(),
//             };
//             for(x of users){
//                 if(
//                     x.email==req.body.email ||
//                     x.identificacion==req.body.identificacion
//                 ){
//                     res.status(400).send('el email ya existe');
//                     return;
//                 }
//             }
//             users.push(usuarioNuevo);

//             await fs.writeFile(userFilePath, JSON.stringify(users, null, 4));
//             res.status(200).send('usuario creado con exito');
//         }catch(error){
//             console.error('error al procesar el registro: ',error);
//             res.status(500).send('error interno del servidor',error);
//         }
//     },
//     login: async function(req, res){
//         try {
//             const userData = await fs.readFile(userFilePath, "utf-8");
//             const users = JSON.parse(userData);

//             for (x of users) {
//                 if(
//                     x.email === req.body.email &&
//                     x.password === req.body.password &&
//                     x.rol === req.body.rol
//                 ){
//                     return res.json({
//                         nombres: x.nombres,
//                         apellidos: x.apellidos,
//                         email: x.email,
//                     });
//                 }

//                 }
//                 res.json({ title: "error"})
//         } catch (error){
//             console.error("Error al procesar el registro",error);
//             res.status(500).send("Error interno del servidor");
//         }
//     }


// };

// module.exports = controller;





const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
app.use(cors());

const controller = {
    register: function (req, res) {
      let config = {
        method: "GET",
        maxBodyLength: Infinity,
        url: 'https://api.jsonbin.io/v3/b/6654e46bad19ca34f8701ca7',
        headers: {
          'Content-Type': 'application/json',
          "X-Master-Key": "$2a$10$WQluOHcKUZmklnCjHnmOfOant.9JMsOvhj/GMzUvrYQOVf.VDHkhO"
        }
      };
      axios(config)
        .then(result => {
          let id = result.data.record.length + 1
          const usuarioNuevo = {
            id: id,
            identificacion: req.body.identificacion,
            nombres: req.body.nombres,
            apellidos: req.body.apellidos,
            email: req.body.email,
            direccion: req.body.direccion,
            telefono: req.body.telefono,
            fechaNacimiento: req.body.fechaNacimiento,
            deptoResidencia: req.body.deptoResidencia,
            municipioResidencia: req.body.municipioResidencia,
            password: req.body.password,
            estado: "activo",
            rol: "Usuario",
            fecha_creación: new Date(),
          };
          if (result.data.record.length === 0) {
            result.data.record.push(usuarioNuevo)
          }
          else {
            for (x of result.data.record) {
              if (x.email === req.body.email) {
                res.status(400).send("Usuario ya existe en la Base de Datos")
                return
              }
            }
            result.data.record.push(usuarioNuevo)
          }
  
          fetch("https://api.jsonbin.io/v3/b/6654e46bad19ca34f8701ca7 ", {
            method: "PUT",
            headers: {
              "Content-Type": "Application/json",
              "X-Master-Key": "$2a$10$WQluOHcKUZmklnCjHnmOfOant.9JMsOvhj/GMzUvrYQOVf.VDHkhO",
              
            },
            body: JSON.stringify(result.data.record),
          })
            // let configPut = {
            //   method: "PUT",
            //   url: "https://json.extendsclass.com/bin/cd70c6c83bc6",
            //   headers: { "Content-Type": "Application/json", "Security-key": "12345678" },
            //   body: JSON.stringify(result.data),
            // }
            // axios(configPut)
            .then(response => {
              if (response.status === 200) {
                res.status(200).send('ok')
                return
              }
              else {
                res.status(400).send("No Ok")
                return
              }
            })
        })
  
    }
  }
  module.exports = controller;