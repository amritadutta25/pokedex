///////////////////////////////////
// IMPORT DEPENDENCIES
///////////////////////////////////
require("dotenv").config(); // load .env variables
const express = require("express"); // our web framework
const morgan = require("morgan"); // our logger
const methodOverride = require("method-override"); // override forms
const app = express()

// import pokemon data
const pokemon = require("./models/pokemon.js")

//////////////////////////
//MIDDLEWARE
//////////////////////////
app.use(express.static("public")) // use a "public" folder for files
app.use(express.urlencoded({extended: true}))
app.use(morgan("dev"))
app.use(methodOverride("_method"))


////////////////
// ROUTES - INDUCES
////////////////
// INDEX ROUTE -> get request to /pokemon
app.get("/pokemon", (req, res) => {
    res.render("pokemon/index.ejs", {pokemon})
})

// NEW ROUTE - GET request to /pokemon/new
app.get("/pokemon/new", (req, res) => {

    // render a template with our form
    res.render("pokemon/new.ejs")
})


// DELETE ROUTE -  DELETE request to /pokemon/:id
app.delete("/pokemon/:id", (req, res) => {
    // get the id from params
    const id = req.params.id

    // then we'll splice it from the array
    // arr.splice(index, numOfItemToCut)
    pokemon.splice(id, 1)   // cut 1 item out from index=id

    // redirect back to index
    res.redirect("/pokemon")
})

// UPDATE ROUTE -  PUT request to /pokemon/:id

// CREATE ROUTE - POST request /pokemon

// EDIT ROUTE -  GET request to /pokemon/:id/edit

// SHOW ROUTE - GET request to /pokemon/:id
app.get("/pokemon/:id", (req, res) => {

    // getting id
    const id = req.params.id
    const pokemonShow = pokemon[id]
    res.render("pokemon/show.ejs", {pokemonShow, id})
})


// server listener to turn our server
app.listen(3000, () => {
    console.log('listening on port 3000')
})
