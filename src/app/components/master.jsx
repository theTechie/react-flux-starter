let React = require('react');
let Home = require('./pages/home');

class Master extends React.Component {

  constructor() {
    super();
  }

  getStyles() {
    return {
      wrapper: {
        minHeight: '100%',
        position: 'relative'
      },
      header: {
        padding: '10px',
        textAlign: 'center',
        backgroundColor: 'gray',
        height: '50px',
        color: 'White'
      },
      content: {
        paddingBottom: '100px',
        textAlign: 'center',
        height: '456px'
      },
      footer: {
        backgroundColor: 'gray',
        textAlign: 'center',
        width: '100%',
        height: '100px',
        position: 'absolute',
        bottom: '0',
        left: '0'
      },
      a: {
        color: 'White'
      },
      p: {
        padding: '0',
        color: 'White',
        textAlign: 'center'
      }
    };
  }

  render() {
    let styles = this.getStyles();
    let title = "React + Flux";

    return (
      <div style={styles.wrapper}>

        <div style={styles.header}>
          <p style={styles.p}>
            <h2>{title}</h2>
          </p>
        </div>

        <div style={styles.content}>
          <Home />
        </div>

        <div style={styles.footer}>
          <p style={styles.p}>
            React Starter App by <strong>theTechie</strong>
          </p>
            <a href="http://www.github.com/theTechie">
              <img src="images/github.png" />
            </a>
        </div>

      </div>
    );
  }

}

module.exports = Master;