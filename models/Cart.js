const { DataTypes } = require("sequelize");
const { database } = require("../database/connection");

const Cart = database.define(
  "Cart",
  {
    Cart_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productname: {
      type: DataTypes.STRING,
      allowNull: false,},
    productid: {
      type: DataTypes.STRING,
      allowNull: false,},
    totalC:{
        type: DataTypes.FLOAT,
      },//
      quantityP: {
        type: DataTypes.FLOAT,
        defaultValue: 1,
        allowNull: false,
      }
  },
  { timestamps: false }
); 

//Cart.drop();

module.exports = {
  Cart,
};