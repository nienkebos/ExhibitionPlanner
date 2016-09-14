import React from 'react';

//STYLES//
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  footer: {
    padding: 25,
    clear: 'both',
    backgroundColor: '#ccc',
    position: 'relative',
  },
  text: {
    position: 'absolute',
    right: 25,
    top: 15,
  }
}

class Footer extends React.Component {

    render() {
        return (
          <footer style={styles.footer}>
            <span className="copyright" style={styles.text}>Made by Nienke - 2016 </span>
          </footer>
        );
    }
}

export default Footer;
