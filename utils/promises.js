const mysql = require("mysql2");
const table = require("console.table");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "employees_db",
  multipleStatements: true,
});

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
  viewAllDepartments,
  viewAllEmployees,
  viewAllRoles,
};
