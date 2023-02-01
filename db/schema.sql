DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE
    test(
        id INT AUTO_INCREMENT PRIMARY KEY,
        test VARCHAR(30)
    );

DESCRIBE test;