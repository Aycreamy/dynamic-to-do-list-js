// ✅ Run only when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {

    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // ✅ Function to add a new task
    function addTask() {
        // ✅ Trim spaces from input
        const taskText = taskInput.value.trim();

        // ✅ Check if input is empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // ✅ Create new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // ✅ Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.classList.add('remove-btn'); // ✅ required: classList.add

        // ✅ Remove the task when button is clicked
        removeBtn.addEventListener('click', function () {
            taskList.removeChild(li);
        });

        // ✅ Append button to li, then li to ul
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // ✅ Clear input field
        taskInput.value = "";
    }

    // ✅ Add task on button click
    addButton.addEventListener('click', addTask);

    // ✅ Add task on Enter key press
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
