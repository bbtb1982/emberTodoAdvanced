import Ember from 'ember';

export function completedTodosCount(list) {
  return list[0].get('todos').filterBy('isComplete', true).get('length');
}

export default Ember.Helper.helper(completedTodosCount);
