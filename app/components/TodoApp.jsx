var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk dog'
        }, {
          id: 2,
          text: 'Clean the yard'
        }, {
          id: 3,
          text: 'Do something'
        }, {
          id: 4,
          text: 'Check mail'
        }
      ]
    }
  },

  handlerAddTodo: function (text) {
    alert('new todo: ' + text);
  },

  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handlerAddTodo} />
      </div>
    )
  }
});

module.exports = TodoApp;
