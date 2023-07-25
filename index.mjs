import readLine from "readline-sync";
import chalk from "chalk";

const taskList = [{
  id:"1",
  description:"one",
  status: true,
}];

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

const deleteTask = () => {
  return new Promise((resolve, reject) => {
    const idTask = readLine.question("Enter the id of the task to be deleted: ");
    setTimeout(() => {
    if(taskList.find((task) => task.id === idTask)){
      const index = taskList.findIndex((task) => task.id === idTask);
      const taskName = taskList[index].description;
      taskList.splice(index,1);
        resolve(taskName);
      }else{
        reject( new Error(chalk.red.bold("ID invalid or does not exist in the list. Try again")));
      }
    }, 3000);
  });
}

const completeTask = () => {
    const idTask = readLine.question("Enter the id of the task to be completed: ");
    if (taskList.find((task) => task.id === idTask)) {
        taskList.forEach((task) => {
            if (task.id === idTask) {
                task.status = true;
                console.log(chalk.green(`Task [${task.description}] completed!`));
            }
        });
    } else {
        console.log(chalk.red.bold("ID invalid or does not exist in the list. Try again"));
    }
}

const printTasks = () => {
    console.log(chalk.blue.underline.bold("\nTask list:\n"));
    taskList.map((task)=>{
        const id = chalk.cyan.bold(task.id);
        const description = chalk.cyan.bold(task.description);
        const status = task.status ? chalk.green("Completed") : chalk.yellow("Pending");
        console.log(`id: ${id} | task: ${description} | status: ${status}`);
    });
}

const startApp = () => {
  let exitApp = false;

  /* while (!exitApp) { */
    console.log(chalk.bgCyan.bold("\nTask list Node"));
    console.log(chalk.bold("Select an option:"));
    console.log("1. Add task");
    console.log("2. Delete task");
    console.log("3. Complete task");
    console.log("4. Show tasks");
    console.log("5. Exit");

    const option = parseInt(readLine.question(chalk.bold("> ")));

    switch (option) {
      case 1:
        addTask();
        break;
      case 2:
        deleteTask()
          .then((task) => {
            console.log(chalk.bgYellow.bold(`task [${task}] successfully eliminated`));
          })
          .catch((error) => {
            console.log(chalk.bgRed.bold("Error resolving promise:"));
            console.log(error.message);
          });
        break;
      case 3:
        completeTask();
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
  /* } */
};

startApp();
