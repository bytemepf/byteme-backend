const { DataTypes, STRING } = require("sequelize");
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
      detail:{
        type: DataTypes.STRING,
        allowNull: true,
      },
      adress: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      phone:{
        type: DataTypes.FLOAT,
        allowNull:false,
      },
      city:{
        type:DataTypes.STRING,
        allowNull:true,
      },
      country:{
        type:DataTypes.STRING,
        allowNull:true,
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
