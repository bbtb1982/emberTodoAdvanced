import DS from 'ember-data';
export default DS.Model.extend({
	title: DS.attr('string'),
	isComplete: DS.attr('boolean'),
	createdAt: DS.attr('date', {defaultValue: new Date() }),
	todos: DS.hasMany('todo', {async: false}),
	todosCount: DS.attr('number')
});
