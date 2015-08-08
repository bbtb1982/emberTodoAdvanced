import DS from 'ember-data';
export default DS.Model.extend({
	title: DS.attr('string'),
	isComplete: DS.attr('boolean', {defaultValue: false}),
	createdAt: DS.attr('date', {defaultValue: new Date() }),
	todos: DS.hasMany('todo', {async: false}),
	todosCount: DS.attr('number')
});
