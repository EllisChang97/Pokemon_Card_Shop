//import required modules
const express = require ("express");
const path = require ("path");
const { MongoClient } = require ("mongodb");

//Mongo stuff
const dbUrl = "mongodb://127.0.0.1:27017/HTTP5211Assgdb";
const client = new MongoClient(dbUrl);

//set up express app 
const app = express();
const port = process.env.PORT || 8000;

//define important folders 
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//set up public folder 
app.use(express.static(path.join(__dirname, "public")));

//In order to parse POST body data as JSON, do the following.
//The following lines will convert the form data from query string format to JSON format.
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());


//test Express app
app.get("/", async (request, response) => {
    // response.status(200).send("Test page again aksjkajsdhflkajsdhffhlakhjfasdf");
    // links = await getCards();
    // cards = await getCards();
    response.render("index", { title: "Home" });
  });

  app.get("/about", async (request, response) => {
    response.render("about", {title: "About"});
  });

  app.get("/products", async (request, response) => {
    cards = await getCards(); // pretty sure i need this here but not for the "/about" and "/"(home) pages
    response.render("products", {title: "Products", products: cards});
  });

//SET UP SERVER LISTENING
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});



//Mongo Functions
async function connection(){
    await client.connect();
    db = client.db("HTTP5211Assgdb"); //selecting assignment database
    return db;
}

 //Async function to retrieve all links documents from pokemonCards collection
 async function getCards(){
    db = await connection(); // await result of connection() and store the returned db
    var results = db.collection("pokemonCards").find({}); //{} as the query means no filter, so select all
    res = await results.toArray();
    return res;
}


// photo references
// https://waypointgames.ca/products/charizard-ex-xy121-xy-black-star-promos-jumbo-cards
// https://store.401games.ca/products/poliwhirl-38-214-uncommon 
// https://bbcards.ca/products/flareon-v
// https://www.amazon.ca/Pokemon-Sylveon-EX-RC21-Generations-Holo/dp/B01BZE9LOK
// https://northofexilegames.com/products/pokemon-salamence-delta-speciesdelta-species?variant=31817967632428
// https://www.amazon.ca/Shaymin-VSTAR-173-Brilliant-Stars/dp/B09SXSSYQF
// https://www.pokemon.com/us/pokemon-tcg/pokemon-cards/ss-series/swsh1/194/
// https://www.pokemon.com/us/pokemon-tcg/pokemon-cards/ss-series/swshp/SWSH042/
// https://www.gameinformer.com/gallery/2022/02/11/pokemon-tcg-sword-shield-brilliant-stars-the-coolest-cards-we-pulled-from 