// Dependencies
const mysql = require("mysql");
const connection = require("./db/db.js")
const inquirer = require("inquirer");
require("console.table");


// Introduce employee tracker
console.log("Welcome to your employee tracker!");
mainMenu();

function mainMenu() {

    inquirer
    .prompt({
      type: "list",
      name: "mainMenuChoice",
      message: "Main menu. What would you like to do today?",
      choices: [
        "View all employees",
        "View all roles",
        "View all departments",
        "Add an employee",
        "Add a role",
        "Add a department",
        "Update employee role",

        // Bonus functions
        "View all employees by role",
        "View all employees by department",
        "View all employees by manager",
        // What does this mean
        "Update employee manager",

        "Delete employee",
        "Delete role",
        "Delete department",
        "View department budgets"
      ]
    })
    .then((answer) => {

        switch (answer.mainMenuChoice) {
            case "View all employees":
                viewAllEmp();
                break;

            case "View all roles":
                viewAllRoles();
                break;

            case "View all departments":
                viewAllDepts();
                break;

            case "Add an employee":
                addEmp();
                break;

            case "Add a role":
                addRole();
                break;

            case "Add a department":
                addDept();
                break;

            case "Update employee role":
                updateEmpRole();
                break;            
        }
    });
}


// View all employees 
function viewAllEmp(){
    connection.query("SELECT * FROM employee", function(err, result) {
        if (err) console.log('Error in query', err);
        else console.table('result', result);
})
}

// Same as above for role and department
// Additions is INSERT INTO