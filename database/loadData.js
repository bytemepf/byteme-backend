const { Category } = require("../models");

const loadDataInCategories = async () => {
  const categories = [
    "Teclados",
    "Ratones",
    "Gabinetes",
    "Monitores",
    "Sillas",
    "Audio",
    "Camaras",
    "Mandos",
  ];

  const categoryPromises = [];

  categories.forEach((category) => {
    categoryPromises.push(Category.create({ name: category }));
  });
  await Promise.all(categoryPromises);
};

module.exports = {
  loadDataInCategories,
};
