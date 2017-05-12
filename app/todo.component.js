
// Register `todo` component, along with its associated controller and template
angular.
module('todo').
component('todo', {
  templateUrl: 'app/todo.template.html',
  controller: function TodoController() {
    this.tasks = [];
    this.orderProp = 'priority';
    this.currentId = 0;
    this.addTodo = function(taskName, priority) {
      var newTask = {
        name: taskName,
        priority: priority,
        id: this.currentId
      };
      this.tasks.push(newTask);
      this.currentId++;
    };
    this.removeTodo = function(i) {
      this.tasks.splice(i,1);
      var tasksQuantity = this.tasks.length;
      for (j = i; j < tasksQuantity; j++) {
        this.tasks[j].id--;
      }
      this.currentId--;
    }
  }
});
