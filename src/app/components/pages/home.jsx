let React = require('react');

class HomePage extends React.Component {

    constructor() {
      super();
    }

    render() {
      let style = {
        paddingTop: "10px"
      };

      return (
        <div style={style}>
          Welcome to React Starter Application !
        </div>
      );
    }
}

module.exports = HomePage;
