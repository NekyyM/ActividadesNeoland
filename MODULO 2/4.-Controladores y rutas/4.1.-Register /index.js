const express = require("express");
const dotenv = require("dotenv");
const { connect } = require("./src/utils/db");

// cuando se crashea nodemon y no conecta con el server restaurar nodemon con  npx nodemon index.js en terminal
//! ----------------------------------------------------------
//?------------------ creamos el servidor web------------------
//! ----------------------------------------------------------
const app = express();

// vamos a configurar dotenv para poder utilizar las variables d entorno del .env
dotenv.config();
//! ----------------------------------------------------------
//? ------------conectamos con la base de datos---------------
//! ----------------------------------------------------------
connect();

//! ----------------------------------------------------------
//?- ------------------- configurar cloudinary ----------------
//! ----------------------------------------------------------
const { configCloudinary } = require("./src/middleware/files.middleware");
configCloudinary();
//! -----------------VARIABLES CONSTANTES --> PORT

const PORT = process.env.PORT;

//! ----------------------------------------------------------
//?- ------------------- CORS -------------------------------
//! ----------------------------------------------------------
const cors = require("cors");

app.use(cors());

//! --------------------------------------------------------------
//? ------------------ limitaciones de cantidad en el back end-----
//! ---------------------------------------------------------------
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: false }));

//! ----------------- ----------------------------------------
//? -----------------ROUTAS ---------------------------------
//! ----------------- ----------------------------------------
const UserRoutes = require("./src/api/routes/User.routes"); //nos la traemos de las rutas

app.use("/api/v1/users/", UserRoutes); //hay que decirle la ruta específica de cada fichero. Se indica el principio de la ruta y luego userRoutes que son específicas
//El final de la ruta se llama endpoint

//! ----------------------------------------------------------
//? -----------------  ERRORES GENERALES Y RUTA NO ENCONTRADA
//! ----------------------------------------------------------

app.use("*", (req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  return next(error);
});

// ----- en este caso como gestionamos un error la callback lleva de parametros error, req, res
// cuando es un controlador normal llevaria siempre como para parametros REQ, RES, NEXT ---> en este orden siemppre
app.use((error, req, res) => {
  return res
    .status(error.status || 500)
    .json(error.message || "unexpected error");
});

//! ------------------------------------------------------------------
//? ------------------ ESCUCHAMOS EN EL PUERTO EL SERVIDOR WEB--------
//! ------------------------------------------------------------------
app.disable("x-powered-by");
app.listen(PORT, () =>
  console.log(`Server listening on port 👌🔍 http://localhost:${PORT}`)
);
