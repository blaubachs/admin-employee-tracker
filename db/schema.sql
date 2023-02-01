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
        is INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        Foreign Key (dep_name) REFERENCES departments(id),
        dep_name VARCHAR(30) ON DELETE CASCADE
    );

CREATE TABLE
    employees (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(30) NOT NULL,
        last_name VARCHAR(30) NOT NULL,
        role VARCHAR(30) NOT NULL,
        manager VARCHAR(30)
    );

DESCRIBE employees;