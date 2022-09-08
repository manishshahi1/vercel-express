const express = require("express");
const jsonfile = require("jsonfile");
const bodyParser = require("body-parser");
const router = express.Router();
router.use(bodyParser.json());

router.get("/postingshit", (req, res, next) => {
    const file = 'blogConfig.json'
    jsonfile.readFile(file)
    .then(obj => console.dir(obj))
    .catch(error => console.error(error))
});

module.exports = router;
