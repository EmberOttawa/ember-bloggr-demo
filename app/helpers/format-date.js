// Please note that Handlebars helpers will only be found automatically by the
// resolver if their name contains a dash (reverse-word, translate-text, etc.)
// For more details: http://stefanpenner.github.io/ember-app-kit/guides/using-modules.html

// import moment from 'moment';

export default Ember.Handlebars.makeBoundHelper(function(date) {
  return moment(date).fromNow();
});
