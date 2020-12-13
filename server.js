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
                "Exit"
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

                case "Exit":
                    connection.end();
                    break;
            }
        });
}


// Functions to view all employees, roles and departments

function viewAllEmp() {
    connection.query("SELECT * FROM employee", function (err, result) {
        if (err) console.log('Error in query', err);
        else console.table(result);
        mainMenu()
    })
}


function viewAllRoles() {
    connection.query("SELECT employee.first_name, employee.last_name, role.title AS Title FROM employee JOIN role ON employee.role_id = role.id;", function (err, result) {
        if (err) console.log('Error in query', err);
        else console.table(result);
        mainMenu()
    })
}


function viewAllDepts() {
    connection.query("SELECT * FROM department;", function (err, result) {
        if (err) console.log('Error in query', err);
        else console.table(result);
        mainMenu()
    })
}


// Functions to add employees, roles and departments

function addEmp() {

    let roleArr = [];
    function selectRole() {
        connection.query("SELECT * FROM role", function (err, res) {
            if (err) throw err
            for (let i = 0; i < res.length; i++) {
                roleArr.push(res[i].title);
            }
        })
        return roleArr;
    }

    let managerArr = [];
    function selectManager() {
        connection.query("SELECT first_name, last_name FROM employee WHERE manager_id IS NULL", function (err, res) {
            if (err) throw err
            for (let i = 0; i < res.length; i++) {
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
            name: "manager",
            type: "list",
            message: "Please select their manager?",
            choices: selectManager()
        }
    ]).then(function (answer) {
        let roleId = selectRole().indexOf(answer.role) + 1
        let managerId = selectManager().indexOf(answer.choice) + 1
        connection.query("INSERT INTO employee SET ?",
            {
                first_name: answer.firstName,
                last_name: answer.lastName,
                manager_id: managerId,
                role_id: roleId

            }, function (err) {
                if (err) throw err
                console.table(answer)
                console.log("Success. Your employee has been added.")
                mainMenu()
            })

    })
}


function addRole() {

    let departmentArr = [];
    function selectDepartment() {
        connection.query("SELECT name FROM department", function (err, res) {
            if (err) throw err
            for (let i = 0; i < res.length; i++) {
                departmentArr.push(res[i].name);
            }
        })
        return departmentArr;
    }

    connection.query("SELECT role.title AS Title, role.salary AS Salary FROM role", function (err, res) {
        inquirer.prompt([
            {
                name: "role",
                type: "input",
                message: "What role would you like to add?"
            },
            {
                name: "salary",
                type: "input",
                message: "What is the salary for this role?"

            },
            {
                name: "department",
                type: "list",
                message: "Please select the correct department for the new role?",
                choices: selectDepartment()
            }
        ]).then(function (answer) {
            const departmentId = selectDepartment().indexOf(answer.department) + 1
            connection.query("INSERT INTO role SET ?",
                {
                    title: answer.role,
                    salary: answer.salary,
                    department_id: departmentId
                },
                function (err) {
                    if (err) throw err
                    console.table(answer);
                    console.log("Success. Your new role has been added.")
                    mainMenu()
                })
        });
    });
}



function addDept() {

    inquirer.prompt([
        {
            name: "department",
            type: "input",
            message: "What department would you like to add?"
        }
    ]).then(function (answer) {
        connection.query("INSERT INTO department SET ? ",
            {
                name: answer.department
            },
            function (err) {
                if (err) throw err
                console.table(answer);
                console.log("Success. Your new department has been added.")
                mainMenu()
            }
        )
    })
}


// Update employee role

function updateEmpRole() {

    // let allEmp = [];
    // connection.query("SELECT * FROM employee", function (err, answer) {
    //     if (err) throw err
    //     for (let i = 0; i < answer.length; i++) {
    //         let employeeString =
    //             answer[i].id + " " + answer[i].first_name + " " + answer[i].last_name;
    //             allEmp.push(employeeString);
    //     }

    let roleArr = [];
    function selectRole() {
        connection.query("SELECT * FROM role", function (err, res) {
            if (err) throw err
            for (let i = 0; i < res.length; i++) {
                roleArr.push(res[i].title);
            }
        })
        return roleArr;
    }

    connection.query("SELECT employee.last_name, role.title FROM employee JOIN role ON employee.role_id = role.id;", function (err, res) {
        if (err) throw err
        console.log(res)
        inquirer.prompt([
            {
                name: "lastName",
                type: "list",
                choices: function () {
                    let lastName = [];
                    for (let i = 0; i < res.length; i++) {
                        lastName.push(res[i].last_name);
                    }
                    return lastName;
                },
                message: "Please select the employee you wish to update from their last name ",
            },
            {
                name: "role",
                type: "rawlist",
                message: "What is the employees new title? ",
                choices: selectRole()
            },
        ]).then(function (val) {
            var roleId = selectRole().indexOf(val.role) + 1
            connection.query("UPDATE employee SET WHERE ?",
                {
                    last_name: val.lastName

                },
                {
                    role_id: roleId

                },
                function (err) {
                    if (err) throw err
                    console.table(val)
                    mainMenu()
                })

        });
    });
}
