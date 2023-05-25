const {User} =require("../../models/User.model")

const infoUser =async ()=>{
  try{
    const users = await User.findAll();
    return(users);
  } catch(error){
    console.log(error)
}
}

module.exports = {infoUser}