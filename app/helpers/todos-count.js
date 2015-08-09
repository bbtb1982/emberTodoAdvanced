import Ember from 'ember';

export function todosCount(list) {
  return list[0].get('todos').length;
}

export default Ember.Helper.helper(todosCount);
