const express = require('express');
const router = express.Router();
const { loginAuthor,createAuthor}=require("../controllers/authorsController")
const {createBlog,getblog,updateBlog,deleteBlog,deleteBlogByQuery}=require("../controllers/blogsController")
const {authenticate}=require("../Middleware/Middleware")


router.get("/test-me",function(req,res){
    res.status(200).send({msg:"All ok"})
})
//-------------------------------API for Create Author-----------------------//
router.post("/authors",createAuthor)


//-------------------------------API for  Author Login-----------------------//

router.post("/login",loginAuthor)

//-----------------------API for Create Blog-----------------------------//
router.post("/blogs",authenticate,createBlog)


//---------------------API for Fetch Blog--------------------------//
router.get("/getblogs",authenticate,getblog)

//---------------------API for Update  Blog------------------//
router.put("/blogs/:blogId",authenticate,updateBlog)

//---------------API for Delete Blog---------------------//
router.delete("/blogs/:blogId",authenticate,deleteBlog)
router.delete("/delete",authenticate,deleteBlogByQuery)


//......................................FOR restore  all data-------//
//router.delete("/undelete",blogController.undeleteall)


module.exports = router;   

