// INDEX ROUTE -> get request to /pokemon
app.get("/pokemon", (req, res) => {
    res.render("pokemon/index.ejs", {pokemon})
})

// NEW ROUTE - GET request to /pokemon/new


// DELETE ROUTE -  DELETE request to /pokemon/:id

// UPDATE ROUTE -  PUT request to /pokemon/:id

// CREATE ROUTE - POST request /pokemon

// EDIT ROUTE -  GET request to /pokemon/:id/edit

// SHOW ROUTE - GET request to /pokemon/:id