///////////////////////////////////
// IMPORT DEPENDENCIES
///////////////////////////////////
require("dotenv").config(); // load .env variables
const express = require("express"); // our web framework
const morgan = require("morgan"); // our logger
const methodOverride = require("method-override"); // override forms

// import pokemon data
const fruits = require("./models/fruits.js")

//////////////////////////
//MIDDLEWARE
//////////////////////////
app.use(express.static("public")) // use a "public" folder for files
// public/style.css -> /style.css
// public/app.js -> /app.js

// express.urlencoded (parse url encoded bodies)
// add the data to req.body
// used to read the form submitted through the NEW route
app.use(express.urlencoded({extended: true}))

// morgan - log data about each request for debugging
app.use(morgan("dev"))

// methodOverride - allows to override FORM POST requests
// as a different method like PUT or DELETE
// It will look for a _method url query
app.use(methodOverride("_method"))