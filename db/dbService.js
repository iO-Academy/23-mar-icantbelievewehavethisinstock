const mysql = require('promise-mysql');
const dbSettings = require('../config/dbSettings');

const createConnection = () => {
    return mysql.createConnection({
        user: dbSettings.user,
        password: dbSettings.password,
        database: dbSettings.database
    });
}


module.exports.createConnection = createConnection;
