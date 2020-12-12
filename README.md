# EmployeeTracker
Architect and build a solution for managing a company's employees using node, inquirer, and MySQL.

## Table of contents
* [About](#about-the-project)
  * [Built using](#built-using)
* [Functionality](#functionality)
* [Installation](#installation)
* [Further Development](#further-development)
* [License](#license)

----------

## About the project
This employee tracker application uses the command-line to view all employees, roles and departments, add new employees, roles and departments as well as delete employees, roles and departments. It also permits a user to update an employees role and view the total expenditure of the company.

The project includes a `seeds.sql` file to populate the tables with initial data for manipulation.

### Built using
* Node.js
* Inquirer
* Express
* MySQL

----------

## Functionality  
The following screen record video demonstrates the entirety of the app's functionality.
![Employee tracker video walk through](https://github.com/HannahSones/EmployeeTracker/blob/main/assets/EmployeeTracker%20walkthrough.gif)   

The database uses the following schema structure, containing three tables.
![Database schema](https://github.com/HannahSones/EmployeeTracker/blob/main/assets/Database%20schema.png)   

-------------

## Installation
1. Clone the code from the GitHub repo
2. Open project directory, then npm install to install all required dependencies (inquirer, MySQL, console.table)
3. Add your password to access the MySQL database connection
4. Enter $ node server to run the application

-------------
## Further development
* Refactor the code to create a function for the connection.query to prevent repetitive use

------------
## License

Licensed under the [MIT License](https://choosealicense.com/licenses/mit/). A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.   
![MIT license](https://img.shields.io/badge/license-MIT-brightgreen)

-------------

Hannah Sones © 2020. All rights reserved.
