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
    productid: {
      type: DataTypes.STRING,
      allowNull: false,},
    total:{
        type: DataTypes.FLOAT,
        default:0
      },
   //   totalP:{
   //     type: DataTypes.FLOAT,
   //     default:0,
   //     allowNull: true,
   //   }

  },
  { timestamps: false }
);

module.exports = {
  Cart,
};