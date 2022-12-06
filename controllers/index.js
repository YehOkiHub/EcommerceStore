const router = require('express').Router();
const webroute = require('./webroute');
const userApi = require('./api/user');
const blogApi = require('./api/blog');
// const Project = require('../models/Project')
const userModel = require("../models/users");
const blogModel = require("../models/blog");


router.use("/", webroute);
router.use("/api/users", userApi);
router.use("/api/blog", blogApi);


module.exports = router;