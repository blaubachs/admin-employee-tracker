const mysql = require("mysql");

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

const viewAllDepartments = async () => {
  db.query("SELECT * FROM departments", (err, results) => {
    if (err) {
      throw err;
    } else {
      console.table(results);
    }
  });
  const reInit = await init();
};

module.exports = { queryNewEmployee, viewAllDepartments };
