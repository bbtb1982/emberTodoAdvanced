import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string'),
	isComplete: DS.attr('boolean', {defaultValue: false}),
	createdAt: DS.attr('date', {defaultValue: new Date() }),
	list: DS.belongsTo('list', {async: true})
});
