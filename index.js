const express = require("express");
const app = express();
const install = require("./api/install");

app.use(express.json({extended:false}));
app.use("/api/install", install);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on in port ${port}`));
