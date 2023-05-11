const { uploadImage } = require("../../helpers/cloudinary");
const { Product } = require("../../models/Product.model");
const fs = require("fs-extra");

const postProduct = async (req, res) => {
  const { id } = req.params;
  if (req.files?.image) {
    const { secure_url } = await uploadImage(req.files.image.tempFilePath);
    const product = await Product.findByPk(id);
    product.set({ ...req.body, image: secure_url });
    product.save();
    await fs.unlink(req.files.image.tempFilePath);
    return res.json(product);
  }
  const product = await Product.findByPk(id);
  product.set({ ...req.body });

  return res.status(400).json({ message: "Se requiere una imagen" });
};

module.exports = {
  postProduct,
};
