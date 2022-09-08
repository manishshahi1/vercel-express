const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const router = express.Router();
router.use(bodyParser.json());

router.post("/postingshit", (req, res, next) => {
  try {
    fs.readFile("./config/blogConfig.json", function (err, data) {
      if (err) throw err;
      console.log(data);
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("server error");
  }
});

module.exports = router;
