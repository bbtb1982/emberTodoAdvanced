import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('lists', function() {
    this.route('list', {path:'/:id'}, function() {
      this.route('todos');
    });
  });
  this.route('about');
  this.route('contact');
});

export default Router;
