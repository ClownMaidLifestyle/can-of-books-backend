//importing libraries we installed
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Book = require("./models/Book");
const bp = require("body-parser");

//uses PORT from env or uses default port
const PORT = process.env.PORT ||8092

//creates a usable instance of an express server named app
const app = express();
app.use(cors());
app.use(bp.json());

//connects MongoMD to the express server
mongoose.connect(process.env.DATABASE_URL);

//send a response when something calls the server URL
app.get("/", (request, response)=>{
    response.status(200).json("this server is responding");
});


//READ
app.get("/books", async (request, response) =>{
    try{
        const book = await Book.find();
        response.status(200).json(book);
    }
    catch (error){
        response.status(404).json(error);
    }
});

//CREATE
app.post("/books", async (request, response)=>{
    const newBook = await Book.create(request.body)
    response.status(200).json(newBook)
});

//UPDATE
app.put(`/books/:id`, async (request, response) =>{
    await Book.findByIdAndUpdate(requet.params.id, request.body);
});

//DELETE
app.delete(`/books/:id`, async (request, response) =>{
    const id = request.params.id;
    const deletedBook = await Book.findByIdAndDelete(id);
    response.status(200).json(deletedBook);
});



app.listen(PORT, ()=> console.log(`App is listening on port: ${PORT}`));