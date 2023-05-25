const { DataTypes } = require("sequelize");
const { database } = require("../database/connection");

module.exports = (database) => {
  database.define(
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
}
