///////////////////////////////////
// IMPORT DEPENDENCIES
///////////////////////////////////
require("dotenv").config(); // load .env variables
const express = require("express"); // our web framework
const morgan = require("morgan"); // our logger
const methodOverride = require("method-override"); // override forms
const app = express()

// import our pokemon router
const pokemonRouter = require("./controllers/pokemon.js")

// import pokemon data
const pokemon = require("./models/pokemon.js")

//////////////////////////
//MIDDLEWARE
//////////////////////////
app.use(express.static("public")) // use a "public" folder for files
app.use(express.urlencoded({extended: true}))
app.use(morgan("dev"))
app.use(methodOverride("_method"))
// Register our pokemonRouter
app.use("/pokemon", pokemonRouter)


// server listener to turn our server
app.listen(3000, () => {
    console.log('listening on port 3000')
})
