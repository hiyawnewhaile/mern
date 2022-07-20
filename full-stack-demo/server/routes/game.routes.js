const GameController = require('../controllers/game.controller');

module.exports = app => {
        // CREATE
        app.post("/api/games/create", GameController.createGame);
        // READ ONE
        app.get("/api/games/:_id", GameController.findOneGame);
        // READ ALL
        app.get("/api/games", GameController.findAllGames);
        // UPDATE
        app.put("/api/games/update/:_id", GameController.updateGame);
        // DELETE
        app.delete("/api/games/delete/:_id", GameController.deleteGame);
}