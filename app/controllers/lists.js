import Ember from 'ember';
import List from '../models/list';
export default Ember.Controller.extend({
    actions: {
        createList: function() {
        	debugger;
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
        }
    }
});