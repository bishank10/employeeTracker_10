const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Kathmandu@123",
  database: "employee_tracker"
});

connection.connect(function(err){
  if(err) throw err;
  startApp();
})

// first question 
let questions= [
  {
      type : "list",
      message : "Select from one of the following option?",
      choices : ["add department", "add employee", "add role", "view department", "view roles", "view employees", "update employee role"],
      name : "selected "

  }
];


function startApp(){
  inquirer.prompt(questions)
  .then(res => {
  switch(res.selected){
    case "add department":
      addDepartment()
      break;

      case "add employee":
      addEmployee()
      break;

      case "add role":
      addRole()
      break;

      case "view department":
      viewDepartment()
      break;

      case "view roles":
      viewRoles()
      break;

      case "view employees":
      viewEmployees()
      break;

      case "update employee role":
      updateEmployeeRole()
      break;
  }
})};


// function to be called for "add department as a choice"

function addDepartment(){
  console.log("department added");
  // inquirer.prompt([
  //   {
  //     type : "input",
  //     message : "Input the name of department you would like to add?",
  //     name : "departmentName"
  //   }
  // ]).then(res => {
  //   console.log("inserting new department")
  //   connection.query("INSERT INTO department SET ?",{department : res.departmentName},
  //   function(err, res) {
  //     if (err) throw err;
  //     startApp();
      
  //   }
  //   )
  // })
}