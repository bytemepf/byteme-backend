const { DataTypes } = require("sequelize");
const { database } = require("../database/connection");

const Order = database.define(
  "Order",
  {
    order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    status: {
        type: DataTypes.ENUM([ "processed", "completed", "canceled"]),
        allowNull: false,
        defaultValue: "processed",
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    total: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
  },
  { timestamps: false }
);

module.exports = {
  Order,
};
