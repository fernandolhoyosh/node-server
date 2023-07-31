import readLine from "readline-sync";
import chalk from "chalk";

export const addTask = (taskList) => {
    return new Promise((resolve) => {
        const id = readLine.question("Enter the task id: ");
        const description = readLine.question("Enter the task description: ");
        
        const newTask = {
          id: id,
          description: description,
          status: false,
        };
        
        taskList.push(newTask);
        resolve(chalk.bgGreen.bold("Task successfully added"));
      });
}