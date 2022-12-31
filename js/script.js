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

    const addNewTask = (newTaskContent) => {
        task.push({content: newTaskContent})
        render();
    };

    const bindRemoveEvents = () => {
        const removeButtons  = document.querySelectorAll (".js-remove");

        removeButtons.forEach((removeButton, taskIndex) => {
            removeButton.addEventListener ("click", () => {
                removeTask(taskIndex);
            });
        });
    };

    const bindToogleDoneEvents = () => {
        const toggleDoneButtons = document.querySelectorAll (".js-toggleDone");

        toggleDoneButtons.forEach((toggleDoneButtons, taskIndex) => {
        toggleDoneButtons.addEventListener ("click", () => {
            toggleTaskDone (taskIndex);
        });
    });
    };

    const render = () => {
        lettaskListHTMLContent = "";
        for (const task of tasks) {
            taskListHTMLContent += '
            <li class "tasks__item js-task">

            <button class = "tasks__button tasks__button--toogleDone js-toggleDone">
            ${task.done ? "✓" : ""}
            </button>
<span class = "tasks__content ${task.done ? " tasks__content--done" : ""} " >
 ${task.content}
  </span>
<button class = "tasks__button tasks__button--remove js-remove">
🗑
</button>
</li>
';
        }
        document.querySelector(".js-tasks).innerHTML = taskListHTMLContent;
        bindRemoveEvents();
        bindToggleDoneEvents();
    };
