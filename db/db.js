  
const mysql = require("mysql");

const connection = mysql.createConnection({
	host: "localhost",
    port: 3306,
    user: "root",
    password: "Tobias22!",
    database: "employeelist"

});

connection.connect(function(err) {
	if (err) throw err;
	console.log("Database connected.")
});

module.exports = connection;