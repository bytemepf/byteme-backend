const jwt = require('jsonwebtoken')

const isAuth = (req, res, next) => {
  const token = req.header('Authorization') || req.header('authorization')
  if (!token)
    return res.status(400).json({ msg: 'You need to provide a token' })

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(400).json({ msg: 'Invalid token' })
    req.data = user // New request width user information
    next()
  })
}

module.exports={
  isAuth
}