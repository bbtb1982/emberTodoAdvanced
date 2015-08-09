import Ember from 'ember';
import List from '../models/list';
export default Ember.Controller.extend({
	sortBy: 'titleDesc',
	sortProperties: Ember.computed('sortBy', function(){
		var options = {
			'titleAsc':'title:asc',
			'titleDesc':'title:desc',
			'dateAsc':'createdAt:asc',
			'dateDesc': 'createdAt:desc',
			'todosCountAsc':'todosCount:asc',
			'todosCountDesc': 'todosCount:desc',
			'todosCountPendingAsc':'todosCountPending:asc',
			'todosCountPendingDesc': 'todosCountPending:desc'
		};
		return options[this.get('sortBy')].split(',');
	}),
	isSortedByTitle: function(){
		var sortBy = this.get('sortBy');
		return sortBy.indexOf('titleAsc') >= 0;
	}.property('sortBy'),
	isSortedByDate: function(){
		var sortBy = this.get('sortBy');
		return sortBy.indexOf('dateAsc') >= 0;
	}.property('sortBy'),
	isSortedByTodoCountTotal: function(){
		var sortBy = this.get('sortBy');
		return sortBy.indexOf('todosCountAsc') >= 0;
	}.property('sortBy'),
	isSortedByTodoCountPending: function(){
		var sortBy = this.get('sortBy');
		return sortBy.indexOf('todosCountAsc') >= 0;
	}.property('sortBy'),
	// pendingTodosCount: Ember.compupted.length('pendingTodos'),
	sortedList: Ember.computed.sort("model", "sortProperties"),
    actions: {
        createList: function() {
            var controller,title, list;
            controller = this;
            title = this.get('title');
            if (!title.trim()) {
                return;
            }
            list = this.store.createRecord('List', {
                title: title,
                todos: [],
                todosCount: 0
            });
            this.set('title', '');
            list.save().then(function(){
            	controller.transitionTo('lists.list.todos', list);
            });
        },
        setSorting: function(option){
        	this.set('sortBy', option);
        }
    }
});