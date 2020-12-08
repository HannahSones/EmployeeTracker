USE employee_list_db;

-- Sample departments
INSERT INTO department (id, name)
VALUES (1, "Marketing");

INSERT INTO department (id, name)
VALUES (2, "HR");

INSERT INTO department (id, name)
VALUES (3, "Finance");

INSERT INTO department (id, name)
VALUES (4, "IT");

INSERT INTO department (id, name)
VALUES (5, "Legal");


-- Sample roles
INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Communications Assistant", 24000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (2, "Marketing Manager", 35000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (3, "HR Advisor", 27000, 2);

INSERT INTO role (id, title, salary, department_id)
VALUES (4, "HR Director", 48000, 2);

INSERT INTO role (id, title, salary, department_id)
VALUES (5, "Finance Assistant", 22000, 3);

INSERT INTO role (id, title, salary, department_id)
VALUES (6, "Payroll Manager", 31500, 3);

INSERT INTO role (id, title, salary, department_id)
VALUES (7, "IT Manager", 40000, 4);

INSERT INTO role (id, title, salary, department_id)
VALUES (8, "IT Coordinator", 29000, 4);

INSERT INTO role (id, title, salary, department_id)
VALUES (9, "Head of Compliance", 50000, 5);

INSERT INTO role (id, title, salary, department_id)
VALUES (10, "Legal Assistant", 27500, 5);


-- Sample employees
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Hannah", "Sones", 2, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (2, "Elliot", "Petrek", 1, 1);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (3, "Kate", "Matthews", 3, 4);

INSERT INTO employee (id, first_name, last_name role_id, manager_id)
VALUES (4, "Jonathan", "Perry", 4, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (5, "Dan", "Robson", 5, 6);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (6, "Nathan", "Bell", 6, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (7, "Becky", "Cole", 7, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (8, "Amy", "Wilkes", 8, 7);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (9, "Mark", "Woodman", 9, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (10, "James", "Clifford", 10, 9);