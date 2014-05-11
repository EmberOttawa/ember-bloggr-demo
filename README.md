# Ember Bloggr Demo

This demo was given as part of the [May 2014 Ember.js Ottawa](http://www.meetup.com/Ember-js-Ottawa/events/177550452/) meetup. It is shamelessly based on the [Building an Ember.js Application](https://www.youtube.com/watch?v=1QHrlFlaXdI) video guide by Tom Dale. However, it has been slightly adapted to use a newer version of Ember (v.1.5.1), [Ember App Kit](http://iamstef.net/ember-app-kit/) and updates to the following libraries which are utilised in the demo:

- [Bootstrap](http://getbootstrap.com/) - for base styling
- [moment.js](http://momentjs.com/) - to format dates nicely
- [Showdown](https://github.com/coreyti/showdown#showdown-) - to convert markdown to HTML


Slides forthe metup where this was presented can be found [here](http://emberottawa.github.io/2014-05-May-Meetup/#/).

## Instructions

Follow the steps to run the demo:

1. Checkout or copy the code form this repository
2. Ensure you have [node.js](http://nodejs.org/) installed on your machine.
3. Install Grunt & Bower by running ``npm install -g grunt-cli`` & ``npm install -g bower``
4. Run ``npm install`` in the directory where you placed the files from the repository.
5. Once all the npm modules have installed run ``grunt server``so start a local web server.
6. Navigate to [http://localhost:8000] to view the app.

For more detailed instructions on getting going with an Ember App Kit project, see the [Ember App Kit getting started guide](http://iamstef.net/ember-app-kit/guides/getting-started.html).

### Revisit Building the App

To review how we built this application, you can check the git commit history, which shows the steps we went through to go from a base "Hello World" project tohaving a bloggr application.