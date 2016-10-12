var React = require('react');

var TodoSearch = React.createClass({
  handlerSearch: function () {
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  },

  render: function () {
    return (
      <div>
        <div>
          <input
            type="text"
            ref="searchText"
            placeholder="Search todos"
            onChange={this.handlerSearch} />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              ref="showCompleted"
              onChange={this.handlerSearch} />
              Show completed todos
          </label>
        </div>
      </div>
    )
  }
});

module.exports = TodoSearch;
