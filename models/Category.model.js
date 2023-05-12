const { DataTypes } = require("sequelize");
const { database } = require("../database/connection");

const Category = database.define(
  "Category",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = {
  Category,
};
