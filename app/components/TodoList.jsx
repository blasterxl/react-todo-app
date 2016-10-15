import React from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';
import TodoAPI from '../api/TodoAPI';

const TodoList = React.createClass({
  render: function () {
    const { todos, showCompleted, searchText } = this.props;

    const renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        );
      }

      return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

function mapStateToProps(state) {
  return {
    todos: state.todosReducer,
    showCompleted: state.showCompletedReducer,
    searchText: state.searchTextReducer
  };
};

export default connect(mapStateToProps)(TodoList);
