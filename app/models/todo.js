import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string'),
	isCompleleted: DS.attr('boolean', {defaultValue: false}),
	createAt: DS.attr('date', {defaultValue: new Date() }),
	list: DS.belongsTo('list', {async: true})
});
