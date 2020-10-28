DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employee_tracker;
USE employee_tracker;\


CREATE TABLE department (
    id INT NOT NULL PRIMARY KEY,
    name VARCHAR(30)
)

CREATE TABLE role (
    id INT NOT NULL PRIMARY KEY,
    title VARCHAR(30),
    slary Decimal(10,2),
    department_id INT NOT NULL
)

CREATE TABLE employee (
    id INT NOT NULL PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT NOT NULL,
    role_id INT NOT NULL
)
