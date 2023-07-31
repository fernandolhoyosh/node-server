import chalk from "chalk";

export const completeTask = (taskList, id) => {
    return new Promise((resolve, reject) => {
      if (taskList.find((task) => task.id === id)) {
          taskList.forEach((task) => {
              if (task.id === id) {
                  task.status = true;
                  resolve(chalk.green(`Task [${task.description}] completed!`));
                }
              });
      } else {
        reject( new Error(chalk.red.bold("ID invalid or does not exist in the list. Try again")));
      }
    });
  }