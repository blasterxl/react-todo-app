var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var Todo = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });
});
