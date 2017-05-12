
// Register `todo` component, along with its associated controller and template
angular.
module('todo').
component('todo', {
  templateUrl: 'app/todo.template.html',
  controller: function TodoController() {
    this.tasks = [];

    this.orderProp = 'priority';
    this.currentId = 0
    this.addTodo = function(taskName, priority) {
      var newTask = {
        name: taskName,
        priority: priority,
        id: this.currentId
      };
      this.tasks.push(newTask);
      this.currentId++;
    }
  }
});
