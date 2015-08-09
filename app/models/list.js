import Ember from 'ember';
import DS from 'ember-data';
export default DS.Model.extend({
	title: DS.attr('string'),
	isComplete: Ember.computed('todos', function(){
		return this.get('todos').filterBy('isComplete', false).get('length') === 0;
	}).property('todos.@each.isComplete'),
	createdAt: DS.attr('date', {defaultValue: new Date() }),
	todos: DS.hasMany('todo', {async: false}),
	todosCount: Ember.computed('todos', function(){
		return this.get('todos').get('length');
	}).property('todos.@each'),
	todosCountPending: Ember.computed('todos', function(){
		return this.get('todos').filterBy('isComplete', false).get('length');
	}).property('todos.@each.isComplete')
});
