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
      ],
      name: "mainMenuChoice",
    },
  ]);

  switch (mainMenuChoice) {
    case "View all departments":
      break;
    case "View all roles":
      break;
    case "View all employees":
      break;
    case "Add a department":
      break;
    case "Add a role":
      break;
    case "Add an employee":
      break;
    case "Update an employee role":
      break;
  }
};
