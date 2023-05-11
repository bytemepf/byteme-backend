const { v2: cloudinary } = require("cloudinary");

cloudinary.config({
  cloud_name: "dqggdkgmn",
  api_key: "838818389133515",
  api_secret: "nunaH0legkbB5xJtt4CZQnBa4Po",
  //   secure: true
});

const uploadImage = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: "products",
  });
};

module.exports = {
  uploadImage,
};
