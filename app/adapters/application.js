import DS from 'ember-data';

// export default DS.RESTAdapter.extend({
// 	namespace: 'api'
// });

export default DS.ActiveModelAdapter.extend({
	host: 'api.emberTodoAdvanced.com/v1'
});