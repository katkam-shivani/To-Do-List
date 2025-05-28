 document.getElementById('addBtn').addEventListener('click', addTask);
        
        function addTask() {
            const input = document.getElementById('taskInput');
            if (input.value.trim() === '') return;
            
            const li = document.createElement('li');
            li.className = 'task';
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.addEventListener('change', function() {
                li.classList.toggle('completed');
            });
            
            const span = document.createElement('span');
            span.textContent = input.value;
            
            const deleteBtn = document.createElement('span');
            deleteBtn.className = 'delete';
            deleteBtn.textContent = 'Remove';
            deleteBtn.addEventListener('click', function() {
                li.remove();
            });
            
            li.appendChild(checkbox);
            li.appendChild(span);
            li.appendChild(deleteBtn);
            document.getElementById('taskList').appendChild(li);
            
            input.value = '';
        }