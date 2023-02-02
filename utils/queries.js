const mysql = require("mysql");
const table = require("console.table");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "employees_db",
  multipleStatements: true,
});

const queryNewEmployee = async (firstName, lastName, role, manager) => {
  const query = await db.query(
    "INSERT INTO employees (first_name,last_name,role_id,manager_id) VALUES(?,?,?,?);",
    [firstName, lastName, role, manager],
    (err, results) => {
      if (err) {
        throw err;
      } else {
        console.log(results);
      }
    }
  );
  console.log("Updated");
};

const viewAllDepartments = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM departments", (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const viewAllRoles = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM roles", (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const viewAllEmployees = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM employees", (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = {
  queryNewEmployee,
  viewAllDepartments,
  viewAllRoles,
  viewAllEmployees,
};
