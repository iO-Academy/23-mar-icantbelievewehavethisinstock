const getProductsController = require('../controllers/getProductsController');
// const addProductsController = require('../controllers/addProductsController');
const updateProductsController = require('../controllers/updateProductsController');
const deleteProductsController = require('../controllers/deleteProductsController');
const getStockLevelsController = require('../controllers/getStockLevelsController');
// const updateStockLevelsController = require('../controllers/updateStockLevelsController');
const createOrdersController = require('../controllers/createOrdersController')

const routes = (app) => {
    app.get('/products', getProductsController.getProducts); // Get all products
    // app.post('/products', addProductsController.addProducts); // Add a products
    app.put('/products/:SKU', updateProductsController.updateProducts); // Update a product
    app.delete('/products/:SKU', deleteProductsController.deleteProducts); // Delete a product
    app.get('/products/:SKU', getStockLevelsController.getStocksLevels); // Get stock levels
    // app.put('/update/:SKU', updateStockLevelsController.updateStockLevels); // Update stock levels
    app.post('/orders', createOrdersController.createOrder) // Add order
}

module.exports = routes;
