const inquirer = require("inquirer");
const mysql = require("mysql");
const util = require("util");
const utilQueries = require("./utils/queries");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "employees_db",
  multipleStatements: true,
});

const init = async () => {
  const mainMenu = await inquirer.prompt([
    {
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role",
        "Quit",
      ],
      name: "mainMenuChoice",
    },
  ]);
  const { mainMenuChoice } = mainMenu;

  switch (mainMenuChoice) {
    case "View all departments":
      viewDepartments();
      break;
    case "View all roles":
      viewEmployeeRoles();
      break;
    case "View all employees":
      viewEmployees();
      break;
    case "Add a department":
      addNewDepartment();
      break;
    case "Add a role":
      addRole();
      break;
    case "Add an employee":
      addNewEmployee();
      break;
    case "Update an employee role":
      updateEmployee();
      break;
    case "Quit":
      console.log("Goodbye!");
  }
};

const viewDepartments = async () => {
  utilQueries.viewAllDepartments();
};

const viewEmployeeRoles = async () => {
  console.log("You chose view empRoles");
  init();
};

const viewEmployees = async () => {
  console.log("You chose viewEmps");
  init();
};

const addNewDepartment = async () => {
  console.log("You chose addDep");
  init();
};

const addRole = async () => {
  const newRolePrompt = await inquirer.prompt([
    {
      type: "input",
      message: "What is the name of the role?",
      name: "newRoleName",
    },
    {
      type: "number",
      message: "What is the salary of this role?",
      name: "newRoleSalary",
    },
    {
      type: "list",
      message: "What department does this role belong to?",
      choices: "",
      name: "newRoleDep",
    },
  ]);
  console.log("You chose addRole");
  init();
};

const addNewEmployee = async () => {
  let roleArr = [];
  let managerArr = [];

  db.query("SELECT role_name FROM roles;", (err, response) => {
    if (err) {
      console.log(err);
    } else {
      for (let i = 0; i < response.length; i++) {
        roleArr.push(response[i].role_name);
      }
    }
  });

  db.query("SELECT first_name, last_name FROM employees;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      for (let i = 0; i < result.length; i++) {
        managerArr.push(`${result[i].first_name} ${result[i].last_name}`);
      }
    }
  });
  const newEmpPrompt = await inquirer.prompt([
    {
      type: "input",
      message: "What is the employees first name?",
      name: "empFirstName",
    },
    {
      type: "input",
      message: "What is the employees Last name?",
      name: "empLastName",
    },
    {
      type: "list",
      message: "What is the employees role?",
      choices: roleArr,
      name: "empRole",
    },
    {
      type: "list",
      message: "Who is this employees manager?",
      choices: managerArr,
      name: "empManager",
    },
  ]);
  const { empFirstName, empLastName, empRole, empManager } = newEmpPrompt;
  let roleId = roleArr.indexOf(empRole) + 1;
  let managerId = managerArr.indexOf(empManager) + 1;
  const runQuery = await utilQueries.queryNewEmployee(
    empFirstName,
    empLastName,
    roleId,
    managerId
  );
  init();
};

const updateEmployee = async () => {
  console.log("You chose updEmp");
  init();
};

init();
