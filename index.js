const readLine = require('readline-sync');

const taskList = [];

const addTask = () => {
    const id = readLine.question('Enter the task id: ');
    const description = readLine.question('Enter the task description: ');

    const newTask = {
        id,
        description,
        status: false
    };

    taskList.push(newTask);
    console.log('Task successfully added');

}

const startApp = () => {
    console.log("Task list App\n");
    console.log("1. Add task");
    console.log("2. Delete task");
    const option = parseInt(readLine.question('Select a choose: '));

    switch (option) {
        case 1:
            addTask();
            break;
        case 2:
            console.log("Delete success task")
            break;
    
        default:
            console.log('Option no valid')
            break;
    }
}


startApp();