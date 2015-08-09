import Ember from 'ember';

export default Ember.Controller.extend({
	sortBy: 'titleDesc',
	sortProperties: Ember.computed('sortBy', function(){
		var options = {
			'titleAsc':'title:asc',
			'titleDesc':'title:desc',
			'dateAsc':'createdAt:asc',
			'dateDesc': 'createdAt:desc',
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
	isSortedByTodoCount: function(){
		var sortBy = this.get('sortBy');
		return sortBy.indexOf('todosCountAsc') >= 0;
	}.property('sortBy'),
	sortedList: Ember.computed.sort("model.todos", "sortProperties"),
	actions:{
		createTodo: function(){
            var controller, title, list, todo;
            controller = this;
            title = this.get('title');
            list = this.get('model');
            if (!title.trim()) {
                return;
            }
            todo = this.store.createRecord('todo', {
                title: title,
                list: list.id
            });
            list.get('todos').pushObject(todo);
            this.set('title', '');
        },
         setSorting: function(option){
        	this.set('sortBy', option);
        }
    }
});
