// ✅ Run the code only after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // ✅ Step 1: Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // ✅ Step 2: Define the function to add a task
    function addTask() {
        const taskText = taskInput.value.trim(); // Remove leading/trailing spaces

        // ✅ Step 3: Check if input is empty
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
        removeBtn.classList.add('remove-btn'); // ✅ Use classList.add instead of className

        // ✅ Step 6: Remove task on button click
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // ✅ Step 7: Append the remove button to the task item
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // ✅ Step 8: Clear input field
        taskInput.value = "";
    }

    // ✅ Step 9: Add click event for Add Task button
    addButton.addEventListener('click', addTask);

    // ✅ Step 10: Add Enter key functionality
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
