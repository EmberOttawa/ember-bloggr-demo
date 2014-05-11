var Router = Ember.Router.extend();

Router.map(function() {
  this.route('about');							//  /about
  this.resource('posts', function() {			//  /posts
    this.route('post', { path: ':post_id' });	//  /posts/:post_id
  });
});

export default Router;
