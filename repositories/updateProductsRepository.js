const dbService = require('../db/dbService');
//WHERE doesn't pick up if sku is invalid. needs check
const updateProducts = async (sku,updatedDetails) => {
    console.log('Repository: updateProducts');
    const connection = await dbService.createConnection()

    const name = updatedDetails.name;
    const price= updatedDetails.price;
    console.log(sku)

    const sql = 'UPDATE products SET name = ?, price = ? WHERE sku = ?';
    const values = [name, price, sku];

    return new Promise((resolve, reject) => {
        connection.query(sql, values, (err, results) => {
            if (err) {
                console.error('Error updating name and price:', err);
                reject(err);
                return;
            }
            console.log('Name and price updated successfully');
            resolve(results);
        });
    });

    // return connection.query('UPDATE products SET name WHERE sku=sku')
}

module.exports.updateProducts = updateProducts;
