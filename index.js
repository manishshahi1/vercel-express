"use strict";
// Add Express
const express = require("express");
const fs = require("fs");
// Initialize Express
const app = express();

let student = {
  name: "Mike",
  age: 23,
  gender: "Male",
  department: "English",
  car: "Honda",
};

let data = JSON.stringify(student, null, 2);

// Create GET request
app.get("/", (req, res, next) => {
  res.send("Express on Vercel");
  next();
});

app.get("/savedata", (req, res, next) => {
  fs.writeFile("student-3.json", data, (err) => {
    if (err) throw err;
    console.log("Data written to file");
  });

  console.log("This is after the write call");
  next();
});

app.get("/readfile", (req, res, next) => {
  fs.readFile("student-3.json", (err, data) => {
    if (err) throw err;
    let studentz = JSON.parse(data);
    console.log(studentz);
    res.send(studentz)
  });
});

// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;
