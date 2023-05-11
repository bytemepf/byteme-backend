const { uploadImage } = require("../../helpers/cloudinary");
const { Product } = require("../../models/Product.model");
const fs = require("fs-extra");

const postProduct = async (req, res) => {
  if (req.files?.image) {
    const { secure_url } = await uploadImage(req.files.image.tempFilePath);
    const product = await Product.create({ ...req.body, image: secure_url });
    await fs.unlink(req.files.image.tempFilePath);
    return res.json(product);
  }

  if (req.body.image.length>4) {
    const product = await Product.create({ ...req.body });
    return res.json(product);
  }

  return res.status(400).json({ message: "Se requiere una imagen o url" });
};

module.exports = {
  postProduct,
};
