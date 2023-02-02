DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE
    departments (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        dep_name VARCHAR(30)
    );

CREATE TABLE
    roles (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        role_name VARCHAR(30),
        salary INT,
        Foreign Key (dep_id) REFERENCES departments(id),
        dep_id INT
    );

CREATE TABLE
    employees (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(30) NOT NULL,
        last_name VARCHAR(30) NOT NULL,
        role_id INT,
        FOREIGN KEY (role_id) REFERENCES roles(id),
        manager_id INT,
        FOREIGN KEY (manager_id) REFERENCES employees(id) ON DELETE
        SET NULL
    );