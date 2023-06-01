const { User } = require("../../models/User.model");

const useremail = async (req,res)=>{
try {
    const email = req.params.email
    const user = await User.findOne({where:{email:email}})
    console.log(user.id)
    res.status(200).send(user.id)
} catch (error) {
    console.log(error)
}
}
module.exports={
    useremail
}