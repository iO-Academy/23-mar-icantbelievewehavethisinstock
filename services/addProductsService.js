const addProductsRepository = require('../repositories/addProductsRepository');

const addProducts = async () => {
    try {
        return await addProductsRepository.addProducts();
    } catch {
        const message = "Unexpected error";
        throw new Error(message);
    }
};

module.exports.addProducts = addProducts;
