import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

export const Login = React.createClass({
  onLogin: function () {
    let {dispatch} = this.props;

    dispatch(actions.startLogin());
  },

  render: function () {
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="columns small-centered small-10 medium-6 large-4">
            <div className="callout callout-auth">
              <h3>Login</h3>
              <p>Login with GitHub account bellow.</p>
              <button className="button" onClick={this.onLogin}>Login with GitHub</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default connect()(Login);
