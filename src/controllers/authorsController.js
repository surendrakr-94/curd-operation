const jwt = require("jsonwebtoken")

const authorModel = require("../model/authorsModel")
const { isValidMail, isValid, isValidName, isValidRequestBody, isValidPassword } = require("../validator/validator")


const createAuthor = async function (req, res) {
  try {
    let data = req.body
    
    if (!isValidRequestBody(data)) return res.status(400).send({ status: false, msg: "Plz enter some data." })
    
    if (!isValid(data.fname)) return res.status(400).send({ status: false, msg: "fname is  requred" })
    
    if (!isValidName.test(data.fname)) return res.status(406).send({
      status: false, msg: "Enter a valid fname",
      validfname: "length of fname is between(3-20) , you can't use any Number & Special character "
    })
    

    if (!isValid(data.lname)) return res.status(400).send({ status: false, msg: "lname is requred" })
    
    if (!isValidName.test(data.lname)) return res.status(406).send({
      status: false, msg: "Enter a valid lirst name",
      validfname: "length of lname is between(3-20) , you can't use any Number & Special character "
    })


    
    if (!isValid(data.email)) return res.status(400).send({ status: false, msg: "mail id is required" })

    if (!isValidMail.test(data.email)) return res.status(406).send({
      status: false, msg: "email id is not valid",
      ValidMail: "email must be contain ==> @  Number  ."
    })
    
    let uniqueEmail = await authorModel.findOne({ email: data.email })
    if (uniqueEmail) {
      return res.status(409).send({ status: false, msg: "Email Already Exists." })//(409)it is use for the conflict
    }
    
    
    
    if (!isValid(data.title)) return res.send({ status: false, msg: "Title is req" })
    if (!(["Mr", "Mrs", "Miss","Mast"].includes(data.title))) return res.status(406).send({
      status: false, msg: "you can use only [Mr, Mrs, Miss,Mast] in title"
    })

    
    if (!isValid(data.password)) return res.status(400).send({ status: false, msg: "password is required" })
    if (!isValidPassword(data.password)) return res.status(406).send({
      status: false, msg: "enter valied password  ",
      ValidPassWord: "passWord in between(8-12)& must be contain ==> upperCase,lowerCase,specialCharecter & Number"
    })
    let savedData = await authorModel.create(data)
    res.status(201).send({ status: true, msg: "Author profile is created successfully.", data: savedData })

  }
  catch (error) {
    res.status(500).send({ msg: error.message });
  }
};

//-------------Login-------------------------------------------------//
const loginAuthor = async function (req, res) {

  try {
    if (!isValidRequestBody(req.body)) return res.status(400).send({ status: false, message: "request body can't be empty enter some data." })
    let email = req.body.email
    if (!email) return res.status(400).send({ status: false, msg: "email required" })
    if (!isValidMail.test(email)) return res.status(400).send({ status: false, msg: "enter a valied email" })

    let password = req.body.password
    if (!isValid(password)) return res.status(400).send({ status: false, msg: "password is required" })

    let verifyAuthor = await authorModel.findOne({ email: email, password: password })
    if (!verifyAuthor) {
      return res.status(400).send({ status: false, msg: "email or password is incorrect" })
    }

    let token = jwt.sign(
      {
        authorId: verifyAuthor._id.toString(),
        iat:Math.floor(Date.now() / 1000),
        exp:Math.floor(Date.now() / 1000) + 10*60*60
      },
      "thou-hath-the-poer"
    );
    res.setHeader("x-api-key", token)
    res.status(201).send({ status: true, msg: "You are successFully LogedIn", data: token })
  }
  catch (error) {
     return res.status(500).send({ status: false, msg: error.message })
  }
};

module.exports ={ loginAuthor,createAuthor}

