import Ember from 'ember';

export function formatDate(date) {
  return moment(date[0]).format('D-M-YYYY');
}

export default Ember.Helper.helper(formatDate);
