import React from 'react';

//COMPONENTS//


//STYLES//
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {green200} from '../styles/colors';

const styles = {
    backgroundColor: green200
}


class Header extends React.Component {

    render() {
        return (
          <AppBar
            title="Exhibition Planner"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            style={styles}
          />
        );
    }
}

export default Header;
