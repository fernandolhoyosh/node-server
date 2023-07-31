import chalk from "chalk";

export const printTasks = (taskList) => {
    console.log(chalk.blue.underline.bold("\nTask list:\n"));
    taskList.map((task)=>{
      const id = chalk.cyan.bold(task.id);
      const description = chalk.cyan.bold(task.description);
      const status = task.status ? chalk.green("Completed") : chalk.yellow("Pending");
      console.log(`id: ${id} | task: ${description} | status: ${status}`);
    });
}