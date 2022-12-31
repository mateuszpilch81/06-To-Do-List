{
    const task = [];
    const removeTask = (taskIndex) => {
        task.splice (taskIndex,1);
        render ();
    };

    const toggleTaskDone = (taskIndex) => {
        task[taskIndex].done = !task[taskIndex].done;
        rednder ();
    };
    
}