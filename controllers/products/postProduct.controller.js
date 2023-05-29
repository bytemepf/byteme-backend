// Importaciones de node
// Importación del metodo que permite interactuar con el sitema de archivos del PC, Servidor, Etc
const fs = require("fs-extra");

// Importaciones locales
// Importación del metodo que sube las imagenes a cloudinary
const { uploadImage } = require("../../helpers");

// En el controller filterProducts explico esto
const { Product } = require("../../models");

const postProduct = async (req, res) => {
  console.log(req.file)
  if (req.files?.image) {
    console.log(req.files)
    const { secure_url } = await uploadImage(req.files.image.tempFilePath);
    const product = await Product.create({ ...req.body, image: secure_url });
    await fs.unlink(req.files.image.tempFilePath);
    return res.json(product);
  }

  // El middleware validateImages crea la propiedad file en req.body
  // la función de esta propiedad es indicar si viene una archivo de imagen
  const { file } = req.body

  try {
    // Crea el producto, pero no lo inserta en la base de datos
    // Los datos del producto viene en req.body
    let image;
    // Esta condición verifica si en la request viene un archivo de imagen
    // si file es true, la condición procede a subir la imagen a cloudinary
    if (file) {
      // Indica la ubicación de la imagen en el servidor
      // tempFilePath es un string con la ruta donde se ubica la imagen almacenada
      const { tempFilePath } = req.files.image
      console.log(tempFilePath);
      // Sube la imagen a Cloudinary y recibe la url
      // el metodo uploadImage neceita conocer la ubicación de la imagen para proceder a subirla
      // por lo que se proporciona tempFilePath como argumento.
      // si la imagen se sube correctamente, el metodo devuelve un objeto con varias propiedades.
      // La propiedad secure_url es la url final de la imagen en cloudinary
      const { secure_url } = await uploadImage(tempFilePath);
      console.log(secure_url);
      // Elimina la imagen de la carpeta temporal ubicada en el servidor
      await fs.unlink(tempFilePath);
      
      // Agrega la url de la imagen a el producto
      image = secure_url
    }
    const product = await Product.create({ ...req.body, image });
    console.log(product);
    // Guarda el producto en la base de datos y obtiene los datos guardados
    //const { dataValues } = await product.save()
    
    return res.status(200).json({ message: "Producto publicado correctamente", data: { ...product } });
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({ message: "Error en el servidor", error: error.message });
  }






};

module.exports = {
  postProduct,
};