const User = require("../api/models/User.model");
const { verifyToken } = require("../utils/token");
const dotenv = require("dotenv");
dotenv.config();

const isAuth = async (req, res, next) => {
  const token = req.headers.authorization?.replace("Bearer ", "");
  //enviamos el token con el bearer de Insomnia y lo guarda en una constante que es token

  if (!token) {
    //si no tenemos token enviamos el error de que no es autoizado
    return next(new Error("Unauthorized"));
  }

  try {
    //si hay token se hace una funcion asincrona que es una decodificación con la funcion verify token
    const decoded = verifyToken(token, process.env.JWT_SECRET); //lo verifica con los dos elementos que se contruye el token que es el id y el email

    //Crea una nueva clave que es User con el id
    req.user = await User.findById(decoded.id);
    next(); //si todo esta ok continua al controlador porque es un middleware
  } catch (error) {
    return next(error);
  }
};

const isAuthAdmin = async (req, res, next) => {
  //si eres admin todo se hace igual con un solo cambio
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (!token) {
    return next(new Error("Unauthorized"));
  }

  try {
    const decoded = verifyToken(token, process.env.JWT_SECRET);
    // cuando decodifico el token saco el id y el email
    console.log(decoded);
    req.user = await User.findById(decoded.id);

    // pongo un requisito mas y es que sea admin
    if (req.user.rol !== "admin") {
      //en la request.user el rol es igual a admin?? si eres admin estas autorizado
      return next(new Error("Unauthorized, not admin")); //si no, te digo que no estas autoizado porque no eres admin.
    }
    next();
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  isAuth,
  isAuthAdmin,
};
