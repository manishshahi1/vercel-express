// Add Express
const express = require("express");
const fs = require("fs");
// Initialize Express
const app = express();

let student = { 
    name: 'Mike',
    age: 23, 
    gender: 'Male',
    department: 'English',
    car: 'Honda' 
};
 
let data = JSON.stringify(student, null, 2);

// Create GET request
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.get("/savedata", (req,res) =>{
    res.send("hello");
})

// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;