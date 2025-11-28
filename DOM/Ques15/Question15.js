// Get DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to create a new task item
function createNewTask(taskText) {
    // 1. Create the <li> element
    const listItem = document.createElement('li');
    listItem.className = 'task-item';

    // 2. Create the text container (for completion styling)
    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = taskText;
    taskTextSpan.className = 'task-text';
    
    // 3. Create the "Complete" button
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    
    // 4. Create the "Delete" button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    // Append the components to the <li>
    listItem.appendChild(taskTextSpan);
    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);
    
    return listItem;
}

// Function to handle adding a task
function handleAddTask() {
    const taskContent = taskInput.value.trim(); // Get input value and trim whitespace

    // Ensure the application is robust and handles edge cases (empty input)
    if (taskContent === "") {
        alert("Please enter a task before adding.");
        return; // Exit the function if input is empty
    }

    // Create and append the new task
    const newTask = createNewTask(taskContent);
    taskList.appendChild(newTask);

    // Clear the input field for the next task
    taskInput.value = '';
}

// Function to handle the "Complete" and "Delete" actions
// This uses Event Delegation on the parent <ul> element.
taskList.addEventListener('click', (event) => {
    // Check if the clicked element is a button
    if (event.target.tagName === 'BUTTON') {
        const button = event.target;
        const listItem = button.closest('li'); // Find the parent <li>

        if (button.textContent === 'Delete') {
            // Handle "Delete" action: removes the parent <li>
            listItem.remove();
        } else if (button.textContent === 'Complete') {
            // Handle "Complete" action: toggles the "completed" class on the text span
            const taskTextSpan = listItem.querySelector('.task-text');
            taskTextSpan.classList.toggle('completed');
        }
    }
});

// Dynamically add tasks to the <ul> when the "Add Task" button is clicked
addTaskBtn.addEventListener('click', handleAddTask);

// Optional: Allow adding tasks by pressing the 'Enter' key
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        handleAddTask();
    }
});