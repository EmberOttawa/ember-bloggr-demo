// Please note that Handlebars helpers will only be found automatically by the
// resolver if their name contains a dash (reverse-word, translate-text, etc.)
// For more details: http://stefanpenner.github.io/ember-app-kit/guides/using-modules.html

var showdown = new Showdown.converter();

export default Ember.Handlebars.makeBoundHelper(function(input) {
  return new Ember.Handlebars.SafeString(showdown.makeHtml(input));
});