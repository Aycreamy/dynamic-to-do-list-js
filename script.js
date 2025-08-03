// ✅ Run the code only after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // ✅ Step 1: Select necessary DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // ✅ Step 2: Define the function to add a task
    function addTask() {
        const taskText = taskInput.value.trim(); // remove spaces

        // ✅ Step 3: Validate input
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // ✅ Step 4: Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // ✅ Step 5: Create a remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // ✅ Step 6: Add event to remove the task when button clicked
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // ✅ Step 7: Append button to li, then li to the list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // ✅ Step 8: Clear input field
        taskInput.value = "";
    }

    // ✅ Step 9: Add event listener for the "Add Task" button
    addButton.addEventListener('click', addTask);

    // ✅ Step 10: Allow pressing "Enter" to add a task
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
