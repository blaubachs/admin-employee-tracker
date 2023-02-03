const mysql = require("mysql2");
const table = require("console.table");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "employees_db",
  multipleStatements: true,
});

const getAllEmployeeNames = () => {
  let nameArr = [];
  return new Promise((resolve, reject) => {
    db.query("SELECT first_name, last_name FROM employees;", (err, result) => {
      if (err) {
        reject(err);
      } else {
        for (let i = 0; i < result.length; i++) {
          nameArr.push(`${result[i].first_name} ${result[i].last_name}`);
        }
        resolve(nameArr);
      }
    });
  });
};

const getAllRoles = () => {
  let roleArr = [];
  return new Promise((resolve, reject) => {
    db.query("SELECT role_name FROM roles;", (err, response) => {
      if (err) {
        reject(err);
      } else {
        for (let i = 0; i < response.length; i++) {
          roleArr.push(response[i].role_name);
        }
        resolve(roleArr);
      }
    });
  });
};

const getAllDepartments = () => {
  let depArr = [];
  return new Promise((resolve, reject) => {
    db.query("SELECT dep_name FROM departments;", (err, response) => {
      if (err) {
        reject(err);
      } else {
        for (let i = 0; i < response.length; i++) {
          depArr.push(response[i].dep_name);
        }
        resolve(depArr);
      }
    });
  });
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
  getAllEmployeeNames,
  getAllRoles,
  getAllDepartments,
  viewAllDepartments,
  viewAllEmployees,
  viewAllRoles,
};
