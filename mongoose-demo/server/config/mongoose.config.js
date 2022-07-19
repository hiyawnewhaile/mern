// We need mongose
const mongoose = require('mongoose');

// We need to connect to our database
mongoose.connect("mongodb://localhost/mongo_demo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("I found the mongoose!"))
    .catch(err => console.log("I lost the mongoose", err))