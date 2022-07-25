const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/author", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("I found the mongoose!"))
    .catch(err => console.log("I lost the mongoose", err))