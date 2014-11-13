// This file was automatically generated from templates.soy.
// Please don't edit this file by hand.

goog.provide('todomvc.view');

goog.require('soy');
goog.require('soydata');


todomvc.view.toDoItem = function(opt_data, opt_ignored) {
  return '<li ' + ((opt_data.checked) ? 'class="completed"' : '') + '><div class="view"><input class="toggle" type="checkbox" ' + ((opt_data.checked) ? 'checked' : '') + '><label>' + soy.$$escapeHtml(opt_data.content) + '</label><button class="destroy"></button></div><input class="edit" value="Rule the web"></li>';
};


todomvc.view.itemCount = function(opt_data, opt_ignored) {
  return '<span id="todo-count">' + todomvc.view.itemCountInner(opt_data) + '</span>';
};


todomvc.view.itemCountInner = function(opt_data, opt_ignored) {
  return '<strong>' + soy.$$escapeHtml(opt_data.number) + '</strong> ' + ((opt_data.number == 1) ? 'item' : 'items') + ' left';
};


todomvc.view.clearCompleted = function(opt_data, opt_ignored) {
  return '<button id="clear-completed">' + todomvc.view.clearCompletedInner(opt_data) + '</button>';
};


todomvc.view.clearCompletedInner = function(opt_data, opt_ignored) {
  return 'Clear completed (' + soy.$$escapeHtml(opt_data.number) + ')';
};
