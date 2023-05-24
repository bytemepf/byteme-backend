const { DataTypes } = require('sequelize');
module.exports= (sequelize)=>{
 sequelize.define('review',{
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
}