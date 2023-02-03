const mysql = require("mysql2");
const table = require("console.table");
const promises = require("./promises");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "employees_db",
  multipleStatements: true,
});

const queryNewDepartment = (departmentName) => {
  db.query(
    "INSERT INTO departments(dep_name) VALUES(?)",
    [departmentName],
    (err, results) => {
      if (err) {
        throw err;
      } else {
        console.log("Updated.");
      }
    }
  );
};

const queryNewEmployee = (firstName, lastName, role, manager) => {
  db.query(
    "INSERT INTO employees (first_name,last_name,role_id,manager_id) VALUES(?,?,?,?);",
    [firstName, lastName, role, manager],
    (err, results) => {
      if (err) {
        throw err;
      } else {
        console.log("Updated");
      }
    }
  );
};

const queryNewRole = (roleName, roleSalary, departmentID) => {
  db.query(
    "INSERT INTO roles (role_name,salary,dep_id) VALUES (?,?,?)",
    [roleName, roleSalary, departmentID],
    (err, results) => {
      if (err) {
        throw err;
      }
    }
  );
};

const queryUpdateEmployee = async (role, manager, firstName, lastName) => {
  db.query(
    "UPDATE employees SET role_id=?,manager_id=? WHERE first_name=? AND last_name=?;",
    [role, manager, firstName, lastName],
    (err, results) => {
      if (err) {
        throw err;
      }
    }
  );
};

module.exports = {
  queryNewEmployee,
  queryNewRole,
  queryNewDepartment,
  queryUpdateEmployee,
};
