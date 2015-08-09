import Ember from 'ember';
import Todo from '../../models/todo';

export default Ember.Controller.extend({
	isEditingTitle: false,
	actions:{
		editingList: function(){
			this.set('isEditingTitle', true);
		},
		editList: function(){
			this.set('isEditingTitle', false);
		},
		deleteList: function(){
			var list, controller;
			controller = this;
			list = this.get('model');

			list.destroyRecord().then(function(){
				var list_id = controller.store.all('list').get('firstObject').get('id');
				controller.transitionToRoute('lists.list.todos', list_id);
			});
		},
	}
});
