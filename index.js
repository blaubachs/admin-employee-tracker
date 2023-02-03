const inquirer = require("inquirer");
const mysql = require("mysql2");
const utilQueries = require("./utils/queries");
const promises = require("./utils/promises");
const table = require("console.table");

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
  const allDeps = await promises.viewAllDepartments();
  try {
    if (allDeps) {
      console.table(allDeps);
      init();
    }
  } catch (err) {
    throw err;
  }
};

const viewEmployeeRoles = async () => {
  const allRoles = await promises.viewAllRoles();
  try {
    if (allRoles) {
      console.table(allRoles);
      init();
    }
  } catch (err) {
    throw err;
  }
};

const viewEmployees = async () => {
  const allEmps = await promises.viewAllEmployees();
  try {
    if (allEmps) {
      console.table(allEmps);
      init();
    }
  } catch (err) {
    throw err;
  }
};

const addNewDepartment = async () => {
  const roles = await promises.getAllRoles();
  console.log("You chose addDep");
  init();
};

const addRole = async () => {
  try {
    const departments = await promises.getAllDepartments();
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
        choices: departments,
        name: "newRoleDep",
      },
    ]);
    let { newRoleName, newRoleSalary, newRoleDep } = newRolePrompt;
    let actualDepID = departments.indexOf(newRoleDep) + 1;
    utilQueries.queryNewRole(newRoleName, newRoleSalary, actualDepID);
    init();
  } catch (err) {
    throw err;
  }
};

const addNewEmployee = async () => {
  const empNames = await promises.getAllEmployeeNames();
  const roles = await promises.getAllRoles();

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
      choices: roles,
      name: "empRole",
    },
    {
      type: "list",
      message: "Who is this employees manager?",
      choices: empNames,
      name: "empManager",
    },
  ]);
  const { empFirstName, empLastName, empRole, empManager } = newEmpPrompt;
  let roleId = roles.indexOf(empRole) + 1;
  let managerId = empNames.indexOf(empManager) + 1;
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
