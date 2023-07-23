import readLine from "readline-sync";
import chalk from "chalk";

const taskList = [];

const addTask = () => {
  const id = readLine.question("Enter the task id: ");
  const description = readLine.question("Enter the task description: ");

  const newTask = {
    id: id,
    description: description,
    status: false,
  };

  taskList.push(newTask);
  console.log(chalk.bgGreen.bold("Task successfully added"));
};

const printTasks = () => {
    console.log(chalk.blue.underline("\nTask list:\n"));
    taskList.map((task)=>{
        console.log(task.description);
    });
}

const startApp = () => {
  let exitApp = false;
  while (!exitApp) {
    console.log(chalk.bgCyan.bold("\nTask list App"));
    console.log(chalk.inverse("Select an option:"));
    console.log("1. Add task");
    console.log("2. Delete task");
    console.log("3. Complete task");
    console.log("4. Show tasks");
    console.log("5. Exit");
    const option = parseInt(readLine.question(chalk.inverse("> ")));

    switch (option) {
      case 1:
        addTask();
        break;
      case 2:
        console.log(chalk.bgYellow.bold("Delete success task"));
        break;
      case 3:
        break;
      case 4:
        printTasks();
        break;
      case 5:
        exitApp = true;
        console.log(chalk.blue("See you later"));
        break;

      default:
        console.log(chalk.bgRed("invalid option. Choose another option"));
        break;
    }
  }
};

startApp();
