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


// Functions to view all employees, roles and departments

function viewAllEmp(){
    connection.query("SELECT * FROM employee", function(err, result) {
        if (err) console.log('Error in query', err);
        else console.table(result);
        mainMenu()
    })
}


function viewAllRoles(){
    connection.query("SELECT employee.first_name, employee.last_name, role.title AS Title FROM employee JOIN role ON employee.role_id = role.id;", function(err, result) {
        if (err) console.log('Error in query', err);
        else console.table(result);
        mainMenu()
    })
}


function viewAllDepts(){
    connection.query("SELECT * FROM department;", function(err, result) {
        if (err) console.log('Error in query', err);
        else console.table(result);
        mainMenu()
    })
}


// Functions to add employees, roles and departments

function addEmp() {

    let roleArr = [];
    function selectRole() {
      connection.query("SELECT * FROM role", function(err, res) {
        if (err) throw err
        for (var i = 0; i < res.length; i++) {
          roleArr.push(res[i].title);
        }
      })
      return roleArr;
    }
    
    let managerArr = [];
    function selectManager() {
      connection.query("SELECT first_name, last_name FROM employee WHERE manager_id IS NULL", function(err, res) {
        if (err) throw err
        for (var i = 0; i < res.length; i++) {
          managerArr.push(res[i].first_name);
        }
    
      })
      return managerArr;
    }

        inquirer.prompt([
            {
              name: "firstName",
              type: "input",
              message: "Enter their first name "
            },
            {
              name: "lastName",
              type: "input",
              message: "Enter their last name "
            },
            {
              name: "role",
              type: "list",
              message: "Please select their role? ",
              choices: selectRole()
            },
            {
                name: "choice",
                type: "list",
                message: "Please select their manager?",
                choices: selectManager()
            }
        ]).then(function (answer) {
          var roleId = selectRole().indexOf(answer.role) + 1
          var managerId = selectManager().indexOf(answer.choice) + 1
          connection.query("INSERT INTO employee SET ?", 
          {
              first_name: answer.firstName,
              last_name: answer.lastName,
              manager_id: managerId,
              role_id: roleId
              
          }, function(err){
              if (err) throw err
              console.table(answer)
              console.log("Success. Your employee has been added.")
              mainMenu()
          })
    
      })
    }


function addRole() {
    
}



function addDept() {
    
}