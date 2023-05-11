const { uploadImage } = require("../../helpers/cloudinary");
const { Product } = require("../../models/Product.model");
const fs = require("fs-extra");

const postProduct = async (req, res) => {
  let imageUrl = "";
  let publicIdImage = "";

  if (req.files?.image) {
    const { secure_url, public_id } = await uploadImage(
      req.files.image.tempFilePath
    );
    imageUrl = secure_url;
    publicIdImage = public_id;
  }
  const product = await Product.create({ ...req.body, image: imageUrl });

  await fs.unlink(req.files.image.tempFilePath);
  res.json(product);
};

module.exports = {
  postProduct,
};
