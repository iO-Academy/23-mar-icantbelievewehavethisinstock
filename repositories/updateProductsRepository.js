const dbService = require('../db/dbService');
const updateProducts = async (sku,updatedDetails) => {
    console.log('Repository: updateProducts');
    const connection = await dbService.createConnection()

    const name = updatedDetails.updatedData.name;
    const price= updatedDetails.updatedData.price;
    console.log(sku)

    const selectSql = 'SELECT * FROM products WHERE sku = ?';
    const selectValues = [sku];

    connection.query(selectSql, selectValues, (selectErr, selectResults) => {
        if (selectErr) {
            console.error('Error checking SKU:', selectErr);
            connection.end();
            return;
        }

        if (selectResults.length === 0) {
            // const error = new Error('SKU not found in the database');
            // console.error('Error:', error);
            // connection.end();
            // throw error;
            let status = 500;
            const message = {"message": error.message, "data": []}

        }

        // The SKU exists, so proceed with the update
        const updateSql = 'UPDATE products SET name = ?, price = ? WHERE sku = ?';
        const updateValues = [name, price, sku];

        connection.query(updateSql, updateValues, (updateErr, updateResults) => {
            if (updateErr) {
                console.error('Error updating name and price:', updateErr);
                connection.end();
                return;
            }

            console.log('Name and price updated successfully');
            connection.end();
            resolve(updateResults);
        });
    });
};

module.exports.updateProducts = updateProducts;
