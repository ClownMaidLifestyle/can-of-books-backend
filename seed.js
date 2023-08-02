

mongoose.connect(process.env.DATABASE_URL);

async function seed() {

    await Book.create({
        name: "default",
        description: "default",
        Status: "default"
    })
    
console.log("new book");
mongoose.disconnect();

}

seed();
