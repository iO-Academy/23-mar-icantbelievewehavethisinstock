const getProductsRepository = require('../repositories/getProductsRepository');

const getProducts = async () => {
    try {
        return await getProductsRepository.getProducts();
    } catch {
        const message = "Unexpected error.";
        throw new Error(message);
    }
};

module.exports.getProducts = getProducts;
