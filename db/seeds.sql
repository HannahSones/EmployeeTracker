USE employee_list_db;

-- Sample departments
INSERT INTO department (id, name)
VALUES (1, "Marketing"), (2, "HR"), (3, "Finance"), (4, "IT"), (5, "Legal");


-- Sample roles
INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Communications Assistant", 24000, 1), (2, "Marketing Manager", 35000, 1), (3, "HR Advisor", 27000, 2),
       (4, "HR Director", 48000, 2), (5, "Finance Assistant", 22000, 3), (6, "Payroll Manager", 31500, 3), 
       (7, "IT Manager", 40000, 4), (8, "IT Coordinator", 29000, 4), (9, "Head of Compliance", 50000, 5),
       (10, "Legal Assistant", 27500, 5);


-- Sample employees
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Hannah", "Sones", 2, null), (2, "Elliot", "Petrek", 1, 1), (3, "Kate", "Matthews", 3, 4),
       (4, "Jonathan", "Perry", 4, null), (5, "Dan", "Robson", 5, 6), (6, "Nathan", "Bell", 6, null),
       (7, "Becky", "Cole", 7, null), (8, "Amy", "Wilkes", 8, 7), (9, "Mark", "Woodman", 9, null),
       (10, "James", "Clifford", 10, 9);