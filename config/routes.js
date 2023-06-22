const getProductsController = require('../controllers/getProductsController');
const addProductsController = require('../controllers/addProductsController');
const updateProductsController = require('../controllers/updateProductsController');
const deleteProductsController = require('../controllers/deleteProductsController');
const getStockLevelsByIdController = require('../controllers/getStockLevelsByIdController');
const updateStockLevelsController = require('../controllers/updateStockLevelsController');
const getOrdersController = require('../controllers/getOrdersController');
const createOrdersController = require('../controllers/createOrdersController');
const cancelOrdersController = require('../controllers/cancelOrdersController');

const routes = (app) => {
    app.get('/products', getProductsController.getProducts); // Get all products
    app.post('/products', addProductsController.addProducts); // Add a product
    app.put('/products/:SKU', updateProductsController.updateProducts); // Update a product
    app.delete('/products/:SKU', deleteProductsController.deleteProducts); // Delete a product
    app.get('/products/:SKU', getStockLevelsByIdController.getStockLevelsById); // Get stock levels
    app.put('/update/:SKU', updateStockLevelsController.updateStockLevels); // Update stock levels
    app.get('/orders', getOrdersController.getOrders); // Get all orders
    app.post('/orders', createOrdersController.createOrder); // Add order
    app.put('/orders/:orderNumber', cancelOrdersController.cancelOrders); // Cancel order
}

module.exports = routes;

