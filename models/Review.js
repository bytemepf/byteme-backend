const { DataTypes } = require('sequelize');
const { database } = require("../database/connection.js");


const Review = database.define(
    "Review",{
        rating:{
         type:DataTypes.FLOAT,
         validate: {
             min: 1,
             max: 5
         }
        },
        title:{
         type:DataTypes.TEXT
        },
        description:{
         type:DataTypes.TEXT
        }
      },
        { timestamps: false }
      );

  module.exports = {
    Review,
  };
  



/* module.exports= (sequelize)=>{
 sequelize.define('Review',{
   rating:{
    type:DataTypes.FLOAT,
    validate: {
        min: 1,
        max: 5
    }
   },
   title:{
    type:DataTypes.TEXT
   },
   description:{
    type:DataTypes.TEXT
   }
 },

 ),
 { timestamps: false }
} */