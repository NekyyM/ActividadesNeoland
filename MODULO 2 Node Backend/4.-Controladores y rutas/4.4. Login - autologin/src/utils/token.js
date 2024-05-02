const jwt = require("jsonwebtoken"); // nos da un token aleatorio
const dotenv = require("dotenv");
dotenv.config();

const generateToken = (id, email) => {
  if (!id || !email) {
    throw new Error("Email or id are missing"); //si falta el id o el mail lanza un error de que algo falta
  } //throw sirve para lanzar un error para que al usuario le salga el error que es.

  return jwt.sign({ id, email }, process.env.JWT_SECRET, { expiresIn: "1d" });
  //si está todo correcto retorna el registro en jwt, necesita pars eso el id y el correo y genera un token.
  //neceistamos incluir el JWT_SECRET en el archivo .env para que genere el token random, he metido muchas letras
  //la expiracion se refiere a cuando espira el codigo, puede ser dias o horas. En nuestro caso es 1 día
};

const verifyToken = (token) => {
  if (!token) {
    throw new Error("Token is missing");
  }

  return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = {
  generateToken,
  verifyToken,
};
