  
const mysql = require("mysql");

const connection = mysql.createConnection({
	host: "localhost",
    port: 3306,
    user: "root",
    password: "Tobias22!",
    database: "employee_list_db"

});

connection.connect(function(err) {
	if (err) throw err;
});

module.exports = connection;