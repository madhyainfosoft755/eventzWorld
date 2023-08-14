const express = require("express");
const {
  CreatePost,
  Logindata,
  getCreatePost,
  register,
  login,
  aprooveData,
  getDatabyid,

getCreatePostbyid
} = require("../controllers/create_postController");
const { upload } = require("../utils/util");
const router = express.Router();
// router.post("/logindata",Logindata);
router.post("/CreatePost",upload ,CreatePost)
router.get("/getCreatePost",getCreatePost)
router.post("/register",register)
router.post("/login",login)
router.get('/getCreatePostbyid/:id',getCreatePostbyid)
router.post('/aprooveData',aprooveData)
router.get('/getDatabyid',getDatabyid)

module.exports = router;
