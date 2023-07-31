import chalk from "chalk";

export const deleteTask = (taskList, id) => {
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