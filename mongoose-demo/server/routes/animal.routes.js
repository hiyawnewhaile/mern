// We need to import the controller
const AnimalController = require('../controllers/animal.controller');

module.exports = app => {
    // CREATE
    app.post("/api/animals/create", AnimalController.createAnimal);
    // READ ONE
    app.get("/api/animals/:_id", AnimalController.findOneAnimal);
    // READ ALL
    app.get("/api/animals", AnimalController.findAllAnimals);
    // UPDATE
    app.put("/api/animals/update/:_id", AnimalController.updateAnimal);
    // DELETE
    app.delete("/api/animals/delete/:_id", AnimalController.deleteAnimal);
}