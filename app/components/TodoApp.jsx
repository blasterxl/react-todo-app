var React = require('react');
var uuid = require('node-uuid');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk dog',
          completed: false
        }, {
          id: uuid(),
          text: 'Clean the yard',
          completed: true
        }, {
          id: uuid(),
          text: 'Do something',
          completed: false
        }, {
          id: uuid(),
          text: 'Check mail',
          completed: true
        }
      ]
    }
  },

  handlerAddTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false
        }
      ]
    });
  },

  handlerSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },

  handlerToggle: function (id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({todos: updatedTodos});
  },

  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handlerSearch} />
        <TodoList todos={todos} onToggle={this.handlerToggle} />
        <AddTodo onAddTodo={this.handlerAddTodo} />
      </div>
    )
  }
});

module.exports = TodoApp;
