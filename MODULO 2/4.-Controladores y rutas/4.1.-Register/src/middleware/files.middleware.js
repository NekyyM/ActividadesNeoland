const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const dotenv = require("dotenv"); //Se utiliza dotem porque vamos a usar info del .env
dotenv.config();
//impportamos las librerias que necesitamos que son cloudinary, etc.

//Es un archivo que hace cloudinary la info no necesitamos aprenderlo,

//Lo que tenemos que hacer es creamos el almacen, un storage. Crear una nueva instancia es hacer un new.
const storage = new CloudinaryStorage({
  cloudinary: cloudinary, //utilizo la libreria de cloudinary
  params: {
    folder: "userProyectNeky",
    allowedFormats: ["jpg", "png", "jpeg", "gif", "svg", "webp"], //formatos de subida permitidos
  },
});

//Creamos la función que nos sirve para subir imagenes a cloudinary a través de multer
const upload = multer({ storage });

//Función de borrado de imagenes
const deleteImgCloudinary = (imgUrl) => {
  const imgSplited = imgUrl.split("/");
  const nameSplited = imgSplited[imgSplited.length - 1].split(".");
  const folderSplited = imgSplited[imgSplited.length - 2];
  const public_id = `${folderSplited}/${nameSplited[0]}`;

  cloudinary.uploader.destroy(public_id, () => {
    //cloudinary borra la imagen con el metodo destroy
    console.log("Image delete in cloudinary");
  });
};

const configCloudinary = () => {
  //estas son las variables que tenemos que incluir en el archivo .env con nuestra cuenta
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    api_key: process.env.CLOUDINARY_API_KEY,
  });
};

module.exports = { upload, deleteImgCloudinary, configCloudinary };
