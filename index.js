const express = require("express");
const app = express();
const install = require("./api/install");
const hello = require("./api/hello");
const postingshit = require("./api/postingshit");

app.use(express.json({extended:false}));
app.use("/api/", install);
app.use("/api/", hello);
app.use("/api/", postingshit);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on in port ${port}`));
