const jwt = require("jsonwebtoken")


const authenticate = async function (req, res, next) {
  try {
    let token = req.headers["x-api-key"]
    if (!token) return res.status(400).send({ status: false, msg: "token must be present in the request header" })

    // validating the token
    let decodedToken = jwt.verify(token, "thou-hath-the-poer")
          req.decodedToken = decodedToken
         next()
  }
    catch (err) {
      return res.status(500).send({ msg: err.message })
     }
}






module.exports.authenticate = authenticate
