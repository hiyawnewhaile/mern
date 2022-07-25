const AuthorController = require('../controllers/author.controller');

module.exports = app => {
        // CREATE
        app.post("/api/authors/create", AuthorController.createAuthor);
        // READ ONE
        app.get("/api/authors/:_id", AuthorController.findOneAuthor);
        // READ ALL
        app.get("/api/authors", AuthorController.findAllAuthors);
        // UPDATE
        app.put("/api/authors/update/:_id", AuthorController.updateAuthor);
        // DELETE
        app.delete("/api/authors/delete/:_id", AuthorController.deleteAuthor);
}