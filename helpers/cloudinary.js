// Imporatción del sdk de cloudinary
const { v2: cloudinary } = require("cloudinary");

// Esto configura y asocia los metodos con la cuenta cloudinary
cloudinary.config({
  cloud_name: "dqggdkgmn",
  api_key: "838818389133515",
  api_secret: "nunaH0legkbB5xJtt4CZQnBa4Po",
  //   secure: true
});

// Este es el metodo que sube la imagen a cloudinary
const uploadImage = async (file) => {
  try {
   // console.log(file, "file??????????????");
    //const { tempFilePath } = file; // Obtiene la ruta temporal del archivo en el servidor
    const result = await cloudinary.uploader.upload(file, {
      folder: "products",
    });
//console.log(result.secure_url);
    return result // Devuelve la URL segura de la imagen en Cloudinary

  } catch (error) {
    console.error("Error al subir la imagen a Cloudinary:", error);
    throw error;
  }
};




module.exports = {
  uploadImage,
};
