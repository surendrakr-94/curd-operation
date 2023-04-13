const express = require('express');

const router= express.Router()


 const Model= require('../models/model')


const  Controller= require('../controllers/control')

router.post('/', Controller.creatUser);
router.get("/", Controller.userGetAll);
router.get("/:id", Controller.getById);
router.put("/:id", Controller.findUpdate);
router.delete("/:id", Controller.deleteById);




// router.post('/', async (req, res) => {
    
//     const data = new Model({
//         name: req.body.name,
//         age: req.body.age
//     })

//     try {
//         const dataToSave = await data.save();
//         res.status(200).json(dataToSave)
//     }
//     catch (error) {
//         res.status(400).json({message: error.message})
//     }
// })

// router.get('/getAll', async (req, res) => {
//     try{
//         const data = await Model.find();
//         res.json(data)
//     }
//     catch(error){
//         res.status(500).json({message: error.message})
//     }
// })


module.exports = router;