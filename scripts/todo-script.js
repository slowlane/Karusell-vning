
function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerText = taskText;


        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Ta bort";
        deleteButton.onclick = () => {
            li.remove();
        };


        li.onclick = () => {
            li.classList.toggle("completed");
        };

        li.appendChild(deleteButton);
        document.getElementById("taskList").appendChild(li);
        taskInput.value = ""; // Rensa input-fältet
    }
}
