const toDoList = {
    tasks: [],

    addTask (text, id = Date.now()) {
        const task = {
            text,
            status: false,
            id,
        };
    
        this.tasks.push(task);

        return toDoList;
    },

    deleteTask (id) {
        const index = this._findTaskByID(id);

        if (index >= 0) {
            this.tasks.splice(index, 1);
        }

        return toDoList;
    },

    changeTask (id, text) {
        const index = this._findTaskByID(id);

        if (index >= 0) {
            this.tasks[index].text = text;
        }

        return toDoList;
    },

    updateStatus (id) {
        const index = this._findTaskByID(id);

        if (index >= 0) {
            this.tasks[index].status = true;
        }

        return toDoList;
    },

    _findTaskByID (id) {
        return this.tasks.findIndex((task) => task.id === id);
    }
};

Object.freeze(toDoList);

console.log(toDoList.addTask('to watch a lesson', 123));
console.log(toDoList.addTask('to watch a lesson2', 124));
console.log(toDoList.addTask('to watch a lesson3', 125));

console.log(toDoList.deleteTask(124));

console.log(toDoList.changeTask(125, 'to comlete the test'));

console.log(toDoList.updateStatus(125));
