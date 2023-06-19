const addProductsRepository = require('../repositories/addProductsRepository');

const addProducts = async (newProduct) => {
    if (!newProduct.name || !newProduct.stock_level || !newProduct.price) {
        const missingInfoMessage = "Invalid information supplied";
        throw new Error(missingInfoMessage);
    } else {
        try {
            return await addProductsRepository.addProducts(newProduct);
        } catch {
            const dbErrorMessage = "Unable to connect to database";
            throw new Error(dbErrorMessage);
        }
    }
};

module.exports.addProducts = addProducts;
