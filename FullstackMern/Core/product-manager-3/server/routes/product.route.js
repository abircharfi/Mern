const ProductController = require('../controllers/product.controller');

 
module.exports = app => {
    app.get("/api/products", ProductController.FindAllProducts);
    app.get("/api/products/:productId", ProductController.FindOneProduct);
    app.patch("/api/products/:productId", ProductController.UpdateProduct);
    app.post('/api/products', ProductController.createNewProduct);
    app.delete("/api/products/:productId", ProductController.DeleteProduct);
    
  
}