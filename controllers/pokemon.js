// import express
const express = require('express')

// import the pokemon data
const pokemon = require("../models/pokemon.js")

// create a router
const router = express.Router()

// INDEX ROUTE -> get request to /pokemon
// "/pokemon" is implied from the router, so we need just /
router.get("/", (req, res) => {
    res.render("pokemon/index.ejs", {pokemon})
})

// NEW ROUTE - GET request to /pokemon/new
router.get("/new", (req, res) => {

    // render a template with our form
    res.render("pokemon/new.ejs")
})

// DELETE ROUTE -  DELETE request to /pokemon/:id
router.delete("/:id", (req, res) => {
    // get the id from params
    const id = req.params.id

    // then we'll splice it from the array
    // arr.splice(index, numOfItemToCut)
    pokemon.splice(id, 1)   // cut 1 item out from index=id

    // redirect back to index
    res.redirect("/pokemon")
})

// UPDATE ROUTE -  PUT request to /pokemon/:id
router.put("/:id", (req, res) => {
    // get the id
    const id = req.params.id
    // get the body
    const body = req.body
    
    // re-formatting the FORM data to what we have in models/pokemon.js
    let updateFormData = {
        name: req.body.name,
        img: req.body.img,
        type: req.body.type,
        stats: {
          hp: req.body.hp,
          attack: req.body.attack,
          defense: req.body.defense,
          spattack: req.body.spattack,
          spdefense: req.body.spdefense,
          speed: req.body.spdefense,
        }
      }

    req.body = updateFormData
    pokemon[id] = req.body
    // redirect back to the index page
    res.redirect("/pokemon")
})

// CREATE ROUTE - POST request /pokemon
router.post("/", (req, res) => {

    // re-formatting the FORM data to what we have in models/pokemon.js
    let newFormData = {
        name: req.body.name,
        img: req.body.img,
        type: req.body.type,
        stats: {
          hp: req.body.hp,
          attack: req.body.attack,
          defense: req.body.defense,
          spattack: req.body.spattack,
          spdefense: req.body.spdefense,
          speed: req.body.spdefense,
        }
      }
      req.body = newFormData
      pokemon.push(req.body)
      res.redirect("/pokemon")
})

// EDIT ROUTE -  GET request to /pokemon/:id/edit
router.get("/:id/edit", (req, res) => {

    // get id from the params
    const id = req.params.id

    // get the pokemon being updated
    const pokemonEdit = pokemon[id]

    res.render("pokemon/edit.ejs", {pokemonEdit, id} )
})

// SHOW ROUTE - GET request to /pokemon/:id
router.get("/:id", (req, res) => {

    // getting id
    const id = req.params.id
    const pokemonShow = pokemon[id]
    res.render("pokemon/show.ejs", {pokemonShow, id})
})

// EXPORT THE ROUTER
module.exports = router