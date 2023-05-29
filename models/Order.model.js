const { DataTypes, STRING } = require("sequelize");
const { database } = require("../database/connection");

const Order = database.define(
  "Order",
  {
    order_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
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
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    total: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
  },
  { timestamps: false }
);
//Order.drop();
module.exports = {
  Order,
};
