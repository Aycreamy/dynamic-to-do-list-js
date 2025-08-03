document.addEventListener('DOMContentLoaded', function () {

    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // ✅ Step 1: Load saved tasks when the page loads
    loadTasks();

    // ✅ Step 2: Add a task to the list and optionally save to Local Storage
    function addTask(taskText, save = true) {
        taskText = taskText.trim();

        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // ✅ Create the task item
        const li = document.createElement('li');
        li.textContent = taskText;

        // ✅ Create the remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.classList.add('remove-btn');

        // ✅ Remove task when button clicked
        removeBtn.onclick = function () {
            taskList.removeChild(li);
            removeTaskFromStorage(taskText); // ✅ Remove from Local Storage
        };

        // ✅ Add remove button to list item
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // ✅ Save to Local Storage (only when adding new tasks, not loading)
        if (save) {
            const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            tasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }

        // ✅ Clear input
        taskInput.value = "";
    }

    // ✅ Step 3: Load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false));
    }

    // ✅ Step 4: Remove task from Local Storage
    function removeTaskFromStorage(taskText) {
        let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        tasks = tasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // ✅ Step 5: Add task when button is clicked
    addButton.addEventListener('click', function () {
        addTask(taskInput.value);
    });

    // ✅ Step 6: Add task when Enter key is pressed
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask(taskInput.value);
        }
    });

});