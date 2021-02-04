const express = require("express");
const autorization = require("./autorization");

const router = express.Router();

router.use("/autorization", autorization);

module.exports = router;
