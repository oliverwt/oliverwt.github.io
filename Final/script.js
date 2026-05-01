const form = document.getElementById("taskForm");

    let tasks = [];
    let idCounter = 1;

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const taskName = document.getElementById("taskName").value;
        const priority = document.getElementById("priority").value;
        const isImportant = document.getElementById("important").checked;

        // Add new task
        const newTask = {
            // Add ID
            id: idCounter++,
            name: taskName,
            priority: priority,
            isImportant: isImportant,
            isCompleted: false,
            date: new Date().toLocaleDateString()
        };

        tasks.push(newTask);
        console.log(JSON.stringify(tasks));

        // Create task container
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");
        if (newTask.isImportant) {
            taskDiv.style.backgroundColor = "red";
        }

        // Task text
        const text = document.createElement("span");
        text.textContent = `${newTask.name} | Priority: ${newTask.priority} | ${newTask.date}`;

        // Checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        // Label
        const label = document.createElement("label");
        label.textContent = " Done";

        // Toggle behavior
        checkbox.addEventListener("change", function () {
            // Done checked
            if (checkbox.checked) {
                label.textContent = " Undo";
                newTask.isCompleted = true;
                // Line thru if Done is checked
                text.style.textDecoration = "line-through";
            // Done unchecked
            } else {
                label.textContent = " Done";
                newTask.isCompleted = false;
                text.style.textDecoration = "none";
            }
        });

        // Delete button Visual
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        // Delete button removes taskDiv
        deleteButton.addEventListener("click", function () {
            taskDiv.remove();
        });

        // Append elements
        taskDiv.appendChild(text);
        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(label);
        taskDiv.appendChild(deleteButton);

        // Add to DOM
        document.getElementById("taskmanager").appendChild(taskDiv);

        // Add line between tasks
        const line = document.createElement("hr");
        document.getElementById("taskmanager").appendChild(line);

        // Reset form
        form.reset();
    });