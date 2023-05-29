
const {User} =require("../../models/User.model")

const account = (req, res) => {
  res.status(200).json({ daniel: 123 });
};

const infoUser = async (req,res)=>{
  try{
    const users = await User.findAll()
    return res.json(users)
}catch{
    res.status(400).send('not found')
}
}

module.exports = {
  account,infoUser
}