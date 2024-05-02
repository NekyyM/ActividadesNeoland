const express = require("express");
const UserRoutes = express.Router();

const {
  registerLargo,
  registerUtil,
  registerWithRedirect,
  sendMailRedirect,
} = require("../controllers/User.controllers");
const { upload } = require("../../middleware/files.middleware");

//!------------------------------------------------------------------------
//?--------------------------------RUTAS SIN REDIRECT----------------------
//!------------------------------------------------------------------------

UserRoutes.post("/registerLargo", upload.single("image"), registerLargo);
//Es un post porque esta creando un dato nuevo. Single es que voy a importar un solo archivo. Se sube en image que es una propiedad del body.
UserRoutes.post("/registerUtil", upload.single("image"), registerUtil);

//!------------------------------------------------------------------------
//?--------------------------------RUTAS CON REDIRECT----------------------
//!------------------------------------------------------------------------
UserRoutes.post("/register", upload.single("image"), registerWithRedirect);

//!---------------- REDIRECT-------------------------------
UserRoutes.post("/register/sendMail/:id", sendMailRedirect);
module.exports = UserRoutes; //Se exportan todas las rutas que es el objeto userRoutes

//la llevamos al index, porque el index tira de las rutas.
