import React from 'react';

//STYLES//
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  footer: {
    padding: 25,
    clear: 'both',
    backgroundColor: '#ccc',
    fontFamily: '"Alegreya Sans", sans-serif',
  }
}

class Footer extends React.Component {

    render() {
        return (
          <footer style={styles.footer}>
            <span className="copyright">Made by Nienke</span>
          </footer>
        );
    }
}

export default Footer;
