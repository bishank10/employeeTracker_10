DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employee_tracker;
USE employee_tracker;


CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY(id)
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary Decimal(10,2),
    department_id INT NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT NOT NULL,
    manager_id INT NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO department(name)
VALUES
    ("Front office"),
    ("Accounting"),
    ("MARKETING"),
    ("Health");

INSERT INTO role(id,title, salary, department_id)
VALUES
    (1, "bookkeeper", 3000, "2"),
    (2, "teller", 2000, "1"),
    (3, "manager", 3000, "3"),
    (4, "doctor", 5000, "3");


INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
    (1, "Shawn", "Swanson", 2, 1),
    (2, "Victor", "Gallegos", 1, 1),
    (3, "Jhonny", "Furly", 1, 1),
    (4, "Jhonny", "Furly", 2, 1);