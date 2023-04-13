const Model = require("../models/model")


const creatUser = async(req, res) => {
    
      const data = new Model({
          name: req.body.name,
          age: req.body.age
      });
  
      try {
          const dataToSave = await data.save();
          res.status(200).json(dataToSave)
      }
      catch (error) {
          res.status(400).json({message: error.message})
      }
  };


  const userGetAll= async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
  }

  //Get by ID Method
const getById=async (req, res) => {
  try{
      const data = await Model.findById(req.params.id);
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}
//Update by ID Method patch
const findUpdate =async (req, res) => {
  try {
      const id = req.params.id;
      const updatedData = req.body;
      const options = { new: true };

      const result = await Model.findByIdAndUpdate(
          id, updatedData, options
      )

      res.send(result)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}

//Delete by ID Method
const deleteById =async (req, res) => {
  try {
      const id = req.params.id;
      const data = await Model.findByIdAndDelete(id)
      res.send(`Document with ${data.name} has been deleted..`)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}







  module.exports = {creatUser,userGetAll,getById,findUpdate, deleteById}