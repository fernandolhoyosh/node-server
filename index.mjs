import readLine from "readline-sync";
import chalk from "chalk";

import { addTask } from "./modules/moduleAddTask.mjs";
import { deleteTask } from "./modules/moduleDeleteTask.mjs";
import { completeTask } from "./modules/moduleCompleteTask.mjs";
import { printTasks } from "./modules/modulePrintTasks.mjs";

const taskList = [{
  id:"1",
  description:"one",
  status: false,
}];

async function startApp() {
  let exitApp = false;

  while (!exitApp) {
    console.log(chalk.bgCyan.bold("\nTask list Node"));
    console.log(chalk.bold("Select an option:"));
    console.log("1. Add task");
    console.log("2. Delete task");
    console.log("3. Complete task");
    console.log("4. Show tasks");
    console.log("5. Exit");

    const option = parseInt(readLine.question(chalk.bold("> ")));
    let idInput;

    switch (option) {
      case 1:
        try {
          const done = await addTask(taskList);
          console.log(done);
        } catch (error) {
          console.error(error);
        }
        break;
      case 2:
        idInput = readLine.question("Enter the id of the task to be deleted: ");
          try {
            const task = await deleteTask(taskList, idInput);
            console.log(chalk.bgYellow.bold(`Task [${task}] successfully eliminated`));
          } catch (error) {
            console.log(chalk.bgRed.bold("Error resolving promise:"));
            console.log(error.message);
          }
        break;
      case 3:
        idInput = readLine.question("Enter the id of the task to be completed: ");
          try{
            const done = await completeTask(taskList, idInput);
            console.log(done);
          } catch (error) {
            console.log(error.message);
          }
        break;
      case 4:
        printTasks(taskList);
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
