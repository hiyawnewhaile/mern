const ProductController = require('../controllers/product.controller');

module.exports = app => {
        // CREATE
        app.post("/api/products/create", ProductController.createProduct);
        // READ ONE
        app.get("/api/products/:_id", ProductController.findOneProduct);
        // READ ALL
        app.get("/api/products", ProductController.findAllProducts);
        // UPDATE
        app.put("/api/products/update/:_id", ProductController.updateProduct);
        // DELETE
        app.delete("/api/products/delete/:_id", ProductController.deleteProduct);
}