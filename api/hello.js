const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const router = express.Router();
router.use(bodyParser.json());

router.get("/hello", async (req,res,next) => {
    try{
        res.json({
            status: 200,
            message: "GET route."
        });
    }catch (error){
        console.error(error);
        return res.status(500).send("server error");
    }
})



module.exports = router;