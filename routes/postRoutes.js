const express = require("express");
const dotenv = require("dotenv");
const cloudinary = require("cloudinary").v2;
const Post = require("../mongodb/models/Post");
dotenv.config();

const router = express.Router();
module.exports = router;
