const express = require("express");
const UserRoutes = express.Router();

const {
  registerLargo,
  registerUtil,
  registerWithRedirect,
  sendMailRedirect,
  resendCode,
  checkNewUser,
  login,
  autoLogin,
  changePassword,
  sendPassword,
  modifyPassword,
} = require("../controllers/User.controllers");
const { upload } = require("../../middleware/files.middleware");
const { isAuth, isAuthAdmin } = require("../../middleware/auth.middleware");

//!------------------------------------------------------------------------
//?--------------------------------RUTAS SIN REDIRECT----------------------
//!------------------------------------------------------------------------

UserRoutes.post("/registerLargo", upload.single("image"), registerLargo); //el upload aunque sea un middleware no necesita next, porque sube la foto de forma instrinseca. Es decir, subir algo y seguir adalente
UserRoutes.post("/registerUtil", upload.single("image"), registerUtil);
UserRoutes.post("/resend", resendCode);
UserRoutes.post("/check", checkNewUser);
UserRoutes.post("/login", login);
UserRoutes.post("/login/autologin", autoLogin);
UserRoutes.patch("/forgotpassword", changePassword);
UserRoutes.patch("/changepassword", [isAuth], modifyPassword); //EL middleware isAuth si necesita el next para que siga ejecutando el siguiente codigo qe seria modify paswword
//Los middleware de autenticacion irán en corchetes: [isAuth, isAuthAdmin]

//!------------------------------------------------------------------------
//?--------------------------------RUTAS CON REDIRECT----------------------
//!------------------------------------------------------------------------
UserRoutes.post("/register", upload.single("image"), registerWithRedirect);

//!---------------- REDIRECT-------------------------------
UserRoutes.post("/register/sendMail/:id", sendMailRedirect);
UserRoutes.patch("/sendPassword/:id", sendPassword);
module.exports = UserRoutes;
