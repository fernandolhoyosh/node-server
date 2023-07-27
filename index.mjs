import readLine from "readline-sync";
import chalk from "chalk";

const taskList = [{
  id:"1",
  description:"one",
  status: false,
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

const deleteTask = (id) => {
  return new Promise((resolve, reject) => {
    console.log(chalk.inverse("processing request..."));
    setTimeout(() => {
    if(taskList.find((task) => task.id === id)){
      const index = taskList.findIndex((task) => task.id === id);
      const taskName = taskList[index].description;
      taskList.splice(index,1);
        resolve(taskName);
      }else{
        reject( new Error(chalk.red.bold("ID invalid or does not exist in the list. Try again")));
      }
    }, 3000);
  });
}

const completeTask = (id) => {
  return new Promise((resolve, reject) => {
    if (taskList.find((task) => task.id === id)) {
        taskList.forEach((task) => {
            if (task.id === id) {
                task.status = true;
              }
              resolve(chalk.green(`Task [${task.description}] completed!`));
            });
    } else {
      reject( new Error(chalk.red.bold("ID invalid or does not exist in the list. Try again")));
    }
  });
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
        addTask();
        break;
      case 2:
        idInput = readLine.question("Enter the id of the task to be deleted: ");
        /* deleteTask(idTaskDelete)
          .then((task) => {
            console.log(chalk.bgYellow.bold(`task [${task}] successfully eliminated`));
          })
          .catch((error) => {
            console.log(chalk.bgRed.bold("Error resolving promise:"));
            console.log(error.message);
          }); */

          try {
            const task = await deleteTask(idInput); // Wait for the Promise to resolve
            console.log(chalk.bgYellow.bold(`Task [${task}] successfully eliminated`));
          } catch (error) {
            console.log(chalk.bgRed.bold("Error resolving promise:"));
            console.log(error.message);
          }
        break;
      case 3:
        idInput = readLine.question("Enter the id of the task to be completed: ");
          try{
            const test = await completeTask(idInput);
            console.log(test);
          } catch (error) {
            console.log(error.message);
          }
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
