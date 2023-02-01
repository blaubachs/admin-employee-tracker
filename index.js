const inquirer = require("inquirer");
const mysql = require("mysql");

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
  console.log("You chose viewDeps");
  init();
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
  console.log("You chose addRole");
  init();
};

const addNewEmployee = async () => {
  console.log("You chose addNewEmp");
  init();
};

const updateEmployee = async () => {
  console.log("You chose updEmp");
  init();
};

init();
