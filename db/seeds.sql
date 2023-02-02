USE employees_db;

INSERT INTO
    departments(dep_name)
VALUES ("Sales"), ("Finances"), ("Development");

INSERT INTO
    roles(dep_id, role_name, salary)
VALUES (1, "Sales Associate", 80000), (3, "Software Engineer", 120000), (2, "Accountant", 100000), (3, "Project Manager", 180000);

INSERT INTO
    employees(
        first_name,
        last_name,
        role_id,
        manager_id
    )
VALUES ("Bob", "Bobert", 4, NULL), ("Ben", "Laubach", 2, 1), ("Rin", "Hyggeligt", 1, 2), ("Taran", "Iudix", 1, 3);

-- SELECT * FROM departments;

-- SELECT * FROM roles;

-- SELECT * FROM employees;