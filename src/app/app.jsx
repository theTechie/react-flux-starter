(function () {

  let React = require('react');
  let injectTapEventPlugin = require('react-tap-event-plugin');

  let Master = require('./components/master');

  //Needed for React Developer Tools
  window.React = React;

  //Needed for onTouchTap
  //Can go away when react 1.0 release
  //Check this repo:
  //https://github.com/zilverline/react-tap-event-plugin
  injectTapEventPlugin();

  React.render(<Master />, document.body);

})();	