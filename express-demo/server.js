// We need express
const express = require('express');

// We need to create an app where everything will run from
const app = express();

// We are going to set up a port
const port = 8000;

// YOU NEED TO HAVE THESE LINES OF CODE FOR POST REQUEST TO WORK
app.use(express.json());
app.use(express.urlencoded({express: true}));


// This is going to be my example dtabase
const users = [
    {name: "Nichole", favoriteLanguage: "C#", id: 1},
    {name: "David", favoriteLanguage: "mearn", id: 2}
]


app.get("/", (req, res) => {
    res.json(users)
})

app.get("/example", (req, res) => {
    res.json({message: "hello from the example page", number: 7})
})

//Lets make a post request
app.post("/post", (req, res) => {
    console.log(req.body);
    users.push(req.body)
    // This must be here
    res.json(users)
})

app.get("/users/:id", (req, res) => {
    res.json(users[req.params.id])
})


// We need to start our server up
app.listen(port, ()=> console.log(`running on port ${port}!!`));