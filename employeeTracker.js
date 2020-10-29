const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Kathmandu@123",
  database: "employee_tracker"
});

connection.connect(function (err) {
  if (err) throw err;
  startApp();
})

// first question 
let questions = [
  {
    type: "list",
    message: "Select from one of the following option?",
    name: "selected",
    choices: ["add department", "add employee", "add role", "view all employee", "update employee role"]
  }
];


function startApp() {
  inquirer.prompt(questions)
    .then(res => {
      console.log(res.selected);
      switch (res.selected) {
        case "add department":
          addDepartment();
          break;

        case "add employee":
          addEmployee();
          break;

        case "add role":
          addRole();
          break;

        case "view all employee":
          viewAllEmployee();
          break;

        case "update employee role":
          updateEmployeeRole()
          break;
      }
    })
};


// function to be called for "add department as a choice"

function addDepartment() {
  console.log("department added");
  inquirer.prompt([
    {
      type: "input",
      message: "Input sn id for department",
      name: "id"
    },
    {
      type: "input",
      message: "Input the name of department you would like to add?",
      name: "departmentName"
    }
  ]).then(res => {
    console.log("inserting new department")
    connection.query("INSERT INTO department SET ?", { id : res.id, department: res.departmentName },
      function (err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " product inserted!\n");
        startApp();

      }
    )
  })
};



function addEmployee() {
  console.log("employee added");
  inquirer.prompt([
    {
      type: "input",
      message: "Input an id the employee",
      name: "id"
    },
    {
      type: "input",
      message: "Input the first name of the employee",
      name: "firstName"
    },
    {
      type: "input",
      message: "Input the last name of the employee?",
      name: "lastName"
    },
    {
      type: "number",
      message: "Input the role id for the employee?",
      name: "roleId"
    },
    {
      type: "number",
      message: "Input the manager id for ",
      name: "managerId"
    }
  ]).then(res => {
    console.log("inserting new employee")
    connection.query("INSERT INTO employee SET ?",
      {
        id : res.id,
        first_name: res.firstName,
        last_name: res.lastName,
        role_id: res.roleId,
        manager_id: res.managerId

      },
      function (err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " product inserted!\n")
        startApp();

      }
    )
  })

};

function addRole() {
  console.log("role added");
  inquirer.prompt([
    {
      type: "input",
      message: "Input an id for the role?",
      name: "id"
    },
    {
      type: "input",
      message: "Input the title of the employee",
      name: "title"
    },
    {
      type: "input",
      message: "Input the salary of the employee?",
      name: "salary"
    },
    {
      type: "number",
      message: "Input the department id for the employee?",
      name: "departmentId"
    }
    
  ]).then(res => {
    console.log("inserting new employee")
    connection.query("INSERT INTO role SET ?",
      {
        id : res.id,
        title: res.title,
        salary: res.lastName,
        department_id: res.departmentId

      },
      function (err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " product inserted!\n")
        startApp();

      }
    )
  })

};

function viewAllEmployee(){
  connection.query("SELECT * FROM employee LEFT JOIN role ON employee.id = role.id LEFT JOIN department ON role.id = department.id"), 
  function(err, res){
    if(err) throw err;
    console.log(res);
  }
}

function updateEmployeeRole() {
  
  inquirer.prompt([
    {
      type: "input",
      message: "Provide an id for the role you would like to update?",
      name: "id"
    },
    {
      type: "input",
      message: "Provide a new id for this employee?",
      name: "newId"
    },
    {
      type: "input",
      message: "Input the new title of the employee",
      name: "newTitle"
    },
    {
      type: "input",
      message: "Input the new salary of the employee?",
      name: "newSalary"
    },
    {
      type: "number",
      message: "Input the new department id for the employee?",
      name: "newDepartmentId"
    }
    
  ]).then(res => {
   
    connection.query("UPDATE role SET ? WHERE ", 
    [{
      id : res.newId,
      title : res.newTitle,
      salary : res.newSalary,
      department_id : newDepartmentId
    },
    {
      id : res.id
    }
  ],
      function (err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " product inserted!\n");
        startApp();

      }
    )
  })
};